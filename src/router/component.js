import Component from '@/pages/component/component';
import Grid from '@/pages/component/grid/grid';
import GridList from '@/pages/component/grid/grid-list';
import GridMobile from '@/pages/component/grid/grid-mobile';

import Button from '@/pages/component/button/button';

import Form from '@/pages/component/form/form';
import FormElement from '@/pages/component/form/formElement';

import Panel from '@/pages/component/panel/panel';

import DateTime from '@/pages/component/dateTime/dateTime';
import DateTimeDemo from '@/pages/component/dateTime/dateTimeDemo';

import Table from '@/pages/component/table/table';
import TableSimple from '@/pages/component/table/table-simple';
import TableAuto from '@/pages/component/table/table-auto';
import TableData from '@/pages/component/table/table-data';
import TablePage from '@/pages/component/table/table-page';
import TableResetPage from '@/pages/component/table/table-reset-page';
import TableToolbar from '@/pages/component/table/table-toolbar';
import TableTotalRow from '@/pages/component/table/table-total-row';
import TableHeight from '@/pages/component/table/table-height';
import TableCheckbox from '@/pages/component/table/table-checkbox';
import TableRadio from '@/pages/component/table/table-radio';
import TableCellEdit from '@/pages/component/table/table-cell-edit';
import TableForm from '@/pages/component/table/table-form';
import TableStyle from '@/pages/component/table/table-style';
import TableFixed from '@/pages/component/table/table-fixed';
import TableOperate from '@/pages/component/table/table-operate';
import TableParseData from '@/pages/component/table/table-parse-data';
import TableOnRow from '@/pages/component/table/table-onrow';
import TableReload from '@/pages/component/table/table-reload';
import TableInitSort from '@/pages/component/table/table-init-sort';
import TableCellEvent from '@/pages/component/table/table-cell-event';
import TableThead from '@/pages/component/table/table-thead';

import Frame from '@/pages/component/frame/frame';
import ImgView from '@/pages/component/imgView/imgView';
import Icon from '@/pages/component/icon/icon';
import Editor from '@/pages/component/editor/editor';

const componentRouter = {
    name: 'component',
    title: '组件',
    icon: 'layui-icon-component',
    path: '/component',
    redirect: '/component/grid',
    component: Component,
    children: [
        {
            name: 'grid',
            title: '栅格',
            path: 'grid',
            redirect: '/component/grid/list',
            component: Grid,
            children: [
                {
                    name: 'gridList',
                    title: '等比例列表排列',
                    path: 'list',
                    component: GridList
                },

                {
                    name: 'gridMobile',
                    title: '按移动端排列',
                    path: 'mobile',
                    component: GridMobile
                }
            ]
        },

        {
            name: 'button',
            title: '按钮',
            path: 'button',
            component: Button
        },

        {
            name: 'form',
            title: '表单',
            path: 'form',
            redirect: '/component/form/element',
            component: Form,
            children: [
                {
                    name: 'element',
                    title: '表单元素',
                    path: 'element',
                    component: FormElement
                }
            ]
        },

        {
            name: 'panel',
            title: '面板',
            path: 'panel',
            component: Panel
        },

        {
            name: 'dateTime',
            title: '日期时间',
            path: 'dateTime',
            redirect: '/component/dateTime/demo',
            component: DateTime,
            children: [
                {
                    name: 'dateTimeDemo',
                    title: '功能演示',
                    path: 'demo',
                    component: DateTimeDemo
                }
            ]
        },

        {
            name: 'table',
            title: '表格',
            path: 'table',
            redirect: '/component/table/totalRow',
            component: Table,
            children: [
                {
                    name: 'tableSimple',
                    title: '简单数据表格',
                    path: 'simple',
                    component: TableSimple
                },

                {
                    name: 'tableAuto',
                    title: '列宽自动分配',
                    path: 'auto',
                    component: TableAuto
                },

                {
                    name: 'tableData',
                    title: '赋值已知数据',
                    path: 'data',
                    component: TableData
                },

                {
                    name: 'tablePage',
                    title: '开启分页',
                    path: 'page',
                    component: TablePage
                },

                {
                    name: 'tableResetPage',
                    title: '自定义分页',
                    path: 'resetPage',
                    component: TableResetPage
                },

                {
                    name: 'tableToolbar',
                    title: '开启头部工具栏',
                    path: 'toolbar',
                    component: TableToolbar
                },

                {
                    name: 'tableTotalRow',
                    title: '开启合计行',
                    path: 'totalRow',
                    component: TableTotalRow
                },

                {
                    name: 'tableHeight',
                    title: '高度最大适应',
                    path: 'height',
                    component: TableHeight
                },

                {
                    name: 'tableCheckbox',
                    title: '开启复选框',
                    path: 'checkbox',
                    component: TableCheckbox
                },

                {
                    name: 'tableRadio',
                    title: '开启单选框',
                    path: 'radio',
                    component: TableRadio
                },

                {
                    name: 'tableCellEdit',
                    title: '开启单元格编辑',
                    path: 'cellEdit',
                    component: TableCellEdit
                },

                {
                    name: 'tableForm',
                    title: '加入表单元素',
                    path: 'form',
                    component: TableForm
                },

                {
                    name: 'tableStyle',
                    title: '设置单元格样式',
                    path: 'style',
                    component: TableStyle
                },

                {
                    name: 'tableFixed',
                    title: '固定列',
                    path: 'fixed',
                    component: TableFixed
                },

                {
                    name: 'tableOperate',
                    title: '数据操作',
                    path: 'operate',
                    component: TableOperate
                },

                {
                    name: 'tableParseData',
                    title: '解析任意数据格式',
                    path: 'parseData',
                    component: TableParseData
                },

                {
                    name: 'tableOnRow',
                    title: '监听行事件',
                    path: 'onrow',
                    component: TableOnRow
                },

                {
                    name: 'tableReload',
                    title: '数据表格的重载',
                    path: 'reload',
                    component: TableReload
                },

                {
                    name: 'tableInitSort',
                    title: '设置初始排序',
                    path: 'initSort',
                    component: TableInitSort
                },

                {
                    name: 'tableCellEvent',
                    title: '监听单元格事件',
                    path: 'cellEvent',
                    component: TableCellEvent
                },

                {
                    name: 'tableThead',
                    title: '复杂表头',
                    path: 'thead',
                    component: TableThead
                }
            ]
        },

        {
            name: 'frame',
            title: '弹出层',
            path: 'frame',
            component: Frame
        },

        {
            name: 'imgView',
            title: '图片预览',
            path: 'imgView',
            component: ImgView
        },

        {
            name: 'icon',
            title: '图标',
            path: 'icon',
            component: Icon
        },

        {
            name: 'editor',
            title: '富文本',
            path: 'editor',
            component: Editor
        }
    ]
};

export default componentRouter;
