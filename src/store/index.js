import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
    state: {
        isCloseSlider: false,
        isFullScreen: false,
        userInfo: null
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
        updateUserInfo(state) {
            state.userinfo = JSON.parse(localStorage.VUE_LAYUI_ADMIN_USERINFO);
        }
    }
});

export default Store;
