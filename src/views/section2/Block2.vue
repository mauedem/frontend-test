<template>
    <div class="todo-list">
        <div class="todo-list__header">
            <div class="title">TODO:</div>
            <input
                class="todo-list__input"
                v-model="task"
                type="text"
            >
            <button @click="addTask">Добавить</button>
        </div>

        <ul class="todo-list__list">
            <li
                v-for="(task, index) in todoTasks"
                :key="index"
                class="todo-list__task"
            >
                <div class="todo-list__number">{{ index + 1 }}.</div>

                <div v-if="task.editMode" style="display: flex;">
                    <input
                        type="text"
                        v-model="editedTask"
                    >

                    <button
                        class="todo-list__btn"
                        @click="saveTask(index)"
                    >
                        Сохранить
                    </button>
                    <button
                        class="todo-list__btn"
                        @click="editTask(index, false)"
                    >
                        Отменить
                    </button>
                </div>

                <div v-else style="display: flex">
                    <div>{{ task.description }}</div>

                    <div
                        class="todo-list__status"
                        :class="task.isFulfilled ? 'todo-list__status--fulfilled' : 'todo-list__status--failed'"
                    >
                        {{ task.isFulfilled ? '&check;' : '&#10005;' }}
                    </div>
                    <button
                        class="todo-list__btn"
                        @click="fulfillTask(index)"
                    >
                        Выполнить
                    </button>
                    <button
                        class="todo-list__btn"
                        @click="editTask(index, true)"
                    >
                        Редактировать
                    </button>
                    <button
                        class="todo-list__btn"
                        @click="deleteTask(index)"
                    >
                        Удалить
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Block2",

    data: () => ({
        task: '',

        editedTask: ''
    }),

    computed: {
        ...mapGetters(['todoTasks'])
    },

    methods: {
        addTask() {
            const task = {
                description: this.task,
                isFulfilled: false,
                editMode: false
            }

            this.$store.dispatch('setTodoTasks', [...this.todoTasks, task])

            this.task = ''
        },

        editTask(index, value) {
            const tasks = [...this.todoTasks]

            this.editedTask = tasks[index].description
            tasks[index].editMode = value

            this.$store.dispatch('setTodoTasks', tasks)
        },

        saveTask(index) {
            const tasks = [...this.todoTasks]
            console.log('tasks[index].description = ',tasks[index].description)
            console.log('this.editedTask = ', this.editedTask)
            tasks[index].description = this.editedTask
            tasks[index].editMode = false

            this.$store.dispatch('setTodoTasks', tasks)
        },

        fulfillTask(index) {
            const tasks = [...this.todoTasks]
            tasks[index].isFulfilled = true

            this.$store.dispatch('setTodoTasks', tasks)
        },

        deleteTask(index) {
            const tasks = [...this.todoTasks]
            tasks.splice(index, 1)

            this.$store.dispatch('setTodoTasks', tasks)
        }
    }
}
</script>

<style scoped>
.todo-list {
    margin: 30px 50px;
}

.todo-list__header {
    display: flex;
    align-items: center;
}

.todo-list__input {
    margin-left: 10px;
}

.todo-list__task {
    display: flex;
    align-items: center;
    margin-top: 12px
}

.todo-list__btn {
    margin-left: 10px;
}

.todo-list__number {
    font-weight: 500;
    margin-right: 10px;
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
