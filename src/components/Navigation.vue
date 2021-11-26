<template>
    <nav class="navigation">
        <ul class="navbar">
            <li
                v-for="(item, index) in navItems"
                :key="index"
                class="navbar__nav"
            >
                <router-link
                    :to="{ name: item.name }"
                    class="navbar__link"
                    :class="{ 'navbar__link--active': activeItem.includes(item.path) }"
                >
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navigation",

    data: () => ({
        navItems: [
            {
                title: 'Раздел 1',
                name: 'Section1',
                path: 'section1'
            },
            {
                title: 'Раздел 2',
                name: 'Section2',
                path: 'section2'
            },
            {
                title: 'Раздел 3',
                name: 'Submenu1',
                path: 'section3'
            }
        ]
    }),

    computed: {
        activeItem () {
            return this.$route.path;
        }
    },
}
</script>

<style scoped>
.navigation {
    background-color: #343a40;
    height: 64px;
}

.navbar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
}

.navbar__nav {
    margin-left: 20px;
}

.navbar__link {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: unset;
}

.navbar__link--active {
    color: rgb(255, 255, 255);
}
</style>
