<template>
    <div v-if="isShowDrawer">
        <div class="layui-layer-shade" @click="closeDrawer()"></div>
        <div class="layui-layer layui-layer-page layui-anim layui-anim-rl layui-layer-adminRight" :class="isCloseAnimation ? 'layer-anim-close' : ''">
            <div id="LAY_adminPopupTheme" class="layui-layer-content">
                <div class="layui-card-header"> 配色方案 </div>
                <div class="layui-card-body layadmin-setTheme">
                    <ul class="layadmin-setTheme-color">
                        <li class="layui-this">
                            <div class="layadmin-setTheme-header" style="background-color: undefined;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #20222A;">
                                <div class="layadmin-setTheme-logo" style="background-color: undefined;"></div>
                            </div>
                        </li>
                        <li>
                            <div class="layadmin-setTheme-header" style="background-color: undefined;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #03152A;">
                                <div class="layadmin-setTheme-logo" style="background-color: undefined;"></div>
                            </div>
                        </li>
                        <li>
                            <div class="layadmin-setTheme-header" style="background-color: undefined;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #2E241B;">
                                <div class="layadmin-setTheme-logo" style="background-color: undefined;"></div>
                            </div>
                        </li>
                        <li>
                            <div class="layadmin-setTheme-header" style="background-color: undefined;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #50314F;">
                                <div class="layadmin-setTheme-logo" style="background-color: undefined;"></div>
                            </div>
                        </li>
                        <li>
                            <div class="layadmin-setTheme-header" style="background-color: undefined;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #344058;">
                                <div class="layadmin-setTheme-logo" style="background-color: #1E9FFF;"></div>
                            </div>
                        </li>
                        <li>
                            <div class="layadmin-setTheme-header" style="background-color: undefined;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #3A3D49;">
                                <div class="layadmin-setTheme-logo" style="background-color: #2F9688;"></div>
                            </div>
                        </li>
                        <li layadmin-event="setTheme" data-index="6" data-alias="red" title="red">
                            <div class="layadmin-setTheme-header" style="background-color: undefined;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #20222A;">
                                <div class="layadmin-setTheme-logo" style="background-color: #F78400;"></div>
                            </div>
                        </li>
                        <li layadmin-event="setTheme" data-index="7" data-alias="fashion-red" title="fashion-red">
                            <div class="layadmin-setTheme-header" style="background-color: undefined;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #28333E;">
                                <div class="layadmin-setTheme-logo" style="background-color: #AA3130;"></div>
                            </div>
                        </li>
                        <li layadmin-event="setTheme" data-index="8" data-alias="classic-black" title="classic-black">
                            <div class="layadmin-setTheme-header" style="background-color: undefined;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #24262F;">
                                <div class="layadmin-setTheme-logo" style="background-color: #3A3D49;"></div>
                            </div>
                        </li>
                        <li layadmin-event="setTheme" data-index="9" data-alias="green-header" title="green-header">
                            <div class="layadmin-setTheme-header" style="background-color: #2F9688;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: undefined;">
                                <div class="layadmin-setTheme-logo" style="background-color: #226A62;"></div>
                            </div>
                        </li>
                        <li layadmin-event="setTheme" data-index="10" data-alias="ocean-header" title="ocean-header">
                            <div class="layadmin-setTheme-header" style="background-color: #1E9FFF;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #344058;">
                                <div class="layadmin-setTheme-logo" style="background-color: #0085E8;"></div>
                            </div>
                        </li>
                        <li layadmin-event="setTheme" data-index="11" data-alias="classic-black-header" title="classic-black-header">
                            <div class="layadmin-setTheme-header" style="background-color: #393D49;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: undefined;">
                                <div class="layadmin-setTheme-logo" style="background-color: undefined;"></div>
                            </div>
                        </li>
                        <li layadmin-event="setTheme" data-index="12" data-alias="purple-red-header" title="purple-red-header">
                            <div class="layadmin-setTheme-header" style="background-color: #50314F;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #50314F;">
                                <div class="layadmin-setTheme-logo" style="background-color: #50314F;"></div>
                            </div>
                        </li>
                        <li layadmin-event="setTheme" data-index="13" data-alias="fashion-red-header" title="fashion-red-header">
                            <div class="layadmin-setTheme-header" style="background-color: #AA3130;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #28333E;">
                                <div class="layadmin-setTheme-logo" style="background-color: #28333E;"></div>
                            </div>
                        </li>
                        <li layadmin-event="setTheme" data-index="14" data-alias="green-header" title="green-header">
                            <div class="layadmin-setTheme-header" style="background-color: #009688;"></div>
                            <div class="layadmin-setTheme-side" style="background-color: #28333E;">
                                <div class="layadmin-setTheme-logo" style="background-color: #009688;"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bus from '@/bus';
    export default {
        name: 'Drawer',

        data() {
            return {
                isCloseAnimation: false,
                isShowDrawer: false
            };
        },

        created() {
            Bus.$on('openDrawer', () => {
                this.isCloseAnimation = false;
                this.isShowDrawer = true;
            });
        },

        methods: {
            closeDrawer() {
                this.isCloseAnimation = true;
                setTimeout(() => {
                    this.isShowDrawer = false;
                }, 300);
            }
        },

        destroyed() {
            Bus.$off('openDrawer');
        }
    };
</script>

<style scoped>
    .layui-layer {
        right: 0;
        width: 300px;
        left: auto;
        z-index: 100000;
    }

    .layui-layer-shade {
        z-index: 99999;
        background-color: rgb(0, 0, 0);
        opacity: 0.1;
    }
</style>
