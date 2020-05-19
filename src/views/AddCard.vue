<template>
    <div class="addCard">
        <top class="topText" v-bind:topText="'ADD A NEW'"></top>
        <top class="topText" v-bind:topText="'BANK CARD'"></top>
        <card v-bind:card=newCard />
        <card-form  v-bind:card = newCard
                    v-bind:cardValidations="cardValidations"></card-form>
        <!-- <router-link v-bind:to="'/'"> -->
            <button class="adCardButtonBlack" v-on:click="validate">ADD CARD</button>
        <!-- </router-link> -->
    </div>
</template>

<script>
import Top from '@/components/Top'
import Card from '@/components/Card'
import CardForm from '@/components/CardForm'
import Validations from '@/assets/scripts/validations.js'

export default {
    data() { return {

        // initial card for adding. note that the color is lightgrey by default
        // and that logo is bitcoing without that being the vendor

        newCard : {
            "id" : this.getNewId(),
            "color" : 'grey',
            "cardNumber" : 'XXXX XXXX XXXX XXXX',
            "carholderName" : 'FIRSTNAME LASTNAME',
            "validUntil" : 'MM/YY',
            "ccv" : "XXX",
            "vendor" : {
                "name" : "none",
                "logo" : "bitcoin",
                "color" : "lightgrey",
                "textColor" : "black",
                "textShadow" : "0.5px 0.5px #ffffff, -0.5px -0.5px lightgrey",
                "chip" : "dark"
            }
        },
        // object contains errors for failed validations
        // ideally all should be false

        cardValidations : {
            "cardNumberFormat" : false,
            "cardNumberEmpty" : false,
            "nameFormat" : false,
            "nameEmpty" : false,
            "validThruFormat" : false,
            "validThruEmpty" : false,
            "ccvFormat" : false,
            "ccvEmpty" : false,
            "vendorEmpty" : false
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
        },
        validate() {

            this.cardValidations = Validations.validate(this.newCard)

            if (this.allValidationsPassed()) {
                this.$root.addCard(this.newCard)
                this.$router.push('/')
            }
        },
        allValidationsPassed() {
            return Validations.allValidationsPassed(this.cardValidations)
        }
    },

    Validations
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