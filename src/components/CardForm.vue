<template>
    <form class="cardForm">
        <div class="cardNumberDiv">
            <label for="cardNumber">CARD NUMBER</label>
            <input type="text"  v-model="card.cardNumber" 
                                placeholder="XXXX XXXX XXXX XXXX" 
                                id="cardNumber" name="cardNumber">
            <div class="error">
                <p v-if="cardValidations.cardNumberFormat && !cardValidations.cardNumberEmpty" class="errorCnFormat">Numbers only in format xxxx xxxx xxxx xxxx</p>
                <p v-if="cardValidations.cardNumberEmpty" class="errorCnEmpty">Field cannot be empty</p>
            </div>
        </div>
        <div class="carholderNameDiv">
            <label for="carholderName">CARDHOLDER NAME</label>
            <input type="text"  v-model="card.carholderName" 
                                placeholder="FIRSTNAME LASTNAME"
                                id="carholderName" name="carholderName">
            <div class="error">
                <p v-if="cardValidations.nameEmpty" class="errorNameEmpty">Field cannot be empty</p>
                <p v-if="cardValidations.nameFormat && !cardValidations.nameEmpty" class="errorFormat">Please write both first and last name</p>
            </div>
        </div>
        <div class="validAndCcv">
            <div class="validThruDiv">
                <label for="validThru">VALID THRU</label>
                <input type="text"  v-model="card.validUntil" 
                                    placeholder="MM/YY"
                                    id="validThru" name="validThru">
                <div class="error">
                    <p v-if="cardValidations.validThruFormat && !cardValidations.validThruEmpty" class="errorFormat">Please write in format MM/YY</p>
                    <p v-if="cardValidations.validThruEmpty" class="errorEmpty">Field cannot be empty</p>
                </div>
            </div>
            <div class="ccvDiv">
                <label for="ccv">CCV</label>
                <input type="text"  v-model="card.ccv"
                                    placeholder="XXX"
                                    id="ccv" name="ccv">
                <div class="error">
                    <p v-if="cardValidations.ccvFormat && !cardValidations.ccvEmpty" class="errorFormat">Three digits only</p>
                    <p v-if="cardValidations.ccvEmpty" class="errorEmpty">Field cannot be empty</p>
                </div>
            </div>
        </div>
        <div class="vendorDiv">
            <label for="vendor">VENDOR</label>
            <select type="text" v-model="card.vendor" id="vendor" name="vendor">
                <option v-for="vendor in getVendors"
                        v-bind:key="vendor.name"
                        v-bind:value=vendor>
                        {{vendor.name}}
                </option>
            </select>
            <div class="error">
                <p v-if="cardValidations.vendorEmpty" class="errorEmpty">Please choose vendor</p>
            </div>
        </div>
    </form>
</template>

<script>

export default {
        // initial card for adding. note that the color is lightgrey by default
        // and that logo is bitcoing without it being the vendor

    props : {
        card: Object,
        cardValidations : Object
    },
    computed : {
      getVendors() {
          return this.$store.state.vendors
      }
    }
}
</script>

<style>
    .cardForm {
        max-width: 25rem;
    }
    input, select {
        border: 1.3px solid black;
        width: 100%;
        color: rgb(70, 68, 68);
        border-radius: 0.6rem;
        height: 3.5rem;
        font-size: 1.2rem;
        text-align: center;
    }
    .cardNumberDiv, .carholderNameDiv, .vendorDiv {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 25rem;
    }
    .validAndCcv {
        display: flex;
    }
    .validThruDiv, .ccvDiv {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width : 45%;
    }
    .validThruDiv {
        margin-right: 2.5rem;
    }
    .error {
        justify-content: space-between3;
        display: flex;
        flex-direction: row;
        color : red;
        font-size: 0.6rem;
    }
    .error > p {
        margin-left: 0.2rem;
        text-align: left;
    }
</style>