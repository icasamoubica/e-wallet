<template>
    <div class="cardStackContainer" v-bind:style="{'height': containerHeight + 'rem'}">
        <card v-for='(singleCard, index) in getCardStack'
              v-bind:key='singleCard.id'
              v-bind:card="singleCard"
              v-on:click="$emit('cardSelected', singleCard)"
              v-bind:style="{   'top':index*4+'rem', 
                                'box-shadow' : '0px 0px 5px rgba(0, 0, 0, 0.5)'}"
        />
    </div>
</template>

<script>
import Card from '@/components/Card'

export default {
    components : {
        Card
    },
    props : {
        cardStack : Array,
        containerHeight : Number,
        selectedCard : Object
    },
    computed : {
        getCardStack() {
            console.log(this.cardStack);
            
            if(this.selectedCard!=null) {
                 return this.cardStack.filter(card => card.id!==this.selectedCard.id)
            } else {
                return this.cardStack
            }
        }
    }
}   
</script>

<style>
.cardStackContainer {
    position : relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cardStackContainer .card {
    box-shadow: none;
    position: absolute;
}
</style>