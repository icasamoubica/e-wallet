<template>
  <div class="home">
      <top v-bind:topText="'E-WALLET'"></top>
      <div class="deleteCard" v-if="cardIsSelected" v-on:click="confirmDeleteSelected">
         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z"/></svg>
      </div>
      <card v-if="cardIsSelected"
            v-bind:card="selectedCard"
            v-on:click="unselectCard"
            shadowSize
            >
      </card>
      <card-stack v-bind:cardStack="existingCards"
                  v-bind:containerHeight="getCardStackHeight"
                  v-bind:selectedCard="selectedCard"
                  v-on:cardSelected="selectCard">
      </card-stack>
      <router-link v-bind:to="'/addcard'">
        <button class="addCardButton">ADD A NEW CARD</button>
      </router-link>
      <confirm-delete v-if="renderDeleteConfirmation" ></confirm-delete>
  </div>
</template>

<script>
import Top from '@/components/Top'
import Card from '@/components/Card'
import CardStack from '@/components/CardStack'
import ConfirmDelete from '@/components/ConfirmDelete'

export default {

  name: 'Home',

  data(){return{
    cardStackHeight : 0,
  }},

  methods : {
    selectCard(cardToSelect) {
      this.$store.state.selectedCard = cardToSelect
    },
    unselectCard() {
      this.$store.state.selectedCard = null
    },
    confirmDeleteSelected() {
      this.$store.state.renderDeleteConfirmation = true
    }
  },

  computed : {
      cardIsSelected() {
        return this.$store.state.selectedCard != null
      },
      getCardStackHeight() {
        if(this.$store.state.cards.length > 0) {
          return 20 + (this.$store.state.cards.length-1)*4
        } else {
          return 0
        }  
      },
      existingCards() {
        return this.$store.state.cards
      },
      selectedCard() {
        return this.$store.state.selectedCard
      },
      renderDeleteConfirmation() {
        return this.$store.state.renderDeleteConfirmation
      }
  },

  components : {
      Top,
      Card,
      CardStack,
      ConfirmDelete
  },
  created() {
    this.$store.dispatch('loadData')
  },
  beforeUpdate() {

  }

}
</script>

<style>
    .home {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .deleteCard {
      position: relative;
      left: 10rem;
      border: 2px solid black;
      box-shadow: 0 0 2px black;
      border-radius: 0.8rem;
      width: 2.5rem;
      height : 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button.addCardButton {
      border: 1px solid black;
      margin-top: 1rem;
      font-size: 1.2rem;
      padding: 1.5rem;
      border-radius: 0.6rem;
      width: 25rem;
      background-color: white;
    }
    
    
</style>