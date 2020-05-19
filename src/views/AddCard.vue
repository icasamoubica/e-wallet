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

            // resetting validation values

            // this.cardValidations = {
            //     "cardNumberFormat" : false,
            //     "cardNumberEmpty" : false,
            //     "nameFormat" : false,
            //     "nameEmpty" : false,
            //     "validThruFormat" : false,
            //     "validThruEmpty" : false,
            //     "ccvFormat" : false,
            //     "ccvEmpty" : false,
            //     "vendorEmpty" : false
            // }

            // // validating card number
            // if (this.newCard.cardNumber.length === 0) {
            //     this.cardValidations.cardNumberEmpty = true
            // } else if (this.newCard.cardNumber.length != 19) {
            //     this.cardValidations.cardNumberFormat = true
            // } else if (!(Number.isInteger(parseInt(this.newCard.cardNumber.substring(0, 4)), 10) 
            //         && Number.isInteger(parseInt(this.newCard.cardNumber.substring(5, 9)), 10)
            //         && Number.isInteger(parseInt(this.newCard.cardNumber.substring(10, 14)), 10)
            //         && Number.isInteger(parseInt(this.newCard.cardNumber.substring(15, 19)), 10))) {
            //     this.cardValidations.cardNumberFormat = true
            // } else {
            //     this.cardValidations.cardNumberFormat = false
            // }
            // // validating cardholder name
            // if (this.newCard.carholderName.length===0) {
            //     this.cardValidations.nameEmpty = true
            // } else if (!this.newCard.carholderName.trim().includes(' ')) {
            //     this.cardValidations.nameFormat = true
            // } else {
            //     this.cardValidations.nameFormat = false
            // }
            // // validating valid thru
            // if (this.newCard.validUntil.length === 0) {
            //     this.cardValidations.validThruEmpty = true
            // } else if (this.newCard.validUntil.length != 5) {
            //     this.cardValidations.validThruFormat = true
            // } else if (!(   Number.isInteger(parseInt(this.newCard.validUntil.substring(0,1)))
            //             && Number.isInteger(parseInt(this.newCard.validUntil.substring(3,4))))) {

            //     this.cardValidations.validThruFormat = true
            // } else if (!this.newCard.validUntil.trim().includes('/')) {
            //     this.cardValidations.validThruFormat = true
            // } else {
            //     this.cardValidations.validThruFormat = false
            // }
            // // validating ccv
            // if (this.newCard.ccv.length === 0) {
            //     this.cardValidations.ccvEmpty = true
            // } else if (this.newCard.ccv.length != 3) {
            //     this.cardValidations.ccvEmpty = true
            // } else if (!(Number.isInteger(parseInt(this.newCard.ccv)))) {
            //     this.cardValidations.ccvEmpty = true
            // } else {
            //     this.cardValidations.ccvEmpty = false
            // }
            // // validating vendor
            // if (this.newCard.vendor.name === 'none') {
            //     this.cardValidations.vendorEmpty = true
            // } else {
            //     this.cardValidations.vendorEmpty = false
            // }
            // if (this.allValidationsPassed()) {
            //     console.log('validations passed');
            //     this.$root.addCard(this.newCard)
            //     this.$router.push('/')
            // }
        },
        allValidationsPassed() {

            return Validations.allValidationsPassed(this.cardValidations)

            // console.log('running validations');
            
            // if (this.cardValidations.cardNumberFormat === false &&
            //     this.cardValidations.cardNumberEmpty === false &&
            //     this.cardValidations.nameFormat === false &&
            //     this.cardValidations.nameEmpty === false &&
            //     this.cardValidations.validThruFormat === false &&
            //     this.cardValidations.validThruEmpty === false &&
            //     this.cardValidations.ccvFormat === false &&
            //     this.cardValidations.ccvEmpty === false &&
            //     this.cardValidations.vendorEmpty === false) {
            //     console.log('everything in order');
            //     return true
            // } else {
            //     return false
            // }
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