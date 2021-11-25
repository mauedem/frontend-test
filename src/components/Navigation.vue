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
                    :class="{'navbar__link--active': activeItem === item.name}"
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
                name: 'Section1'
            },
            {
                title: 'Раздел 2',
                name: 'Section2'
            },
            {
                title: 'Раздел 3',
                name: 'Section3'
            }
        ]
    }),

    computed: {
        activeItem () {
            return this.$route.name;
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
