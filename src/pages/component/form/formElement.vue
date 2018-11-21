<template>
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md6">
            <Card title="输入框">
                <div class="layui-row layui-col-space10">
                    <div class="layui-col-md12">
                        <input type="text" name="title" placeholder="请输入标题" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-col-md6">
                        <input type="text" name="title" placeholder="用户名" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-col-md6">
                        <input type="password" name="title" placeholder="密码" autocomplete="off" class="layui-input">
                    </div>
                </div>
            </Card>

            <Card title="下拉选择框">
                <div class="layui-row layui-col-space10">
                    <div class="layui-col-md6">
                        <Select :source="list2" placeholder="请选择一个城市"></Select>
                    </div>
                    <div class="layui-col-md6">
                        <Select :source="list2"></Select>
                    </div>
                </div>
                <div class="layui-row layui-col-space10">
                    <div class="layui-col-md6">
                        <Select :group="true" :source="list3" placeholder="请选择一个城市"></Select>
                    </div>
                    <div class="layui-col-md6">
                        <Select :source="list2"></Select>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list1: [
                    {
                        name: '北京',
                        value: 0
                    },

                    {
                        name: '上海',
                        value: 1
                    },

                    {
                        name: '杭州',
                        value: 2
                    }
                ],

                list2: [
                    {
                        name: '北京',
                        value: 0,
                        selected: true
                    },

                    {
                        name: '上海（禁用效果）',
                        value: 1,
                        disabled: true
                    },

                    {
                        name: '杭州',
                        value: 2
                    }
                ],

                list3: [
                    {
                        label: '城市记忆',
                        list: [
                            {
                                name: '你工作的第一个城市？',
                                value: 0,
                                selected: true
                            }
                        ]
                    },

                    {
                        label: '学生时代',
                        list: [
                            {
                                name: '你的工号？',
                                value: 1
                            },

                            {
                                name: '你最喜欢的老师？',
                                value: 2
                            }
                        ]
                    }
                ]
            };
        }
    };
</script>
