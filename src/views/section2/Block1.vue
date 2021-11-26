<template>
    <div class="block1">
        <div class="block1__filters">
            <div class="title">Фильтры:</div>

            <select
                id="select"
                class="block1__select"
                v-model="selectedOption"
            >
                <option>значение 1</option>
                <option>значение 2</option>
                <option>значение 3</option>
                <option>значение 4</option>
                <option>значение 5</option>
                <option>значение 6</option>
            </select>

            <div>
                <input
                    type="text"
                    class="block1__input"
                    v-model="filterText"
                >
            </div>

            <button
                class="block1__clear-filters"
                @click="clearFilters"
            >
                Сбросить фильтры
            </button>
        </div>

        <FilteredTable
            class="block1__table"
            :fields="fields"
            :items="filteredItems"
        />
    </div>
</template>

<script>
import FilteredTable from "@/components/FilteredTable";
import { mapGetters } from "vuex";

export default {
    name: "Block1",

    components: {
        FilteredTable
    },

    computed: {
        ...mapGetters(['items', 'filteredItems', 'fields']),

        selectedOption: {
            get() {
                return this.$store.getters['selectedOption']
            },

            set(value) {
                this.$store.dispatch('setSelectedOption', value)
            }
        },

        filterText: {
            get() {
                return this.$store.getters['filterText']
            },

            set(value) {
                this.$store.dispatch('setFilterText', value)
            }
        },

        filteredItems() {
            const result = []

            if (!this.filterText && !this.selectedOption) {
                return this.items
            }

            for (const item of this.items) {
                if (item.text.indexOf(this.filterText) !== -1 &&
                    item.selectValue.indexOf(this.selectedOption) !== -1) {
                    result.push(item);
                }
            }

            this.$store.dispatch('setFilteredItems', result)

            return result
        },
    },

    methods: {
        clearFilters() {
            this.$store.dispatch('setSelectedOption', '')
            this.$store.dispatch('setFilterText', '')
        }
    }
}
</script>

<style scoped>
.block1__filters {
    display: flex;
    align-items: center;
    margin: 10px 40px;
}

.block1__clear-filters {
    margin-left: 10px;
}

.block1__select {
    margin: 10px;
}

.block1__input {
    margin-left: 10px;
    height: 30px;
    font-size: 16px;
    padding-left: 4px;
}

.block1__table {
    margin: 20px 40px;
}
</style>
