<template>
    <h3>{{topText}}</h3>
</template>

<script>
export default {
    props : {
        topText : String
    }
}
</script>

<style>
    h3 {
        text-align: center;
        font-size: 3rem;
        font-weight: 900;
    }
</style>