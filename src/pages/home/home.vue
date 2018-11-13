<template>
    <div class="layui-row layui-col-space15">
        <div class="layui-col-sm6 layui-col-md3">
            <div class="layui-card">
                <div class="layui-card-header">
                    访问量
                    <span class="layui-badge layui-bg-blue layuiadmin-badge">周</span>
                </div>
                <div class="layui-card-body layuiadmin-card-list">
                    <p class="layuiadmin-big-font">9,999,666</p>
                    <p>
                        总计访问量
                        <span class="layuiadmin-span-color">88万 <i class="layui-icon"></i></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
            <div class="layui-card">
                <div class="layui-card-header">
                    下载
                    <span class="layui-badge layui-bg-cyan layuiadmin-badge">月</span>
                </div>
                <div class="layui-card-body layuiadmin-card-list">
                    <p class="layuiadmin-big-font">33,555</p>
                    <p>
                        新下载
                        <span class="layuiadmin-span-color">10% <i class="layui-icon"></i></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
            <div class="layui-card">
                <div class="layui-card-header">
                    收入
                    <span class="layui-badge layui-bg-green layuiadmin-badge">年</span>
                </div>
                <div class="layui-card-body layuiadmin-card-list">
                    <p class="layuiadmin-big-font">999,666</p>
                    <p>
                        总收入
                        <span class="layuiadmin-span-color">*** <i class="layui-icon"></i></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
            <div class="layui-card">
                <div class="layui-card-header">
                    活跃用户
                    <span class="layui-badge layui-bg-orange layuiadmin-badge">月</span>
                </div>
                <div class="layui-card-body layuiadmin-card-list">
                    <p class="layuiadmin-big-font">66,666</p>
                    <p>
                        最近一个月
                        <span class="layuiadmin-span-color">15% <i class="layui-icon"></i></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    }
};
</script>

<style scoped>
.content {
    background-color: #f8f8f8;
}

.info {
    padding: 30px;
    color: #888;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
}

.category {
    padding: 15px;
    margin: 10px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 2px;
}
</style>
