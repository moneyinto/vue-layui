import Toaster from './toaster.vue';

export default (Vue) => {
    const ToasterController = Vue.extend(Toaster);
    let instance = new ToasterController().$mount();

    Vue.prototype.$toaster = () => {};

    Vue.prototype.$toaster.show = (content, type, time) => {
        instance.content = content;
        instance.type = type || 0;
        document.body.appendChild(instance.$el);
        instance.toasterTimer && clearTimeout(instance.toasterTimer);
        instance.toasterTimer = setTimeout(() => {
            instance.$el && instance.$el.remove();
        }, time || 2000);
    };
};
