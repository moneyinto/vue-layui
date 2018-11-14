<template>
    <Card title="开启分页">
        <div class="demoTable">
            <div class="layui-inline">
                <input class="layui-input" type="text" autocomplete="off" v-model="searchContent">
            </div>
            <button class="layui-btn" @click="search()">搜索</button>
        </div>
        <Table :options="options"></Table>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                searchContent: '',
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
                    page: true,
                    id: 'testReload'
                }
            };
        },

        methods: {
            search() {
                this.$layui.table.reload('testReload', {
                    page: {
                        curr: 1 // 重新从第 1 页开始
                    },
                    where: {
                        searchContent: this.searchContent
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .demoTable {
        margin-bottom: 10px;
    }
</style>

