<template>
    <div class="cardStackContainer" v-bind:style="{'height': containerHeight + 'rem'}">
        <card v-for='(singleCard, index) in cardStack' 
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
        containerHeight : Number
    }
}
</script>

<style scoped>
.cardStackContainer {
    position : relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        margin-top: 2rem;
}
.cardStackContainer .card {
    box-shadow: none;
    position: absolute;
}
</style>