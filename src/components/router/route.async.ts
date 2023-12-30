// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        meta: {
            title: 'Dreammmmmmmmm',
            icon: '',
        },
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                name: 'home',
                meta: {
                    title: '首页',
                    icon: '',
                },
            },
            {
                path: '/begin',
                name: 'Begin',
                meta: {
                    title: 'The story begins',
                    icon: '',
                },
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
