<template>
    <Card title="图片预览" icon="layui-icon-fonts-code" @icon-click="showDoc('图片预览', 'imgView')">
        <ImgView class="photos-demo" @tab="imgSwitch">
            <!-- layer-src为预览大图， src为缩略图 -->
            <img layer-src="/static/imgs/fly.jpg" src="/static/imgs/fly.jpg" alt="图片名1">
            <img layer-src="/static/imgs/layim.jpg" src="/static/imgs/layim.jpg" alt="图片名2">
        </ImgView>
    </Card>
</template>

<script>
    export default {
        methods: {
            imgSwitch(pic, layero) {
                // 图片切换事件回调
                console.log(pic, layero);
            },

            showDoc(name, target) {
                this.$layer.open({
                    title: name,
                    type: 2,
                    area: ['100%', '100%'],
                    content: `/static/doc/imgView/${target}.html`
                });
            }
        }
    };
</script>

<style scoped>
    .photos-demo img {
        width: 100px;
        height: 60px;
    }
</style>

