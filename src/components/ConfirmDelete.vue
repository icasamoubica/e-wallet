<template>
    <div class="confirmDialogContainer">
        <div class="confirmDialog">
            <p>Are you sure you want</p>
            <p>to delete this card?</p>
            <button v-on:click="deleteSelected">YES</button>
            <button v-on:click="cancelConfirmation">NO</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        deleteSelected() {
            this.$store.state.renderDeleteConfirmation = false
            this.$store.commit('deleteCard', this.$store.state.selectedCard.id)
            this.$store.state.selectedCard = null
            // this.$router.push('/')
        },
        cancelConfirmation() {
            this.$store.state.renderDeleteConfirmation = false
        } 
    }
    
}
</script>

<style>
.confirmDialogContainer {
    width: 100vw;
    height: 100vh;
    z-index: 9;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.confirmDialog {
    border: 2px solid black;
    border-radius: 1rem;
    padding: 2rem;
    background-color: rgb(211, 211, 211);
    position: fixed;
    z-index: 10;
    box-shadow: 0 0 5rem 5rem rgba(255, 255, 255, 1);
}
.confirmDialog p {
    font-weight: 900;
}
.confirmDialog button {
    margin: 1rem;
    width: 5rem;
    height: 2rem;
    border-radius: 0.3rem;
}
</style>