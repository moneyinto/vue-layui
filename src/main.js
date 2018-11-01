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
    },
    components: {
        App
    }
});
