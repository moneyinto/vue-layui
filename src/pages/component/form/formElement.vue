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
                        <Select :source="list"></Select>
                    </div>
                    <div class="layui-col-md6">
                        <Select :source="list"></Select>
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
                list: [
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
                ]
            };
        },

        mounted() {
            setTimeout(() => {
                this.list = [
                    {
                        name: '北京',
                        value: 0
                    },

                    {
                        name: '上海',
                        value: 1
                    }
                ];
            }, 2000);
        }
    };
</script>
