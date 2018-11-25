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
            }
        }
    };
</script>

<style scoped>
    .layadmin-layer-demo {
        margin-top: 10px;
    }
</style>

