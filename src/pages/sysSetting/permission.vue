<template>
    <Card title="权限列表">
        <div class="table-title">
            <div class="layui-inline">
                <Select :source="typeList" v-model="filterType"></Select>
            </div>
            <button class="layui-btn" @click="search()">搜索</button>
        </div>
        <Table :options="options" @table-toolbar-event="toolbarEvent" @table-bar-event="barEvent">
            <div slot="toolbar">
                <div class="layui-btn-container">
                    <button class="layui-btn" lay-event="add">新增权限</button>
                    <button class="layui-btn layui-btn-danger" lay-event="del">删除</button>
                </div>
            </div>

            <div slot="bar">
                <a class="layui-btn layui-btn-sm" lay-event="edit">编辑</a>
                <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
            </div>
        </Table>

        <Modal :isShow="isShow" @close="isShow = false" title="新增权限" @ok="save()">
            <form class="layui-form">
                <div class="layui-row layui-col-space10 layui-form-item">
                    <div class="layui-col-lg6 layui-col-md6">
                        <label class="layui-form-label">权限名称：</label>
                        <div class="layui-input-block">
                            <input type="text" name="fullname" v-model="name" placeholder="请输入权限名称" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                    <div class="layui-col-lg6 layui-col-md6">
                        <label class="layui-form-label">权限类型：</label>
                        <div class="layui-input-block">
                            <Select :source="typeList" v-model="type"></Select>
                        </div>
                    </div>
                    <div class="layui-col-lg6 layui-col-md6">
                        <label class="layui-form-label">权限标识：</label>
                        <div class="layui-input-block">
                            <input type="text" name="fullname" v-model="key" placeholder="请输入权限标识" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false,
                filterType: '',
                type: '2',
                typeList: [
                    {
                        value: 1,
                        name: '数据权限'
                    },
                    {
                        value: 2,
                        name: '页面权限'
                    }
                ],
                name: '',
                key: '',
                id: null,
                permissionList: [],
                options: {
                    data: [],
                    toolbarDom: 'toolbar',
                    defaultToolbar: [],
                    cellMinWidth: 80,
                    cols: [[
                        {
                            type: 'checkbox'
                        },
                        {
                            field: 'name',
                            title: '权限名称',
                            align: 'center'
                        },
                        {
                            field: 'type',
                            title: '权限类型',
                            align: 'center',
                            templet: (res) => {
                                return ['', '数据权限', '页面权限'][res.type];
                            }
                        },
                        {
                            field: 'key',
                            title: '权限标识',
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
        mounted() {
            this.getAllPermission();
        },
        methods: {
            toolbarEvent(obj) {
                if (obj.event === 'add') {
                    this.id = null;
                    this.isShow = true;
                } else if (obj.event === 'del') {
                    let checkStatus = this.$layui.table.checkStatus(obj.config.id);
                    let ids = checkStatus.data.map(item => { return item.id; });
                    this.$layer.confirm('确定删除选中权限吗？', (index) => {
                        this.$layer.close(index);
                        this.$http.post('deletePermission', { ids }).then(res => {
                            if (res.success) {
                                this.getAllPermission();
                            }
                        });
                    });
                }
            },

            barEvent(obj) {
                let data = obj.data;
                if (obj.event === 'del') {
                    this.$layer.confirm('确定删除该权限吗？', (index) => {
                        this.$http.post('deletePermission', { ids: [data.id] }).then(res => {
                            if (res.success) {
                                this.getAllPermission();
                                this.$layer.close(index);
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    this.name = data.name;
                    this.type = String(data.type);
                    this.key = data.key;
                    this.id = data.id;
                    this.isShow = true;
                }
            },

            getAllPermission() {
                this.$http.get('getAllPermission').then(res => {
                    this.permissionList = res.data;
                    console.log(this.permissionList);
                    this.search();
                });
            },

            search() {
                let data = this.permissionList;
                if (this.filterType !== '') data = data.filter(item => { return item.type === Number(this.filterType); });
                this.options = {
                    ...this.options,
                    data: data
                };
            },

            save() {
                if (this.name === '') return this.$layer.msg('请填写权限名称');
                if (this.type === '') return this.$layer.msg('请填写权限标识');
                if (this.key === '') return this.$layer.msg('请选择权限类型');
                if (!this.id) {
                    this.$http.post('addPermission', { name: this.name, type: this.type, key: this.key }).then(res => {
                        if (res.success) {
                            this.name = '';
                            this.key = '';
                            this.getAllPermission();
                            this.isShow = false;
                        } else {
                            this.$layer.msg(res.msg);
                        }
                    });
                } else {
                    this.$http.post('editPermission', { id: this.id, name: this.name, type: this.type, key: this.key }).then(res => {
                        if (res.success) {
                            this.name = '';
                            this.key = '';
                            this.getAllPermission();
                            this.isShow = false;
                        } else {
                            this.$layer.msg(res.msg);
                        }
                    });
                }
            }
        }
    };
</script>
