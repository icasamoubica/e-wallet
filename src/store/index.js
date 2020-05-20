import Vue from 'vue'
import Vuex from 'vuex'
import Vendors from '@/assets/data/vendors.json'
import Cards from '@/assets/data/cards.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vendors : Vendors.vendors,
    oldCards : Cards.cards,
    cards : [],
  },

  mutations: {
    setCards(state, cards) {
      state.cards = cards
    },
    deleteCard(state, id) {
      state.cards = state.cards.filter(card => card.id != id)
      localStorage.setItem('cards', JSON.stringify(state.cards))
    },
    addCard(state, cardToAdd) {
      // logic to assign id to new card
      let ids = []
      for (let card of state.cards) {
        ids.push(card.id)
      }
      let newId = Math.max(...ids) + 1
      cardToAdd.id = newId

      // adding the new card. note that if this is the first card, local storage will remove hardcoded cards
      
      state.cards.push(cardToAdd)
      localStorage.setItem('cards', JSON.stringify(state.cards))
    }
  },

  actions: {
    loadData(context) {
      console.log('attempting to load data...');
      if (localStorage.getItem('cards') != null) {
        console.log('Data exists, loading...');
        context.commit('setCards', JSON.parse(localStorage.getItem('cards')))
      } else {
        console.log('No data found...');
        console.log('loading hardcoded data...');
        context.commit('setCards', context.state.oldCards)
      }
    }
  },

  modules: {
  }
})
