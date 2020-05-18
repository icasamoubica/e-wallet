import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vendors from '@/assets/vendors.json'

Vue.config.productionTip = false

new Vue({
    data() { return {

      vendors : Vendors.vendors,

      cards : [
          {
            "id" : 1,
            "cardNumber" : '1234 1234 1234 1234',
            "carholderName" : 'CHRISTOFFER WALLENBERG',
            "validUntil" : '12/22',
            "vendor" : {
              "name" : "bitcoin",
              "logo" : "vendor-bitcoin.svg",
              "color" : "#ffcf57",
              "textColor" : "black",
              "textShadow" : "1px 1px 0px #ffffff"
            }
          },
          {
            "id" : 2,
            "cardNumber" : '4356 3456 3465 3465',
            "carholderName" : 'INGVAR KAMPARD',
            "validUntil" : '09/23',
            "vendor" : {
              "name" : "evil",
              "logo" : "vendor-evil.svg",
              "color" : "#d43761",
              "textColor" : "white",
              "textShadow" : " 1px 1px 0px #000"
            }
          },
          {
            "id" : 3,
            "cardNumber" : '8444 3456 0874 0112',
            "carholderName" : 'BILBO BAGGINS',
            "validUntil" : '01/99',
            "vendor" : {
              "name" : "blockchain",
              "logo" : "vendor-blockchain.svg",
              "color" : "#82679e",
              "textColor" : "white",
              "textShadow" : " 1px 1px 0px #000"
            }
          }


        ]
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
              
          }
    },
  router,
  render: h => h(App)
}).$mount('#app')
