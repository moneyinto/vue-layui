<template>
    <Card title="简单数据表格">
        <Table :options="options"></Table>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    url: '/static/data/simple.json',
                    cellMinWidth: 80,
                    cols: [[
                        {
                            field: 'id',
                            title: 'ID',
                            sort: true
                        },

                        {
                            field: 'username',
                            title: '用户名'
                        },

                        {
                            field: 'sex',
                            title: '性别',
                            sort: true
                        },

                        {
                            field: 'city',
                            title: '城市'
                        },

                        {
                            field: 'sign',
                            title: '签名'
                        },

                        {
                            field: 'classify',
                            title: '职业',
                            align: 'center'
                        },

                        {
                            field: 'experience',
                            title: '积分',
                            align: 'right'
                        },

                        {
                            field: 'score',
                            title: '评分',
                            sort: true,
                            align: 'right'
                        },

                        {
                            field: 'wealth',
                            title: '财富',
                            sort: true,
                            align: 'right'
                        }
                    ]]
                }
            };
        }
    };
</script>
