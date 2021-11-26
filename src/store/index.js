import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedColor: 'red', // Выбранный цвет в разделе 1
        text: '', // Текстовое содержимое раздела 1
    },

    getters: {
        selectedColor: s => s.selectedColor,
        text: s => s.text
    },

    actions: {
        setSelectedColor({ commit }, payload) {
            commit('SET_SELECTED_COLOR', payload)
        },

        setText({ commit }, payload) {
            commit('SET_TEXT', payload)
        }
    },

    mutations: {
        SET_SELECTED_COLOR(state, payload) {
            state.selectedColor = payload
        },

        SET_TEXT(state, payload) {
            state.text = payload
        }
    }
})
