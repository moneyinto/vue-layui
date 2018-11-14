import Loading from './loading.vue';
import Vue from 'vue';

let loadingTimer;
let loadingInstance;

const getLoadingInstance = () => {
    loadingInstance = loadingInstance || newInstance();

    return loadingInstance;
};

const newInstance = () => {
    const Instance = new Vue({
        render (h) {
            return h(Loading, {});
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const loading = Instance.$children[0];

    return {
        update (options) {
            if ('percent' in options) {
                loading.percent = options.percent;
            }

            if ('show' in options) {
                loading.show = options.show;
            }
        },
        component: loading,
        destroy () {
            document.body.removeChild(component.$el);
        }
    };
};

const clearTimer = () => {
    if (loadingTimer) {
        clearInterval(loadingTimer);
        loadingTimer = null;
    }
};

const update = (options) => {
    let instance = getLoadingInstance();

    instance.update(options);
};

const hide = () => {
    setTimeout(() => {
        update({
            show: false
        });
        setTimeout(() => {
            update({
                percent: 0
            });
        }, 200);
    }, 800);
};

export default {
    start () {
        if (loadingTimer) return;

        let percent = 5;

        update({
            percent: percent
        });

        loadingTimer = setInterval(() => {
            percent += Math.floor(Math.random() * 3 + 1);
            if (percent > 95) {
                clearTimer();
            }
            update({
                percent: percent,
                show: true
            });
        }, 200);
    },

    end() {
        clearTimer();
        update({
            percent: 100,
            show: true
        });
        hide();
    },

    destroy() {
        clearTimer();
        let instance = getLoadingInstance();
        loadingInstance = null;
        instance.destroy();
    }
};
