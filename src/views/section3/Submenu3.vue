<template>
    <div class="submenu3">
        <div class="submenu__header title">Подменю 3</div>

        <div class="submenu3__text">
            <div class="title">Результат ввода текстовой области из 1 раздела:</div>
            <div>{{ text }}</div>
            <span>(Первый операнд)</span>
        </div>

        <FilteredTable
            :fields="fields"
            :items="filteredItems"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import FilteredTable from "@/components/FilteredTable";

export default {
    name: "Submenu3",

    components: {
        FilteredTable
    },

    computed: {
        ...mapGetters(['text', 'filteredItems', 'fields'])
    }
}
</script>

<style scoped>
.submenu3__text {
    margin: 30px 50px;
}
</style>
