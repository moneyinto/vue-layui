<template>
    <div>
        <Card title="轮播图设定各种参数">
            <Carousel height="400px" :autoPlay="autoPlay" :anim="anim" :arrow="arrow" :indicator="indicator" :interval="Number(interval)" @change="carouselChange" class="carousel">
                <div><div class="item">条目1</div></div>
                <div><div class="item">条目2</div></div>
                <div><div class="item">条目3</div></div>
                <div><div class="item">条目4</div></div>
                <div><div class="item">条目5</div></div>
                <div><div class="item">条目6</div></div>
            </Carousel>

            <div class="layui-form" style="margin-top: 15px;">
                <div class="layui-form-item">
                    <label class="layui-form-label">动画类型</label>
                    <div class="layui-input-block">
                        <div class="layui-btn-group demoTest" style="margin-top: 5px;">
                            <button class="layui-btn layui-btn-sm" :style="{'background-color': anim === 'default' ? '#5FB878' : ''}" @click="anim = 'default'">左右切换</button>
                            <button class="layui-btn layui-btn-sm" :style="{'background-color': anim === 'updown' ? '#5FB878' : ''}" @click="anim = 'updown'">上下切换</button>
                            <button class="layui-btn layui-btn-sm" :style="{'background-color': anim === 'fade' ? '#5FB878' : ''}" @click="anim = 'fade'">渐隐渐显</button>
                        </div>
                    </div>
                </div>

                <div class="layui-form-item">
                    <label class="layui-form-label">箭头状态</label>
                    <div class="layui-input-block">
                        <div class="layui-btn-group demoTest" style="margin-top: 5px;">
                            <button class="layui-btn layui-btn-sm" :style="{'background-color': arrow === 'hover' ? '#5FB878' : ''}" @click="arrow = 'hover'">悬停显示</button>
                            <button class="layui-btn layui-btn-sm" :style="{'background-color': arrow === 'always' ? '#5FB878' : ''}" @click="arrow = 'always'">始终显示</button>
                            <button class="layui-btn layui-btn-sm" :style="{'background-color': arrow === 'none' ? '#5FB878' : ''}" @click="arrow = 'none'">不显示</button>
                        </div>
                    </div>
                </div>

                <div class="layui-form-item">
                    <label class="layui-form-label">指示器位置</label>
                    <div class="layui-input-block">
                        <div class="layui-btn-group demoTest" style="margin-top: 5px;">
                            <button class="layui-btn layui-btn-sm" :style="{'background-color': indicator === 'inside' ? '#5FB878' : ''}" @click="indicator = 'inside'">容器内部</button>
                            <button class="layui-btn layui-btn-sm" :style="{'background-color': indicator === 'outside' ? '#5FB878' : ''}" @click="indicator = 'outside'">容器外部</button>
                            <button class="layui-btn layui-btn-sm" :style="{'background-color': indicator === 'none' ? '#5FB878' : ''}" @click="indicator = 'none'">不显示</button>
                        </div>
                    </div>
                </div>

                <div class="layui-form-item" style="margin-bottom: 0">
                    <div class="layui-inline">
                        <label class="layui-form-label">自动切换</label>
                        <div class="layui-input-block">
                            <CheckBox skin="switch" text="ON|OFF" v-model="autoPlay"></CheckBox>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label" style="width: auto;">时间间隔</label>
                        <div class="layui-input-inline" style="width: 120px;">
                            <input type="tel" v-model="interval" autocomplete="off" placeholder="毫秒" class="layui-input demoSet">
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <Card title="填充轮播元素 - 以图片为例">
            <Carousel :height="height">
                <div><img ref="first" src="static/imgs/1.png" /></div>
                <div><img src="static/imgs/2.png" /></div>
                <div><img src="static/imgs/3.png" /></div>
                <div><img src="static/imgs/4.png" /></div>
                <div><img src="static/imgs/5.png" /></div>
                <div><img src="static/imgs/6.png" /></div>
                <div><img src="static/imgs/7.png" /></div>
            </Carousel>
        </Card>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                autoPlay: true,
                anim: 'default',
                arrow: 'always',
                indicator: 'inside',
                interval: 3000,
                height: 'auto'
            };
        },

        mounted() {
            // 自适应屏幕方法
            this.$nextTick(() => {
                setTimeout(() => {
                    this.height = this.$refs.first.clientHeight + 'px';
                }, 100);
            });
        },

        methods: {
            carouselChange(obj) {
                console.log(obj);
            }
        }
    };
</script>

<style scoped>
    .carousel div[carousel-item]>*:nth-child(2n+1) {
        background-color: #5FB878;
    }

    .carousel div[carousel-item]>*:nth-child(2n) {
        background-color: #009688;
    }

    .carousel div[carousel-item]>* .item {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 100%;
    }

    img {
        width: 100%;
    }
</style>

