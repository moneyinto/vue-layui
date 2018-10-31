import Loading from './loading.vue';

export default (Vue) => {
    const LoadingController = Vue.extend(Loading);
    let instance = new LoadingController().$mount();

    Vue.prototype.$loading = () => {};

    Vue.prototype.$loading.show = (type, content) => {
        instance.type = type || 0;
        instance.content = content || '';
        document.body.appendChild(instance.$el);
    };

    Vue.prototype.$loading.hide = () => {
        instance.$el && instance.$el.remove();
    };
};
