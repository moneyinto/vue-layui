<template>
    <Card title="高度最大适应">
        <Table :options="options"></Table>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    url: '/static/data/simple.json',
                    height: 'full-200',
                    cellMinWidth: 80,
                    cols: [[
                        {
                            field: 'id',
                            width: 80,
                            title: 'ID',
                            sort: true
                        },

                        {
                            field: 'username',
                            width: 80,
                            title: '用户名'
                        },

                        {
                            field: 'sex',
                            width: 80,
                            title: '性别',
                            sort: true
                        },

                        {
                            field: 'city',
                            width: 80,
                            title: '城市'
                        },

                        {
                            field: 'sign',
                            title: '签名',
                            width: '30%',
                            minWidth: 100
                        },

                        {
                            field: 'experience',
                            title: '积分',
                            sort: true
                        },

                        {
                            field: 'score',
                            title: '评分',
                            sort: true
                        },

                        {
                            field: 'classify',
                            title: '职业'
                        },

                        {
                            field: 'wealth',
                            width: 137,
                            title: '财富',
                            sort: true
                        }
                    ]],

                    page: true
                }
            };
        }
    };
</script>

