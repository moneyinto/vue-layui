import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/Main';
import Home from '@/pages/home/home';

Vue.use(Router);

export const otherRouter = [

];

// 左侧slide显示的页面路由配置位置
export const appRouter = [
    {
        name: 'home',
        title: '首页',
        icon: '',
        path: '/home',
        component: Home
    },

    {
        name: 'component',
        title: '组件',
        icon: '',
        path: '/component',
        children: [
            {
                name: 'grid',
                title: '栅格',
                path: 'grid',
                children: [
                    {
                        name: 'list',
                        title: '等比例列表排列',
                        path: 'list'
                    },

                    {
                        name: 'mobile',
                        title: '按移动端排列',
                        path: 'mobile'
                    }
                ]
            }
        ]
    }
];

const mainRouter = {
    name: 'main',
    path: '/',
    component: Main,
    redirect: '/home',
    children: appRouter
};

// 所有上面定义的路由都要写在下面的routers里
export const routes = [
    ...otherRouter,
    mainRouter
];

export const router = new Router({
    routes: routes
});
