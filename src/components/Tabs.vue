<template>
    <nav class="tabs">
        <ol
            class="tabs__list p-0"
            role="tablist"
        >
            <li
                v-for="(item, index) of modifiedItems"
                :key="index"
                role="tab"
                class="tabs__list-item"
                :class="{'tabs__list-item--active': item.active }"
                @click="selectActiveTab(index)"
            >
                <a
                    class="tabs__list-link"
                    :class="{'tabs__list-link--active': item.active }"
                >
                    {{ item.title }}
                </a>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: "Tabs",

    props: {
        items: {
            type: Array,
            validator(value) {
                const item = value;

                item.forEach(() => {
                    if (typeof item !== 'object') return false;

                    if (!item.title) return false;
                    if (typeof item.title !== 'string') return false;

                    if (!item.tab) return false;
                    if (typeof item.tab !== 'string') return false;

                    if (!item.active) return false;
                    if (typeof item.active !== 'boolean') return false;

                    return undefined;
                });

                return true;
            },
            required: true
        }
    },

    data: () => ({
        activeTab: null,

        modifiedItems: []
    }),

    mounted() {
        this.modifiedItems = [...this.items]

        this.showActiveTab()
    },

    methods: {
        selectActiveTab(index) {
            const activeItem = this.modifiedItems.find((i) => i.active)
            activeItem.active = false

            this.modifiedItems[index].active = true

            this.showActiveTab()
        },

        showActiveTab() {
            this.modifiedItems.forEach((item) => {
                const tab = document.getElementById(item.tab)

                if (item.active) {
                    tab.style.display = 'block'
                } else {
                    tab.style.display = 'none'
                }
            })
        }
    }
}
</script>

<style scoped>
.tabs__list {
    list-style: none;
    display: flex;
    flex-wrap: nowrap
}

.tabs__list-item {
    font-size: 18px;
    padding-bottom: 14px;
    margin-right: 30px;
    cursor: pointer;
}

.tabs__list-link {
    color: #999999;
}

.tabs__list-link--active {
    color: #262626;
}

.tabs__list-link:hover {
    text-decoration: none;
}
</style>
