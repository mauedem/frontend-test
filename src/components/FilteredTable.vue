<template>
    <div>
        <table>
            <caption>Таблица</caption>
            <tr>
                <th
                    v-for="(field, index) in fields"
                    :key="index"
                >
                    {{ field.label }}
                </th>
            </tr>
            <tr
                v-for="(item, index) in items"
                :key="index"
            >
                <td
                    v-for="key in item"
                    :key="key.key"
                >
                    {{ key }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Table",

    props: {
        fields: {
            type: Array,
            required: true
        },

        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
