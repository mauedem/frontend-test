<template>
    <div class="submenu2">
        <div class="submenu__header title">Подменю 2</div>

        <div class="submenu2__calculator">
            <div class="submenu2__operands">
                <div class="title">Операнд 1: {{ getFirstOperand }} </div>
                <div class="title">Операнд 2: {{ getSecondOperand }}</div>
            </div>

            <div class="submenu2__functions">
                <button
                    class="submenu2__btn"
                    @click="add"
                >
                    +
                </button>
                <button
                    class="submenu2__btn"
                    @click="subtract"
                >
                    -
                </button>
                <button
                    class="submenu2__btn"
                    @click="divide"
                >
                    /
                </button>
                <button
                    class="submenu2__btn"
                    @click="multiply"
                >
                    *
                </button>
            </div>
        </div>

        <!-- Так как не указано, в текстовом поле из какого раздела
        должен отображаться результат, отображаю его здесь -->
        <div class="submenu2__result">
            <span class="title">Результат:</span>
            <input
                class="submenu2__textfield"
                type="text"
                v-model="result"
            >
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Submenu2",

    data: () => ({
        result: 0
    }),

    computed: {
        ...mapGetters(['text']),

        /* Как я поняла, поле ввода, расположенное на основном окна - это текстовая область из 1 раздела */
        getFirstOperand() {
            return Number(this.text)
        },

        getSecondOperand() {
            return Number(this.$route.params.num)
        }
    },

    methods: {
        add() {
            this.result = this.getFirstOperand + this.getSecondOperand
        },

        divide() {
            this.result = this.getFirstOperand / this.getSecondOperand
        },

        subtract() {
            this.result = this.getFirstOperand - this.getSecondOperand
        },

        multiply() {
            this.result = this.getFirstOperand * this.getSecondOperand
        }
    }
}
</script>
<style scoped>
.submenu2__operands, .submenu2__result {
    margin: 50px
}

.submenu2__calculator {
    display: flex;
    align-items: center;
}

.submenu2__textfield {
    margin-left: 10px;
    padding-left: 4px;
}

.submenu2__btn {
    margin-left: 10px;
    padding: 10px 12px;
}
</style>
