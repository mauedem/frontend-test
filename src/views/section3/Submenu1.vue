<template>
    <div class="submenu1">
        <div class="submenu__header title">Подменю 1</div>

        <div class="submenu1__selected-option">
            <div class="title">Результат выбора селектора: </div>
            <span>{{ selectedOption }}</span>
        </div>

        <div class="submenu1__todo-list">
            <div class="title">TODO</div>
            <ul>
                <li
                    v-for="(task, index) in todoTasks"
                    :key="index"
                    class="todo-list__task"
                >
                    <div class="todo-list__number">{{ index + 1 }}.</div>

                    <div>{{ task.description }}</div>
                    <div
                        class="todo-list__status"
                        :class="task.isFulfilled ? 'todo-list__status--fulfilled' : 'todo-list__status--failed'"
                    >
                        {{ task.isFulfilled ? '&check;' : '&#10005;' }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Submenu1",

    computed: {
        ...mapGetters(['selectedOption', 'todoTasks'])
    }
}
</script>

<style scoped>
.submenu1__selected-option {
    margin: 50px
}

.submenu1__todo-list {
    margin-left: 50px;
}

.todo-list__task {
    display: flex;
    align-items: center;
    margin-top: 12px
}

.todo-list__status {
    margin-left: 10px;
}

.todo-list__status--fulfilled {
    color: green;
}

.todo-list__status--failed {
    color: red;
}
</style>
