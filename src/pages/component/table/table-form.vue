<template>
    <Card title="加入表单元素">
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
                            type: 'numbers'
                        },

                        {
                            type: 'checkbox'
                        },

                        {
                            field: 'id',
                            title: 'ID',
                            width: 100,
                            unresize: true,
                            sort: true
                        },

                        {
                            field: 'username',
                            title: '用户名'
                        },

                        {
                            field: 'city',
                            title: '城市'
                        },

                        {
                            field: 'wealth',
                            title: '财富',
                            minWidth: 120,
                            sort: true
                        },

                        {
                            field: 'sex',
                            title: '性别',
                            width: 85,
                            templet: (res) => {
                                console.log(res);
                                return `<input type="checkbox" name="sex" value="${res.sex}" lay-skin="switch" lay-text="女|男" lay-filter="sex">`;
                            },
                            unresize: true
                        },

                        {
                            field: 'lock',
                            title: '是否锁定',
                            width: 110,
                            unresize: true
                        }
                    ]],

                    page: true
                }
            };
        }
    };
</script>
