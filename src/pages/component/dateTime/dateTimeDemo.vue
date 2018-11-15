<template>
    <div>
        <Card title="常规用法">
            <div class="layui-form">
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">中文版</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :value="myDateTime" @laydate-change="dateChange"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">国际版</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{lang: 'en'}"></DateTime>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                myDateTime: '2018-12-11'
            };
        },

        methods: {
            dateChange(value, date) {
                this.myDateTime = value;
            }
        }
    };
</script>

<style scoped>
    .layui-form-item:last-child {
        margin-bottom: 0;
    }
</style>

