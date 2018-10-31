import Toaster from './toaster';
import Loading from './loading';
import Alert from './alert';

import Header from './header';
import Slider from './slider';
import Drawer from './drawer';

const AllCmponents = {
    Toaster,
    Loading,
    Alert
};

const vLayUI = {
    Header,
    Slider,
    Drawer
};

const install = (Vue, opts = {}) => {
    Object.keys(AllCmponents).forEach(key => {
        AllCmponents[key](Vue);
    });

    Object.keys(vLayUI).forEach(key => {
        Vue.component(key, vLayUI[key]);
    });
};

const API = {
    install
};

export default API;
