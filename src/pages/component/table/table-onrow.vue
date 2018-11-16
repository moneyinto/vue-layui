<template>
    <Card title="监听行事件">
        <Table :options="options" @table-row-event="rowClick"></Table>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    url: '/static/data/demo1.json',
                    title: '用户数据表',
                    cols: [[
                        {
                            field: 'id',
                            title: 'ID',
                            width: 80,
                            fixed: 'left',
                            unresize: true,
                            sort: true
                        },

                        {
                            field: 'username',
                            title: '用户名',
                            width: 120
                        },

                        {
                            field: 'email',
                            title: '邮箱',
                            width: 150
                        },

                        {
                            field: 'experience',
                            title: '积分',
                            width: 80,
                            sort: true
                        },

                        {
                            field: 'sex',
                            title: '性别',
                            width: 80,
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
                        }
                    ]],
                    page: true
                }
            };
        },

        methods: {
            rowClick(obj) {
                let data = obj.data;

                this.$layer.alert(JSON.stringify(data), {
                    title: '当前行数据：'
                });

                // 标注选中样式
                obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click');
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
