<template>
  <div class="home">
      <top v-bind:topText="'E-WALLET'"></top>
      <card v-if="cardIsSelected"
            v-bind:card="selectedCard"
            v-on:click="unselectCard"
            v-bind:style="{'box-shadow' : '0px 0px 10px black'}">
      </card>
      <card-stack v-bind:cardStack="existingCards"
                  v-on:cardSelected="selectCard">
      </card-stack>
      <router-link v-bind:to="'/addcard'">
        <button>ADD A NEW CARD</button>
      </router-link>
  </div>
</template>

<script>
import Top from '@/components/Top'
import Card from '@/components/Card'
import CardStack from '@/components/CardStack'

export default {

  name: 'Home',

  data(){return{
    cardStackHeight : 0,
    selectedCard : null
  }},

  methods : {
    cardIsSelected() {
      return this.selectedCard!=null
    },
    selectCard(cardToSelect) {
      this.selectedCard = cardToSelect
    },
    unselectCard() {
      this.selectedCard = null
    }
  },

  computed : {
      existingCards() {
          return this.$root.getCards()
      },
      getCardStackHeight() {
        return 30 + this.$root.getCards.length*4
      }
      
    },

  components : {
      Top,
      Card,
      CardStack
  }

}
</script>

<style>
    .home {
      justify-self: flex-end;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    button {
      border: 1px solid black;
      margin-top: 1rem;
      font-size: 1.2rem;
      padding: 1.5rem;
      border-radius: 0.6rem;
      width: 25rem;
      background-color: white;
    }
</style>