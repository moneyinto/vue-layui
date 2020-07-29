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
        isSMWidth: false,
        isLGWidth: false,
        isShowComponent: true, // 是否展示开发组件
        userInfo: null,
        theme: JSON.parse(localStorage.VUE_LAYUI_ADMIN_THEME || JSON.stringify(Theme[0])),
        menuList: [],
        pageAccess: [],
        access: [],
        lang: /^zh/.test(navigator.language || navigator.browserLanguage || navigator.userLanguage) ? 'zh-cn' : 'en', // 暂只支持中文
        roleList: []
    },

    mutations: {
        // 侧边伸缩
        toggleSlider(state) {
            state.isCloseSlider = !state.isCloseSlider;
        },

        // 全屏切换
        toggleFullScreen(state) {
            if (state.isFullScreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
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
            }
        },

        // 更新全屏状态信息
        changeFullScreenState (state) {
            state.isFullScreen = !state.isFullScreen;
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
        },

        updateAccess(state, access) {
            state.access = access;
            let baseAccess = ['home', '404'];
            if (state.isShowComponent) baseAccess = [...baseAccess, 'component', 'grid', 'button', 'form', 'panel', 'dateTime', 'table', 'page', 'slider', 'frame', 'imgView', 'upload', 'carousel', 'tree', 'colorPicker', 'icon', 'editor', 'gridList', 'gridMobile', 'element', 'dateTimeDemo', 'tableSimple', 'tableAuto', 'tableData', 'tablePage', 'tableResetPage', 'tableToolbar', 'tableTotalRow', 'tableHeight', 'tableCheckbox', 'tableRadio', 'tableCellEdit', 'tableForm', 'tableStyle', 'tableFixed', 'tableOperate', 'tableParseData', 'tableOnRow', 'tableReload', 'tableInitSort', 'tableCellEvent', 'tableThead'];
            state.pageAccess = [...baseAccess, ...access.filter(item => { return item.type === 2; }).map(item => { return item.key; })];
        },

        updateRoleList(state, roleList) {
            state.roleList = roleList;
        }
    },

    actions: {
        sysAccess(context) {
            return Vue.prototype.$http.get('getUserPermission');
        },
        sysRoleList(context) {
            return new Promise((resolve, reject) => {
                Vue.prototype.$http.get('getRoleList').then(res => {
                    context.commit('updateRoleList', res.data);
                    resolve(res.data);
                });
            });
        }
    }
});

export default Store;
