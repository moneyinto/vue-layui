<template>
    <Card title="加入表单元素">
        <Table :options="options" @table-form-switch-event="switchEvent" @table-form-checkbox-event="checkboxEvent"></Table>
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
                                return `<input type="checkbox" name="sex" value="${res.id}" lay-skin="switch" lay-text="女|男" lay-filter="sex" ${res.sex === '女' ? 'checked' : ''}>`;
                            },
                            unresize: true
                        },

                        {
                            field: 'lock',
                            title: '是否锁定',
                            width: 110,
                            templet: (res) => {
                                return `<input type="checkbox" name="lock" value="${res.id}" title="锁定" lay-filter="lock">`;
                            },
                            unresize: true
                        }
                    ]],

                    page: true
                }
            };
        },

        methods: {
            switchEvent(ele, obj) {
                this.$layer.tips(ele.value + ' ' + ele.name + '：' + obj.elem.checked, obj.othis);
            },

            checkboxEvent(ele, obj) {
                this.$layer.tips(ele.value + ' ' + ele.name + '：' + obj.elem.checked, obj.othis);
            }
        }
    };
</script>
