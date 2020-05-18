<template>
    <form class="cardForm">
        <div class="cardNumberDiv">
            <label for="cardNumber">CARD NUMBER</label>
            <input type="text" v-model="card.cardNumber" id="cardNumber" name="cardNumber">
        </div>
        <div class="carholderNameDiv">
            <label for="carholderName">CARDHOLDER NAME</label>
            <input type="text" v-model="card.carholderName" id="carholderName" name="carholderName">
        </div>
        <div class="validAndCcv">
            <div class="validThruDiv">
                <label for="validThru">VALID THRU</label>
                <input type="text" v-model="card.validUntil" id="validThru" name="validThru">
            </div>
            <div class="ccvDiv">
                <label for="ccv">CCV</label>
                <input type="text" id="ccv" name="ccv">
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
        </div>
    </form>
</template>

<script>

export default {
    props : {
        card : Object
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
</style>