<template>
    <Card title="复杂表头">
        <fieldset class="layui-elem-field layui-field-title">
            <legend>常用两级表头</legend>
        </fieldset>

        <Table :options="options1">
            <div mref="bar">
                <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">按钮1</a>
                <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="edit">按钮2</a>
            </div>
        </Table>

        <br />

        <fieldset class="layui-elem-field layui-field-title">
            <legend>更多级表头（可以无限极）</legend>
        </fieldset>

        <Table :options="options2">
            <div mref="bar">
                <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">按钮1</a>
                <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="edit">按钮2</a>
            </div>
        </Table>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                options1: {
                    url: '/static/data/demo2.json',
                    cols: [[ // 标题栏
                        {
                            type: 'checkbox',
                            rowspan: 2
                        },
                        {
                            field: 'username',
                            title: '联系人',
                            align: 'center',
                            rowspan: 2
                        }, // rowspan即纵向跨越的单元格数
                        {
                            align: 'center',
                            title: '地址',
                            colspan: 3
                        }, // colspan即横跨的单元格数，这种情况下不用设置field和width
                        {
                            field: 'amount',
                            title: '金额',
                            width: 80,
                            align: 'center',
                            rowspan: 2
                        },
                        {
                            fixed: 'right',
                            width: 160,
                            title: '操作',
                            align: 'center',
                            toolbarDom: 'bar',
                            rowspan: 2
                        }
                    ], [
                        {
                            field: 'province',
                            title: '省',
                            align: 'center',
                            width: 120
                        },
                        {
                            field: 'city',
                            title: '市',
                            align: 'center',
                            width: 120
                        },
                        {
                            field: 'zone',
                            title: '区',
                            align: 'center',
                            width: 200
                        }
                    ]],
                    page: true,
                    limit: 6,
                    limits: [6]
                },

                options2: {
                    url: '/static/data/demo2.json',
                    cols: [[
                        {
                            field: 'username',
                            title: '联系人',
                            align: 'center',
                            rowspan: 3
                        },
                        {
                            field: 'amount',
                            title: '金额',
                            width: 80,
                            align: 'center',
                            rowspan: 3
                        },
                        {
                            align: 'center',
                            title: '地址1',
                            colspan: 5
                        },
                        {
                            align: 'center',
                            title: '地址2',
                            colspan: 2
                        },
                        {
                            fixed: 'right',
                            width: 160,
                            title: '操作',
                            align: 'center',
                            toolbarDom: 'bar',
                            rowspan: 3
                        }
                    ], [
                        {
                            field: 'province',
                            title: '省',
                            align: 'center',
                            width: 120,
                            rowspan: 2
                        },
                        {
                            field: 'city',
                            title: '市',
                            align: 'center',
                            width: 120,
                            rowspan: 2
                        },
                        {
                            title: '详细',
                            align: 'center',
                            colspan: 3
                        },
                        {
                            field: 'province',
                            title: '省',
                            align: 'center',
                            width: 120,
                            rowspan: 2
                        },
                        {
                            field: 'city',
                            title: '市',
                            align: 'center',
                            width: 120,
                            rowspan: 2
                        }
                    ], [
                        {
                            field: 'street',
                            title: '街道',
                            align: 'center'
                        },
                        {
                            field: 'address',
                            title: '小区',
                            align: 'center'
                        },
                        {
                            field: 'house',
                            title: '单元',
                            align: 'center'
                        }
                    ]],
                    page: true,
                    limit: 6,
                    limits: [6]
                }
            };
        }
    };
</script>
