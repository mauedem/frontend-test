import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /* Раздел 1 */

        selectedColor: 'red', // Выбранный цвет
        text: '', // Текстовое содержимое

        /* Раздел 2 */

        /* Блок 1 */
        selectedOption: '', // Выбранная опция селекта
        filterText: '', // Фильтрующий текст
        fields: [ // Поля таблицы
            {
                key: 'id',
                label: 'Идентификатор'
            },
            {
                key: 'selectValue',
                label: 'Значение селекта'
            },
            {
                key: 'text',
                label: 'Текстовая информация'
            }
        ],
        items: [ // Значения таблицы
            {
                id: 1,
                selectValue: 'значение 1',
                text: 'пара слов'
            },
            {
                id: 2,
                selectValue: 'значение 2',
                text: 'пара-тройка слов'
            },
            {
                id: 3,
                selectValue: 'значение 3',
                text: 'информация'
            },
            {
                id: 4,
                selectValue: 'значение 4',
                text: 'что-то еще'
            },
            {
                id: 5,
                selectValue: 'значение 5',
                text: 'несколько слов'
            },
            {
                id: 6,
                selectValue: 'значение 6',
                text: 'новое значение'
            }
        ],
        filteredItems: [], // Отфильтрованные значения таблицы

        /* Блок 2 */
        todoTasks: [] // Cписок дел
    },

    getters: {
        selectedColor: s => s.selectedColor,
        text: s => s.text,

        selectedOption: s => s.selectedOption,
        filterText: s => s.filterText,
        fields: s => s.fields,
        items: s => s.items,
        filteredItems: s => s.filteredItems,

        todoTasks: s => s.todoTasks
    },

    actions: {
        setSelectedColor({ commit }, payload) {
            commit('SET_SELECTED_COLOR', payload)
        },

        setText({ commit }, payload) {
            commit('SET_TEXT', payload)
        },

        setSelectedOption({ commit }, payload) {
            commit('SET_SELECTED_OPTION', payload)
        },

        setFilterText({ commit }, payload) {
            commit('SET_FILTER_TEXT', payload)
        },

        setTodoTasks({ commit }, payload) {
            commit('SET_TODO_TASKS', payload)
        },

        setFilteredItems({ commit }, payload) {
            commit('SET_FILTERED_ITEMS', payload)
        }
    },

    mutations: {
        SET_SELECTED_COLOR(state, payload) {
            state.selectedColor = payload
        },

        SET_TEXT(state, payload) {
            state.text = payload
        },

        SET_SELECTED_OPTION(state, payload) {
            state.selectedOption = payload
        },

        SET_FILTER_TEXT(state, payload) {
            state.filterText = payload
        },

        SET_TODO_TASKS(state, payload) {
            state.todoTasks = payload
        },

        SET_FILTERED_ITEMS(state, payload) {
            state.filteredItems = payload
        }
    }
})
