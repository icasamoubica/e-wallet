<template>
    <form class="cardForm">
        <div class="cardNumberDiv">
            <label for="cardNumber">CARD NUMBER</label>
            <input type="text" v-model="card.cardNumber" id="cardNumber" name="cardNumber">
            <div class="error">
                <p class="errorCnFormat">Numbers only in format xxxx xxxx xxxx xxxx</p>
                <p class="errorCnEmpty"></p>
            </div>
        </div>
        <div class="carholderNameDiv">
            <label for="carholderName">CARDHOLDER NAME</label>
            <input type="text" v-model="card.carholderName" id="carholderName" name="carholderName">
            <div class="error">
                <p class="errorNameEmpty">Field cannot be empty</p>
                <p class="errorFormat">Please write both first and last name</p>
            </div>
        </div>
        <div class="validAndCcv">
            <div class="validThruDiv">
                <label for="validThru">VALID THRU</label>
                <input type="text" v-model="card.validUntil" id="validThru" name="validThru">
                <div class="error">
                    <p class="errorFormat">Please write in format MM/YY</p>
                    <p class="errorEmpty">Field cannot be empty</p>
                </div>
            </div>
            <div class="ccvDiv">
                <label for="ccv">CCV</label>
                <input type="text" id="ccv" name="ccv">
                <div class="error">
                    <p class="errorFormat">Three digits only</p>
                    <p class="errorEmpty">Field cannot be empty</p>
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
             <p class="errorEmpty">Field cannot be empty</p>
            </div>
        </div>
    </form>
</template>

<script>

export default {
    props : {
        card : Object,
        cardValidations : Object
    },
    computed : {
      getVendors() {
          return this.$root.getVendors()
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
    .validAndCcv div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width : 45%;
    }
    .validThruDiv {
        margin-right: 2.5rem;
    }
    .error {
        color : red;
        font-size: 0.6rem;
    }
    .error > p {
        text-align: left;
    }
</style>