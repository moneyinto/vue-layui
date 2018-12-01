<template>
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md6">
            <Card title="基础效果">
                <Slider class="demo-slider"></Slider>
            </Card>

            <Card title="定义初始值">
                <Slider class="demo-slider" :options="options1"></Slider>
            </Card>

            <Card title="设置最大最小值">
                <Slider class="demo-slider" :options="options2"></Slider>
            </Card>

            <Card title="设置步长">
                <Slider class="demo-slider" :options="options3"></Slider>

                <Slider class="demo-slider" :options="options4"></Slider>
            </Card>

            <Card title="开启输入框">
                <Slider class="demo-slider" :options="options5"></Slider>
            </Card>
        </div>

        <div class="layui-col-md6">
            <Card title="开启范围选择">
                <Slider class="demo-slider" :options="options6"></Slider>
                <Slider class="demo-slider" :options="options7"></Slider>
            </Card>

            <Card title="垂直滑块">
                <Slider class="demo-slider" style="display: inline-block;" :options="options8"></Slider>
                <Slider class="demo-slider" style="display: inline-block;" :options="options9"></Slider>
                <Slider class="demo-slider" style="display: inline-block;" :options="options10"></Slider>
                <Slider class="demo-slider" style="display: inline-block;" :options="options11"></Slider>
            </Card>

            <Card title="自定义颜色">
                <Slider class="demo-slider" :options="options12"></Slider>
                <Slider class="demo-slider" :options="options13"></Slider>
                <Slider class="demo-slider" :options="options14"></Slider>
            </Card>

            <Card title="禁用滑块">
                <Slider class="demo-slider" :options="options15"></Slider>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options1: {
                    value: 20
                },

                options2: {
                    min: 20,
                    max: 50
                },

                options3: {
                    step: 10
                },

                options4: {
                    step: 10,
                    showstep: true
                },

                options5: {
                    input: true
                },

                options6: {
                    value: 40,
                    range: true
                },

                options7: {
                    value: [30, 60],
                    range: true
                },

                options8: {
                    type: 'vertical'
                },

                options9: {
                    type: 'vertical',
                    value: 30
                },

                options10: {
                    type: 'vertical',
                    value: 50,
                    range: true
                },

                options11: {
                    type: 'vertical',
                    value: 80,
                    input: true
                },

                options12: {
                    theme: '#1E9FFF'
                },

                options13: {
                    theme: '#5FB878',
                    value: 50
                },

                options14: {
                    theme: '#FF5722',
                    value: [30, 70],
                    range: true
                },

                options15: {
                    value: 35,
                    disabled: true
                }
            };
        }
    };
</script>

<style scoped>
    .demo-slider {
        margin: 45px 30px;
    }
</style>

