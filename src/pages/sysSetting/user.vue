<template>
    <Card title="用户列表">
        <div class="table-title">
            <form class="layui-form">
                <div class="layui-row layui-col-space10 layui-form-item">
                    <div class="layui-col-xs10">
                        <div class="layui-row layui-col-space10 layui-form-item">
                            <div class="layui-col-xs12 layui-col-sm6 layui-col-md4">
                                <label class="layui-form-label">用户名：</label>
                                <div class="layui-input-block">
                                    <input type="text" v-model="filterName" placeholder="请输入用户名" autocomplete="off" class="layui-input">
                                </div>
                            </div>
                            <div class="layui-col-xs12 layui-col-sm6 layui-col-md4">
                                <label class="layui-form-label">账号：</label>
                                <div class="layui-input-block">
                                    <input type="text" v-model="filterAccount" placeholder="请输入账号" autocomplete="off" class="layui-input">
                                </div>
                            </div>
                            <div class="layui-col-xs12 layui-col-sm6 layui-col-md4">
                                <label class="layui-form-label">角色：</label>
                                <div class="layui-input-block">
                                    <Select :source="$store.state.roleList" keyValue="id" v-model="filterRole"></Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="layui-col-xs2">
                        <button class="layui-btn" @click="search()">搜索</button>
                    </div>
                </div>
            </form>
        </div>
        <Table :options="options" @table-toolbar-event="toolbarEvent" @table-bar-event="barEvent">
            <div slot="toolbar">
                <div class="layui-btn-container">
                    <button class="layui-btn layui-btn-sm" lay-event="add">新增用户</button>
                    <button class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</button>
                </div>
            </div>

            <div slot="bar">
                <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
            </div>
        </Table>

        <Modal :isShow="isShow" @close="isShow = false" title="新增用户" @ok="save()">
            <form class="layui-form">
                <div class="layui-row layui-col-space10 layui-form-item">
                    <div class="layui-col-xs12 layui-col-sm6">
                        <label class="layui-form-label">用户名：</label>
                        <div class="layui-input-block">
                            <input type="text" v-model="user.name" placeholder="请输入用户名" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                    <div class="layui-col-xs12 layui-col-sm6">
                        <label class="layui-form-label">角色：</label>
                        <div class="layui-input-block">
                            <Select :source="$store.state.roleList" keyValue="id" v-model="user.roleId"></Select>
                        </div>
                    </div>
                    <div class="layui-col-xs12 layui-col-sm6">
                        <label class="layui-form-label">账号：</label>
                        <div class="layui-input-block">
                            <input type="text" v-model="user.account" placeholder="请输入账号" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                    <div class="layui-col-xs12 layui-col-sm6">
                        <label class="layui-form-label">密码：</label>
                        <div class="layui-input-block">
                            <input type="password" v-model="user.password" placeholder="请输入密码" autocomplete="off" class="layui-input">
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
                filterRole: '',
                filterName: '',
                filterAccount: '',
                id: null,
                user: {
                    name: '',
                    account: '',
                    roleId: '',
                    password: ''
                },
                options: {
                    urlKey: 'getSysUser',
                    toolbarDom: 'toolbar',
                    defaultToolbar: [],
                    cellMinWidth: 80,
                    cols: [[
                        {
                            type: 'checkbox'
                        },
                        {
                            field: 'name',
                            title: '用户名',
                            align: 'center'
                        },
                        {
                            field: 'roleId',
                            title: '角色',
                            align: 'center',
                            templet: (res) => {
                                const role = this.$store.state.roleList.find(item => { return item.id === res.roleId; });
                                return role ? role.name : '--';
                            }
                        },
                        {
                            field: 'account',
                            title: '账号',
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
                    page: true,
                    where: {
                        name: '',
                        account: '',
                        roleId: ''
                    }
                }
            };
        },
        mounted() {
            if (this.$store.state.roleList.length === 0) {
                this.$store.dispatch('sysRoleList');
            }
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

            search() {
                let data = this.permissionList;
                if (this.filterType !== '') data = this.options.data.filter(item => { return item.type === Number(this.filterType); });
                this.options = {
                    ...this.options,
                    data: data
                };
            },

            save() {
                if (this.user.name === '') return this.$layer.msg('请填写用户名');
                if (this.user.roleId === '') return this.$layer.msg('请选择用户角色');
                if (this.user.account === '') return this.$layer.msg('请填写用户账号');
                if (this.user.password === '') return this.$layer.msg('请填写用户密码');
                if (!this.id) {
                    this.$http.post('addSysUser', this.user).then(res => {
                        if (res.success) {
                            this.user = {
                                name: '',
                                account: '',
                                roleId: '',
                                password: ''
                            };
                            this.isShow = false;
                        } else {
                            this.$layer.msg(res.msg);
                        }
                    });
                } else {
                    this.$http.post('editSysUser', { id: this.id, name: this.name, type: this.type, key: this.key }).then(res => {
                        if (res.success) {
                            this.user = {
                                name: '',
                                account: '',
                                roleId: '',
                                password: ''
                            };
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
