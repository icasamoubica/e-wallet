<template>
    <div class="addCard">
        <top class="topText" v-bind:topText="'ADD A NEW'"></top>
        <top class="topText" v-bind:topText="'BANK CARD'"></top>
        <card v-bind:card="newCard" />
        <card-form  v-bind:card = newCard
                    v-bind:cardValidations="cardValidations"></card-form>
        <button class="adCardButtonBlack" v-on:click="validate">ADD CARD</button>
    </div>
</template>

<script>
import Top from '@/components/Top'
import Card from '@/components/Card'
import CardForm from '@/components/CardForm'
import Validations from '@/assets/scripts/validations.js'

export default {
    data() { return {

        Validations,
        
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

        validate() {
            this.cardValidations = Validations.validate(this.$store.state.newCard)
            if (this.allValidationsPassed()) {
                this.$store.dispatch('loadData')
                this.$store.commit('addCard', this.$store.state.newCard)
                this.$store.commit('resetNewCard')
                this.$router.push('/')
            }
        },

        allValidationsPassed() {
            return Validations.allValidationsPassed(this.cardValidations)
        }
    },
    computed: {
        newCard() {
            return this.$store.state.newCard
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