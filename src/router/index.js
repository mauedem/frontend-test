import Vue from 'vue'
import VueRouter from 'vue-router'
import Submenu1 from "@/views/section3/Submenu1";
import Submenu2 from "@/views/section3/Submenu2";
import Submenu3 from "@/views/section3/Submenu3";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        beforeEnter: (to, from, next) => {
            next({ name: 'Section1' })
        }
    },
    {
        path: '/section1',
        name: 'Section1',
        component: () => import('../views/section1/Section1.vue'),
        meta: { title: 'Section1' }
    },
    {
        path: '/section2',
        name: 'Section2',
        component: () => import('../views/section2/Section2.vue'),
        meta: { title: 'Section2' }
    },
    {
        path: '/section3/:num',
        name: 'Section3',
        component: () => import('../views/section3/Section3.vue'),
        meta: { title: 'Section3' },
        children: [
            {
                path: '',
                name: 'Submenu1',
                component: Submenu1,
                meta: { title: 'Section3' }
            },
            {
                path: 'submenu2',
                name: 'Submenu2',
                component: Submenu2,
                meta: { title: 'Section3' }
            },
            {
                path: 'submenu3',
                name: 'Submenu3',
                component: Submenu3,
                meta: { title: 'Section3' }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title;
    });
});

export default router
