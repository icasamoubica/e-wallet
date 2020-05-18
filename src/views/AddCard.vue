<template>
    <div class="addCard">
        <top class="topText" v-bind:topText="'ADD A NEW'"></top>
        <top class="topText" v-bind:topText="'BANK CARD'"></top>
        <card v-bind:card=newCard />
        <card-form  v-bind:card = newCard
                    v-bind:cardValidations="cardValidations"></card-form>
        <router-link v-bind:to="'/'">
            <button class="adCardButtonBlack" v-on:click="addCard(newCard)">ADD CARD</button>
        </router-link>
    </div>
</template>

<script>
import Top from '@/components/Top'
import Card from '@/components/Card'
import CardForm from '@/components/CardForm'
export default {
    data() { return {
        newCard : {
            "id" : this.getNewId(),
            "color" : 'grey',
            "cardNumber" : 'XXXX XXXX XXXX XXXX',
            "carholderName" : 'FIRSTNAME LASTNAME',
            "validUntil" : 'MM/YY',
            "vendor" : {
              "name" : "bitcoin",
              "logo" : "vendor-bitcoin.svg",
              "color" : "lightgrey",
              "textColor" : "black",
              "textShadow" : "1px 1px 0px #ffffff"
            }
        },
        cardValidations : {
            "cardNumberFormat" : true,
            "cardNumberEmpty" : true,
            "nameFormat" : true,
            "nameEmpty" : true,
            "validThruFormat" : true,
            "validThruEmpty" : true,
            "ccvFormat" : true,
            "ccvEmpty" : true,
            "vendorEmpty" : true
        }
    }},
    components : {
        Top,
        Card,
        CardForm
    },
    methods : {
        addCard(cardToAdd) {
            this.$root.addCard(cardToAdd)
        },
        getNewId() {
            return this.$root.getNewId()
        }
    }
}
</script>

<style>
    .addCard {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .topText {
        margin: 0;
        font-size: 2rem;
    }
    .card {
        box-shadow: 0 0 10px rgb(58, 55, 55);
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .cardNumber {
        font-size: 1.8rem;
    }
    .adCardButtonBlack {
      color: white;
      border: 1px solid black;
      margin-top: 1rem;
      font-size: 1.2rem;
      padding: 1.5rem;
      border-radius: 0.6rem;
      width: 25rem;
      background-color: black;
    }
</style>