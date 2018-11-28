<template>
    <div>
        <Card title="弹层类型">
            <div class="layui-btn-container layadmin-layer-demo">
                <button class="layui-btn layui-btn-primary" @click="$layer.alert('你好，体验者')">Alert</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.confirm('您是如何看待前端开发？')">Confirm</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.msg('玩命提示中')">Msg</button>
                <button class="layui-btn layui-btn-primary" ref="tips" @click="$layer.tips('Hi，我是一个提示', $refs.tips, { tips: 1 })">Tips</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.open({ title: '页面层', type: 1, content: '<div style=\'padding: 20px;\'>放入任意HTML</div>', area: ['80%', '50%'] })">Page</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.open({ title: '页面层', type: 2, content: 'http://www.baidu.com', area: ['80%', '50%'], maxmin: true })">Iframe</button>
                <button class="layui-btn layui-btn-primary" @click="showPhoto()">Photos</button>
            </div>
        </Card>

        <Card title="提示信息示例">
            <div class="layui-btn-container layadmin-layer-demo">
                <button class="layui-btn layui-btn-primary" @click="$layer.msg('你好，体验者')">例1</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.msg('您是如何看待前端开发？', {icon: 0})">例2</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.msg('bingo', {icon: 1})">例3</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.msg('好悲催', {icon: 2})">例4</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.msg('啥情况', {icon: 3})">例5</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.msg('没办法了', {icon: 4})">例6</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.msg('不开心', {icon: 5})">例7</button>
                <button class="layui-btn layui-btn-primary" @click="$layer.msg('开心', {icon: 6})">例8</button>
            </div>
        </Card>

        <Card title="加载层">
            <div class="layui-btn-container layadmin-layer-demo">
                <button class="layui-btn layui-btn-primary" @click="loading()">风格1</button>
                <button class="layui-btn layui-btn-primary" @click="loading(1)">风格2</button>
                <button class="layui-btn layui-btn-primary" @click="loading(2)">风格3</button>
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        methods: {
            showPhoto() {
                this.$layer.photos({
                    photos: {
                        title: '测试相册', // 相册标题
                        id: 123, // 相册id
                        start: 0, // 初始显示的图片序号，默认0
                        data: [   // 相册包含的图片，数组格式
                            {
                                alt: '图片名 FLY',
                                pid: 666, // 图片id
                                src: '/static/imgs/fly.jpg', // 原图地址
                                thumb: '/static/imgs/fly.jpg' // 缩略图地址
                            }
                        ]
                    },
                    anim: 5
                });
            },

            loading(type) {
                this.$layer.load(type);
                setTimeout(() => {
                    this.$layer.closeAll('loading');
                }, 2000);
            }
        }
    };
</script>

<style scoped>
    .layadmin-layer-demo {
        margin-top: 10px;
    }
</style>

