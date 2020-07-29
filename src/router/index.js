import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/Main';
import Home from '@/pages/home/home';
import Login from '@/pages/login/login';
import Error404 from '@/pages/error/404';

import SysSetting from '@/pages/sysSetting';
import SysRole from '@/pages/sysSetting/role';
import SysPermission from '@/pages/sysSetting/permission';
import SysUser from '@/pages/sysSetting/user';

import componentRouter from './component';

Vue.use(Router);

export const otherRouter = [
    {
        name: 'login',
        title: '登录',
        path: '/login',
        component: Login
    },

    {
        name: '404',
        title: '404-页面不存在',
        path: '/*',
        component: Error404
    }
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
        name: 'sysSetting',
        title: '系统设置',
        icon: 'layui-icon-set',
        path: '/sysSetting',
        component: SysSetting,
        children: [
            {
                name: 'sysRole',
                title: '角色管理',
                path: '/sysRole',
                component: SysRole
            },
            {
                name: 'sysPermission',
                title: '权限管理',
                path: '/sysPermission',
                component: SysPermission
            },
            {
                name: 'sysUser',
                title: '系统用户',
                path: '/sysUser',
                component: SysUser
            }
        ]
    },
    componentRouter
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
    mainRouter,
    ...otherRouter
];

export const router = new Router({
    routes: routes
});
