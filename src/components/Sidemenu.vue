<template>
    <nav
        class="sidemenu"
        :style="{ backgroundColor: selectedColor }"
    >
        <ul class="sidemenu__nav">
            <li
                v-for="(item, index) in navItems"
                :key="index"
                class="sidemenu__item"
            >
                <router-link
                    :to="{ name: item.name }"
                    class="sidemenu__link"
                    :class="{'sidemenu__link--active': activeItem === item.name || activeItem === `${item.name}/`}"
                >
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Sidemenu",

    data: () => ({
        navItems: [
            {
                title: 'Подменю 1',
                name: 'Submenu1'
            },
            {
                title: 'Подменю 2',
                name: 'Submenu2'
            },
            {
                title: 'Подменю 3',
                name: 'Submenu3'
            }
        ]
    }),

    computed: {
        ...mapGetters(['selectedColor']),

        activeItem () {
            return this.$route.name;
        }
    }
}
</script>

<style scoped>
.sidemenu {
    height: 100vh;
    width: 200px;
}

.sidemenu__nav {
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    padding-top: 60px;
    list-style: none;
}

.sidemenu__item {
    margin: 10px
}

.sidemenu__link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: unset;
}

.sidemenu__link--active {
    color: rgb(255, 255, 255)
}
</style>
