import Loading from './loading';

import Header from './header';
import Menu from './menu';
import Drawer from './drawer';
import Tabs from './tabs';
import DateTime from './dateTime';
import Table from './table';
import Page from './page';
import Panel from './panel';
import Card from './card';
import Form from './form';
import Editor from './editor';
import ImgView from './imgView';
import Carousel from './carousel';
import ColorPicker from './colorPicker';
import Slider from './slider';
import Upload from './upload';
import Tree from './tree';
import Modal from './modal';

const AllCmponents = {
    Loading
};

const vLayUI = {
    Header,
    Menu,
    Drawer,
    Tabs,
    DateTime,
    Page,
    Table,
    Panel,
    Card,
    ...Form,
    Editor,
    ImgView,
    Carousel,
    ColorPicker,
    Slider,
    Upload,
    Tree,
    Modal
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
