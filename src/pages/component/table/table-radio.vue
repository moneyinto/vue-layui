<template>
    <Card title="开启单选框">
        <Table :options="options">
             <div mref="toolbar">
                <div class="layui-btn-container">
                    <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中行数据</button>
                </div>
            </div>
        </Table>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    url: '/static/data/simple.json',
                    cellMinWidth: 80,
                    toolbarDom: 'toolbar',
                    cols: [[
                        {
                            type: 'radio'
                        },

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
