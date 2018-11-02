import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/Main';
import Home from '@/pages/home/home';

import Component from '@/pages/component/component';
import Grid from '@/pages/component/grid/grid';
import GridList from '@/pages/component/grid/grid-list';
import GridMobile from '@/pages/component/grid/grid-mobile';

Vue.use(Router);

export const otherRouter = [

];

// 左侧slide显示的页面路由配置位置
export const appRouter = [
    {
        name: 'home',
        title: '首页',
        icon: 'layui-icon-home',
        path: '/home',
        component: Home
    },

    {
        name: 'component',
        title: '组件',
        icon: 'layui-icon-component',
        path: '/component',
        redirect: '/component/grid',
        component: Component,
        children: [
            {
                name: 'grid',
                title: '栅格',
                path: 'grid',
                redirect: '/component/grid/list',
                component: Grid,
                children: [
                    {
                        name: 'gridList',
                        title: '等比例列表排列',
                        path: 'list',
                        component: GridList
                    },

                    {
                        name: 'gridMobile',
                        title: '按移动端排列',
                        path: 'mobile',
                        component: GridMobile
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
