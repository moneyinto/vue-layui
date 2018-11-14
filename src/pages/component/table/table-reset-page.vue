<template>
    <Card title="自定义分页">
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

                    page: {
                        layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'], // 自定义分页布局
                        // curr: 5, // 设定初始在第 5 页
                        groups: 1, // 只显示 1 个连续页码
                        first: false, // 不显示首页
                        last: false // 不显示尾页
                    }
                }
            };
        }
    };
</script>
