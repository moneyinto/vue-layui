// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Store from './store';
import router from './router';
import vLayUI from './components';

Vue.use(vLayUI);

new Vue({
    el: '#app',
    store: Store,
    router,
    template: '<App/>',
    components: {
        App
    }
});
