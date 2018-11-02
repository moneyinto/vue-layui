// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import { router } from './router';
import Store from './store';
import vLayUI from './components';

Vue.use(vLayUI);

new Vue({
    el: '#app',
    store: Store,
    router,
    template: '<App/>',
    created() {
        // 更新左侧菜单
        this.$store.commit('updateMenuList');

        // 全屏切换监听事件
        document.addEventListener('fullscreenchange', () => {
            this.$store.commit('changeFullScreenState');
        });

        document.addEventListener('mozfullscreenchange', () => {
            this.$store.commit('changeFullScreenState');
        });

        document.addEventListener('webkitfullscreenchange', () => {
            this.$store.commit('changeFullScreenState');
        });

        document.addEventListener('msfullscreenchange', () => {
            this.$store.commit('changeFullScreenState');
        });

        document.onkeydown = (e) => {
            if (e && e.keyCode === 122) { // 捕捉F11键盘动作
                e.preventDefault();  // 阻止F11默认动作
                this.$store.commit('toggleFullScreen');
            }
        };
    },
    components: {
        App
    }
});
