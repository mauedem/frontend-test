<template>
    <div class="section2">
        <Tabs
            class="section2__tabs"
            :items="items"
        />

        <Block1 id="block1" />
        <Block2 id="block2" />
        <Block3 id="block3" />
    </div>
</template>

<script>
import Tabs from "@/components/Tabs";
import Block1 from "@/views/section2/Block1";
import Block2 from "@/views/section2/Block2";
import Block3 from "@/views/section2/Block3";

export default {
    name: "Section2",

    components: {
        Tabs,
        Block1,
        Block2,
        Block3
    },

    data: () => ({
        items: [
            {
                title: 'Блок 1',
                tab: 'block1',
                active: true
            },
            {
                title: 'Блок 2',
                tab: 'block2',
                active: false
            },
            {
                title: 'Блок 2',
                tab: 'block3',
                active: false
            },
        ]
    })
}
</script>

<style scoped>
.section2__tabs {
    margin: 30px 50px;
}
</style>
