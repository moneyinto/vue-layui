<template>
    <Card title="角色列表">
        <Table :options="options" @table-toolbar-event="toolbarEvent" @table-bar-event="barEvent">
            <div slot="toolbar">
                <div class="layui-btn-container">
                    <button class="layui-btn layui-btn" lay-event="add">新增角色</button>
                    <button class="layui-btn layui-btn-danger layui-btn" lay-event="del">删除</button>
                </div>
            </div>

            <div slot="bar">
                <a class="layui-btn layui-btn-sm" lay-event="edit">编辑</a>
                <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
            </div>
        </Table>

        <Modal :isShow="isShow" @close="close()" title="新增角色" @ok="save()">
            <form class="layui-form">
                <div class="layui-row layui-col-space10 layui-form-item">
                    <div class="layui-col-lg6">
                        <label class="layui-form-label">角色名称：</label>
                        <div class="layui-input-block">
                            <input type="text" name="fullname" v-model="roleName" placeholder="请输入角色名称" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                </div>

                <div class="layui-row layui-col-space10 layui-form-item">
                    <div class="layui-col-lg12">
                        <label class="layui-form-label">权限设置：</label>
                        <div class="layui-input-block">
                            <Table :options="permissionOptions"></Table>
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
                roleName: '',
                id: null,
                rolePermisson: [],
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
                            title: '角色名称',
                            align: 'center'
                        },
                        {
                            fixed: 'right',
                            title: '操作',
                            toolbarDom: 'bar',
                            width: 200,
                            align: 'center'
                        }
                    ]]
                },
                permissionOptions: {
                    data: [],
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
                        }
                    ]],
                    page: true
                }
            };
        },
        mounted() {
            this.getRoleList();
            this.getAllPermission();
        },
        methods: {
            toolbarEvent(obj) {
                if (obj.event === 'add') {
                    this.permissionList.map(item => {
                        item.LAY_CHECKED = true;
                    });
                    this.permissionOptions = {
                        ...this.permissionOptions,
                        data: this.permissionList
                    };
                    this.id = null;
                    this.isShow = true;
                } else if (obj.event === 'del') {
                    let checkStatus = this.$layui.table.checkStatus(obj.config.id);
                    let ids = checkStatus.data.map(item => { return item.id; });
                    this.$layer.confirm('确定删除选中角色吗？', (index) => {
                        this.$layer.close(index);
                        this.$http.post('deleteRole', { ids }).then(res => {
                            if (res.success) {
                                this.$store.dispatch('sysRoleList').then((roleList) => {
                                    this.options = {
                                        ...this.options,
                                        data: roleList
                                    };
                                });
                            }
                        });
                    });
                }
            },

            barEvent(obj) {
                let data = obj.data;
                if (obj.event === 'del') {
                    this.$layer.confirm('确定删除该角色吗？', (index) => {
                        this.$http.post('deleteRole', { ids: [data.id] }).then(res => {
                            if (res.success) {
                                obj.del();
                                this.$layer.close(index);
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    const selectedPermissionList = data.permissionIds ? data.permissionIds.split(',') : [];
                    this.permissionList.map(item => {
                        item.LAY_CHECKED = selectedPermissionList.indexOf(String(item.id)) > -1;
                    });
                    this.permissionOptions = {
                        ...this.permissionOptions,
                        data: this.permissionList
                    };
                    this.roleName = data.name;
                    this.id = data.id;
                    this.isShow = true;
                }
            },

            getAllPermission() {
                this.$http.get('getAllPermission').then(res => {
                    res.data.map(item => { item.LAY_CHECKED = true; });
                    this.permissionList = res.data;
                    this.permissionOptions = {
                        ...this.permissionOptions,
                        data: res.data
                    };
                });
            },

            getRoleList() {
                if (this.$store.state.roleList.length === 0) {
                    this.$store.dispatch('sysRoleList').then((roleList) => {
                        this.options = {
                            ...this.options,
                            data: roleList
                        };
                    });
                } else {
                    this.options = {
                        ...this.options,
                        data: this.$store.state.roleList
                    };
                }
            },

            close() {
                this.isShow = false;
                this.options = {
                    ...this.options,
                    data: this.$store.state.roleList
                };
            },

            save() {
                if (this.roleName === '') return this.$layer.msg('请填写角色名称');
                const permissionIds = this.permissionList.filter(item => { return item.LAY_CHECKED; }).map(item => { return String(item.id); });
                if (!this.id) {
                    this.$http.post('addRole', { name: this.roleName, permissionIds }).then(res => {
                        if (res.success) {
                            this.roleName = '';
                            this.$store.dispatch('sysRoleList').then((roleList) => {
                                this.options = {
                                    ...this.options,
                                    data: roleList
                                };
                            });
                            this.isShow = false;
                        } else {
                            this.$layer.msg(res.msg);
                        }
                    });
                } else {
                    this.$http.post('editRole', { id: this.id, name: this.roleName, permissionIds }).then(res => {
                        if (res.success) {
                            this.roleName = '';
                            this.$store.dispatch('sysRoleList').then((roleList) => {
                                this.options = {
                                    ...this.options,
                                    data: roleList
                                };
                            });
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
