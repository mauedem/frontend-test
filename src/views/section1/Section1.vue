<template>
    <section class="section1">
        <div class="section1__btn-group">
            <div class="title">Цвет:</div>

            <div class="section1__buttons btn-group" role="group">
                <div>
                    <input
                        type="radio"
                        class="btn btn-check"
                        name="btnradio"
                        id="red"
                        autocomplete="off"
                        :checked="selectedColor === 'red'"
                        @change="selectColor('red')"
                    >
                    <label
                        class="btn btn-red"
                        :class="{ 'btn-red--active': selectedColor === 'red' }"
                        for="red"
                    >
                        Красный
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        class="btn btn-check"
                        name="btnradio"
                        id="green"
                        autocomplete="off"
                        :checked="selectedColor === 'green'"
                        @change="selectColor('green')"
                    >
                    <label
                        class="btn btn-green"
                        :class="{ 'btn-green--active': selectedColor === 'green' }"
                        for="green"
                    >
                        Зеленый
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        class="btn btn-check"
                        name="btnradio"
                        id="blue"
                        autocomplete="off"
                        :checked="selectedColor === 'blue'"
                        @change="selectColor('blue')"
                    >
                    <label
                        class="btn btn-blue"
                        :class="{ 'btn-blue--active': selectedColor === 'blue' }"
                        for="blue"
                    >
                        Синий
                    </label>
                </div>
            </div>
        </div>

        <div class="section1__textfield">
            <div class="title">Тестовая область:</div>

            <textarea
                v-model="text"
                class="section1__textarea"
                id="text"
                cols="36"
                rows="10"
            />
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Section1",

    computed: {
        ...mapGetters(['selectedColor']),

        text: {
            get () {
                return this.$store.getters['text']
            },

            set (value) {
                this.$store.dispatch('setText', value)
            }
        }
    },

    methods: {
        selectColor(color) {
            this.$store.dispatch('setSelectedColor', color)
        }
    }
}
</script>

<style scoped>
.section1__btn-group, .section1__textfield {
    margin: 50px 100px;
}

.section1__btn-group {
    display: flex;
    align-items: center;
}

.section1__textarea {
    margin-top: 20px;
    font-size: 16px;
    padding: 4px 6px;
}

.section1__buttons {
    margin-left: 14px;
}

.btn-group {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
}

.btn-check {
    position: absolute;
    clip: rect(0,0,0,0);
    pointer-events: none;
}

.btn-red {
    border: 1px solid red;
    color: red;
}

.btn-red--active {
    background-color: red;
    color: white;
}

.btn-green {
    border: 1px solid green;
    color: green;
}

.btn-green--active {
    background-color: green;
    color: white;
}

.btn-blue {
    border: 1px solid blue;
    color: blue;
}

.btn-blue--active {
    background-color: blue;
    color: white;
}
</style>
