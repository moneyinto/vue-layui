import Alert from './alert.vue';

export default (Vue) => {
    const AlertController = Vue.extend(Alert);
    let instance = new AlertController().$mount();

    Vue.prototype.$alert = () => {};

    Vue.prototype.$alert.show = (...args) => {
        if (args.length === 0) return;
        if (args.length === 1) {
            instance.content = args[0];
            document.body.appendChild(instance.$el);
            return;
        }

        instance.title = args[0];
        instance.content = args[1];
        instance.onClose = args[2] || function() {};
        document.body.appendChild(instance.$el);
    };
};
