// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '',
            icon: '',
        },
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/Begin',
        name: 'Begin',
        meta: {
            title: 'The story begins',
            icon: '',
        },
        component: () => import('@/views/begin.vue'),
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
