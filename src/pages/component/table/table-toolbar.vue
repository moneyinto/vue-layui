<template>
    <Card title="开启头部工具栏">
        <Table :options="options" @table-toolbar-event="toolbarEvent" @table-bar-event="barEvent">
            <div mref="toolbar">
                <div class="layui-btn-container">
                    <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中行数据</button>
                    <button class="layui-btn layui-btn-sm" lay-event="getCheckLength">获取选中数目</button>
                    <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button>
                </div>
            </div>

            <div mref="bar">
                <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
            </div>
        </Table>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    url: '/static/data/demo1.json',
                    title: '用户数据表',
                    totalRow: true,
                    toolbarDom: 'toolbar',
                    cols: [[
                        {
                            type: 'checkbox',
                            fixed: 'left'
                        },

                        {
                            field: 'id',
                            title: 'ID',
                            width: 80,
                            fixed: 'left',
                            unresize: true,
                            sort: true,
                            totalRowText: '合计'
                        },

                        {
                            field: 'username',
                            title: '用户名',
                            width: 120,
                            edit: 'text'
                        },

                        {
                            field: 'email',
                            title: '邮箱',
                            width: 150,
                            edit: 'text',
                            templet: (res) => {
                                return '<em>' + res.email + '</em>';
                            }
                        },

                        {
                            field: 'experience',
                            title: '积分',
                            width: 80,
                            sort: true,
                            totalRow: true
                        },

                        {
                            field: 'sex',
                            title: '性别',
                            width: 80,
                            edit: 'text',
                            sort: true
                        },

                        {
                            field: 'logins',
                            title: '登入次数',
                            width: 100,
                            sort: true,
                            totalRow: true
                        },

                        {
                            field: 'sign',
                            title: '签名'
                        },

                        {
                            field: 'city',
                            title: '城市',
                            width: 100
                        },

                        {
                            field: 'ip',
                            title: 'IP',
                            width: 120
                        },

                        {
                            field: 'joinTime',
                            title: '加入时间',
                            width: 120
                        },

                        {
                            fixed: 'right',
                            title: '操作',
                            toolbarDom: 'bar',
                            width: 150
                        }
                    ]],

                    page: true
                }
            };
        },

        methods: {
            toolbarEvent(obj) {
                let checkStatus = this.$layui.table.checkStatus(obj.config.id);
                switch (obj.event) {
                case 'getCheckData':
                    this.$layer.alert(JSON.stringify(checkStatus.data));
                    break;
                case 'getCheckLength':
                    this.$layer.msg('选中了：' + checkStatus.data.length + ' 个');
                    break;
                case 'isAll':
                    this.$layer.msg(checkStatus.isAll ? '全选' : '未全选');
                    break;
                };
            },

            barEvent(obj) {
                let data = obj.data;
                if (obj.event === 'del') {
                    this.$layer.confirm('真的删除行么', (index) => {
                        obj.del();
                        this.$layer.close(index);
                    });
                } else if (obj.event === 'edit') {
                    this.$layer.prompt({
                        formType: 2,
                        value: data.email
                    }, (value, index) => {
                        obj.update({
                            email: value
                        });
                        this.$layer.close(index);
                    });
                }
            }
        }
    };
</script>
