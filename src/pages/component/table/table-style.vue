<template>
    <Card title="设置单元格样式">
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
                            title: '用户名',
                            templet: (res) => {
                                return `<a href="javascript:void;" class="layui-table-link">${res.username}</a>`;
                            }
                        },

                        {
                            field: 'sex',
                            width: 80,
                            title: '性别',
                            sort: true,
                            templet: (res) => {
                                if (res.sex === '女') {
                                    return `<span style="color: #F581B1;">${res.sex}</span>`;
                                } else {
                                    return res.sex;
                                }
                            }
                        },

                        {
                            field: 'city',
                            width: 80,
                            title: '城市'
                        },

                        {
                            field: 'sign',
                            title: '签名',
                            minWidth: 100
                        },

                        {
                            field: 'experience',
                            title: '积分',
                            sort: true,
                            style: 'background-color: #eee;'
                        },

                        {
                            field: 'score',
                            title: '评分',
                            sort: true
                        },

                        {
                            field: 'classify',
                            title: '职业',
                            style: 'background-color: #009688; color: #fff;'
                        },

                        {
                            field: 'wealth',
                            width: 137,
                            title: '财富',
                            sort: true
                        }
                    ]]
                }
            };
        }
    };
</script>
