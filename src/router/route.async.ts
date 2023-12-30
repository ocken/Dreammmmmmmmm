// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '',
        meta: {
            title: '主页',
            icon: '',
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
            },
            {
                path: '/begin',
                name: 'begin',
                component: () => import('@/views/begin.vue'),
            },
        ],
    },

    {
        path: '/process',
        name: 'process',
        meta: {
            title: 'Template configuration process',
            icon: '',
        },
        component: () => import('@/views/example/MarkdownPage.vue'),
    },
];

export default asyncRoutes;
