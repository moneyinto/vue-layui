<template>
    <Card title="设置初始排序">
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
                    initSort: {
                        field: 'wealth',
                        type: 'desc'
                    },
                    cols: [[
                        {
                            field: 'id',
                            width: 80,
                            title: 'ID'
                        },

                        {
                            field: 'username',
                            title: '用户名'
                        },

                        {
                            field: 'score',
                            title: '评分',
                            sort: true
                        },

                        {
                            field: 'wealth',
                            title: '财富',
                            sort: true
                        }
                    ]]
                }
            };
        }
    };
</script>
