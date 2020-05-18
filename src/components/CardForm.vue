<template>
    <form>
        <label for="cardNumber">CARD NUMBER</label>
        <input type="text" v-model="card.cardNumber" id="cardNumber" name="cardNumber">
        <label for="carholderName">CARDHOLDER NAME</label>
        <input type="text" v-model="card.carholderName" id="carholderName" name="carholderName">
        <label for="validThru">VALID THRU</label>
        <input type="text" v-model="card.validUntil" id="validThru" name="validThru">
        <label for="ccv">CCV</label>
        <input type="text" id="ccv" name="ccv">
        <label for="vendor">VENDOR</label>
        <select type="text" v-model="card.vendor" id="vendor" name="vendor">
            <option v-for="vendor in getVendors"
                    v-bind:key="vendor.name"
                    v-bind:value=vendor>
                    {{vendor.name}}
            </option>
        </select>
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
    input {
        border-radius: 0.6rem;
        height: 2.7rem;
    }
</style>