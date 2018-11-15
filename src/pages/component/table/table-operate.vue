<template>
    <Card title="开启合计行">
        <Table :options="options" @table-toolbar-event="toolbarEvent" @table-bar-event="barEvent" @table-checkbox-event="checkboxEvent">
            <div mref="toolbar">
                <div class="layui-btn-container">
                    <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中行数据</button>
                    <button class="layui-btn layui-btn-sm" lay-event="getCheckLength">获取选中数目</button>
                    <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button>
                </div>
            </div>

            <div mref="bar">
                <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">查看</a>
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
                    toolbarDom: 'toolbar',
                    defaultToolbar: [],
                    cols: [[
                        {
                            type: 'checkbox',
                            fixed: 'left'
                        },

                        {
                            field: 'id',
                            title: 'ID',
                            width: 80,
                            fixed: 'left'
                        },

                        {
                            field: 'username',
                            title: '用户名',
                            width: 120,
                            edit: 'text'
                        },

                        {
                            field: 'sex',
                            title: '性别',
                            width: 80,
                            edit: 'text',
                            sort: true
                        },

                        {
                            field: 'city',
                            title: '城市',
                            width: 100
                        },

                        {
                            field: 'sign',
                            title: '签名'
                        },

                        {
                            field: 'experience',
                            title: '积分',
                            width: 80,
                            sort: true,
                            totalRow: true
                        },

                        {
                            fixed: 'right',
                            title: '操作',
                            toolbarDom: 'bar',
                            width: 200
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
                if (obj.event === 'detail') {
                    this.$layer.msg('ID：' + data.id + ' 的查看操作');
                } else if (obj.event === 'del') {
                    this.$layer.confirm('真的删除行么', (index) => {
                        obj.del();
                        this.$layer.close(index);
                    });
                } else if (obj.event === 'edit') {
                    this.$layer.alert('编辑行：<br>' + JSON.stringify(data));
                }
            },

            checkboxEvent(obj) {
                this.$layer.msg('checkbox变化行：' + obj.data.id);
            }
        }
    };
</script>
