// src/store/store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        name: 'Rabies',
        date: '01 Dec 2023',
        type: 'Overdue',
        vetetinar: 'Find veterinar',
      },
      {
        id: 2,
        name: 'Bordetella',
        date: '11 Dec 2024',
        type: 'Noncore',
        vetetinar: 'James Grey',
      },
      {
        id: 3,
        name: 'Distemper',
        date: '27 Jun 2024',
        type: 'Core',
        vetetinar: 'Jim Brown',
      },
      {
        id: 4,
        name: 'Calicivirus',
        date: '16 Sep 2024',
        type: 'Core',
        vetetinar: 'Helen Brooks',
      },
    ],
    chats: [
      {
        id: 1,
        name: 'Helen Brooks',
        date: '15:56',
        text: 'Luna has been scratching her ears a lot lately and shaking her head. I checked her ears and they look red and inflamed. She also seems to be in pain when I touch them.',
        number: 0,
      },
      {
        id: 2,
        name: 'Kathyn Murphy',
        date: 'Wed',
        text: 'The best way to treat an ear infection is to visit your local vet clinic and get a prescription for ear drops. The ear drops will help clear the infection and reduce th',
        number: 2,
      },
      {
        id: 3,
        name: 'James Grey',
        date: 'Tue',
        text: 'You should follow the instructions on the ear drops label, but usually you need to apply them twice a day for 7 to 10 days. You should clean her ears once a day, preferably before applying the ear drops',
        number: 0,
      },
      {
        id: 4,
        name: 'Jim Brown',
        date: 'Tue',
        text: 'Hi, I have a question about my cat.',
        number: 0,
      },
    ],
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item)
    },
    REMOVE_ITEM(state, itemId) {
      state.items = state.items.filter((item) => item.id !== itemId)
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit('ADD_ITEM', item)
    },
    removeItem({ commit }, itemId) {
      commit('REMOVE_ITEM', itemId)
    },
  },
  getters: {
    allItems: (state) => state.items,
    allChats: (state) => state.chats,
  },
})
