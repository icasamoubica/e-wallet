import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vendors from '@/assets/vendors.json'
import Cards from '@/assets/cards.json'

Vue.config.productionTip = false

new Vue({
    data() { return {

      vendors : Vendors.vendors,

      cards : Cards.cards
    }},
    methods : {
        getCards() {
            return this.cards
        },
        getVendors() {
          return this.vendors
        },
        addCard(cardToAdd) {
          this.cards.push(cardToAdd)
          localStorage.setItem('cards', JSON.stringify(this.cards))
        },
        getNewId() {
          return this.getMax() + 1
        },
        getMax() {
          let ids = []
          for (let card of this.cards) {
            ids.push(card.id)
          }
          return Math.max(...ids)
        },
        deleteCard(id) {
          this.cards = this.cards.filter(card => card.id != id)
        },
        loadData() {
          console.log('attempting to load data...');
          if (localStorage.getItem('cards') != null) {
            console.log('Data exists, loading...');
            this.cards = JSON.parse(localStorage.getItem('cards'))
          } else {
            console.log('No data found...');
            
          }
        }
      },
    
  router,

  render: h => h(App)
}).$mount('#app')
