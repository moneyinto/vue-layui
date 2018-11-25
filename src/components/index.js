import Loading from './loading';

import Header from './header';
import Slider from './slider';
import Drawer from './drawer';
import Tabs from './tabs';
import DateTime from './dateTime';
import Table from './table';
import Panel from './panel';
import Card from './card';
import Form from './form';
import Editor from './editor';
import ImgView from './imgView';

const AllCmponents = {
    Loading
};

const vLayUI = {
    Header,
    Slider,
    Drawer,
    Tabs,
    DateTime,
    Table,
    Panel,
    Card,
    ...Form,
    Editor,
    ImgView
};

const install = (Vue, opts = {}) => {
    Object.keys(AllCmponents).forEach(key => {
        Vue.prototype[`$${key}`] = AllCmponents[key];
    });

    Object.keys(vLayUI).forEach(key => {
        Vue.component(key, vLayUI[key]);
    });

    Vue.prototype.$layui = window.layui;
    Vue.prototype.$layer = window.layer;
};

const API = {
    install,
    ...AllCmponents
};

export default API;
