<template>
    <Card title="权限列表">
        <div class="table-title">
            <div class="layui-inline">
                <!-- <Select :source="typeList" v-model="filterType"></Select> -->
            </div>
            <button class="layui-btn" @click="search()">搜索</button>
        </div>
        <Table :options="options" @table-toolbar-event="toolbarEvent" @table-bar-event="barEvent">
            <div slot="toolbar">
                <div class="layui-btn-container">
                    <button class="layui-btn" lay-event="add">新增商品</button>
                    <button class="layui-btn layui-btn-danger" lay-event="del">删除</button>
                </div>
            </div>

            <div slot="bar">
                <a class="layui-btn layui-btn-sm" lay-event="edit">编辑</a>
                <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
            </div>
        </Table>

        <AddModal ref="addModal" />
    </Card>
</template>

<script>
    import AddModal from './addModal';
    import base from '@/mixins/base';
    export default {
        data() {
            return {
                api: {
                    delete: ''
                },
                options: {
                    data: [
                        {
                            id: 1,
                            name: '手机',
                            price: 20
                        },
                        {
                            id: 2,
                            name: '电脑',
                            price: 30
                        }
                    ],
                    toolbarDom: 'toolbar',
                    defaultToolbar: [],
                    cellMinWidth: 80,
                    cols: [[
                        {
                            type: 'checkbox'
                        },
                        {
                            field: 'name',
                            title: '商品名称',
                            align: 'center'
                        },
                        {
                            field: 'price',
                            title: '商品价格',
                            align: 'center'
                        },
                        {
                            fixed: 'right',
                            title: '操作',
                            toolbarDom: 'bar',
                            width: 200,
                            align: 'center'
                        }
                    ]],
                    page: true
                }
            };
        },
        mixins: [ base ],
        components: { AddModal },
        mounted() {
        },
        methods: {
            init() {}
        }
    };
</script>
