<template>
    <div class="card"   v-bind:class="{shadowed:shadowSize}"
                        v-if="card!=null"
                        v-on:click="$emit('click')"
                        v-bind:style="{ 'background-color': card.vendor.color,
                                        'color' : card.vendor.textColor
                        }">
        <div class="logos" >
            <div>
                <img v-bind:src="require('@/assets/img/chip-' + card.vendor.chip + '.svg')" alt="chip-light">
            </div>
            <div>
                <img v-bind:src="require('@/assets/img/vendor-' + card.vendor.logo + '.svg')" alt="chip-dark">
            </div>
        </div>
        <div class="cardNumber" v-bind:style="{'text-shadow' : card.vendor.textShadow}">
            {{card.cardNumber}}
        </div>
        <div class="cardInfo" v-bind:style="{'color' : card.vendor.textColor }">
            <p class="textForCarholderName"> CARDHOLDER NAME</p>
            <p class="textForValidThru" v-bind:style="{'text-shadow' : card.vendor.textShadow}">VALID THRU</p>
            <p class="cardholderName">{{card.carholderName}}</p>
            <P class="validThru" v-bind:style="{'text-shadow' : card.vendor.textShadow}">{{card.validUntil}}</P>
        </div>
    </div>
</template>

<script>

export default {
    props : {
        card: Object,
        shadowSize : Boolean
    }
}
</script>

<style>
.card {
    padding: 1.5rem;
    border-radius: 0.6rem;
    width: 22rem;
    height: 13em;
    transition: transform 100ms ease-in-out;
    box-shadow: 0px 0px 5px 0 black, inset -0.5px -0.5px 1px 0px rgba(255, 255, 255, 0.3);
}
.card.shadowed {
    box-shadow: 0px 0px 10px 1px black, inset -0.5px -0.5px 1px 0px rgba(255, 255, 255, 0.3);
}
.logos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}
.cardNumber {
    min-height: 2.4rem;
    margin: 0;
    padding: 0;
    font-size: 2rem;
    margin-bottom: 1rem;
}
.cardInfo {
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: 40% 60%;
}
.textForCarholderName {
    font-size: 0.7rem;
    text-align: left;

}
.cardholderName {
    margin-top: 0;
    text-align: left;
    font-size: 1.1rem;
}
.textForValidThru {
    font-size: 0.7rem;
    text-align: right;

}
.validThru{
    text-align: right;
    font-size: 1rem;
    margin-top: 0;
}

.card:hover {
    transform : perspective(200px) translateZ(5px);
    z-index: 1;
}
</style>