import Vue from 'vue';
import Vuex from 'vuex';
import Theme from '@/data/theme';
import { appRouter } from '@/router';

Vue.use(Vuex);

const dealRouterToMenuList = (routes) => {
    let menuList = [];
    for (let item of routes) {
        let obj = {
            name: item.name,
            title: item.title,
            path: item.path,
            icon: item.icon || '',
            children: []
        };
        if (item.children && item.children.length > 0) {
            obj.children = dealRouterToMenuList(item.children);
        }
        menuList.push(obj);
    }
    return menuList;
};

const Store = new Vuex.Store({
    state: {
        isCloseSlider: false,
        isFullScreen: false,
        userInfo: null,
        theme: JSON.parse(localStorage.VUE_LAYUI_ADMIN_THEME || JSON.stringify(Theme[0])),
        menuListL: []
    },

    actions: {

    },

    mutations: {
        // 侧边伸缩
        toggleSlider(state) {
            state.isCloseSlider = !state.isCloseSlider;
        },

        // 全屏切换
        toggleFullScreen(state) {
            state.isFullScreen = !state.isFullScreen;
            if (state.isFullScreen) {
                let docElm = document.documentElement;
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                } else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                } else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        },

        // 更新用户信息
        updateUserInfo(state, userInfo) {
            localStorage.VUE_LAYUI_ADMIN_USERINFO = JSON.stringify(userInfo);
            state.userInfo = userInfo;
        },

        // 切换主题
        updateTheme(state, theme) {
            localStorage.VUE_LAYUI_ADMIN_THEME = JSON.stringify(theme);
            state.theme = theme;
        },

        // 更新左侧菜单
        updateMenuList(state) {
            let menuList = dealRouterToMenuList(appRouter);
            state.menuList = menuList;
        }
    }
});

export default Store;
