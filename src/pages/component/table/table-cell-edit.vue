<template>
    <Card title="开启单元格编辑">
        <Table :options="options"></Table>
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
        }
    };
</script>
