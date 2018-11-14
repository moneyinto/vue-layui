<template>
    <Card title="开启单元格编辑">
        <Table :options="options" @table-cell-edit-event="cellEditEvent"></Table>
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
                            type: 'checkbox'
                        },

                        {
                            field: 'id',
                            title: 'ID',
                            sort: true
                        },

                        {
                            field: 'username',
                            title: '用户名',
                            edit: 'text'
                        },

                        {
                            field: 'email',
                            title: '邮箱',
                            edit: 'text'
                        },

                        {
                            field: 'experience',
                            title: '积分',
                            sort: true,
                            edit: 'text'
                        },

                        {
                            field: 'sex',
                            title: '性别',
                            edit: 'text'
                        },

                        {
                            field: 'city',
                            title: '城市',
                            edit: 'text'
                        }
                    ]]
                }
            };
        },

        methods: {
            cellEditEvent(obj) {
                let value = obj.value; // 得到修改后的值
                let data = obj.data; // 得到所在行所有键值
                let field = obj.field; // 得到字段
                this.$layer.msg('[ID: ' + data.id + '] ' + field + ' 字段更改为：' + value);
            }
        }
    };
</script>
