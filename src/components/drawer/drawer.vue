<template>
    <div v-if="isShowDrawer">
        <div class="layui-layer-shade" @click="closeDrawer()"></div>
        <div class="layui-layer layui-layer-page layui-anim layui-anim-rl layui-layer-adminRight" :class="isCloseAnimation ? 'layer-anim-close' : ''">
            <div id="LAY_adminPopupTheme" class="layui-layer-content">
                <div class="layui-card-header"> 配色方案 </div>
                <div class="layui-card-body layadmin-setTheme">
                    <ul class="layadmin-setTheme-color">
                        <li :class="{'layui-this' : $store.state.theme.name === item.name}" v-for="(item, index) in themes" :key="index" :title="item.name" @click="switchTheme(item)">
                            <div class="layadmin-setTheme-header" :style="{backgroundColor: item.header}"></div>
                            <div class="layadmin-setTheme-side" :style="{backgroundColor: item.slide}">
                                <div class="layadmin-setTheme-logo" :style="{backgroundColor: item.logo}"></div>
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
    import Theme from '@/data/theme';
    export default {
        name: 'Drawer',

        data() {
            return {
                isCloseAnimation: false,
                isShowDrawer: false,
                themes: Theme
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
            },

            switchTheme(theme) {
                this.$store.commit('updateTheme', theme);
            }
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
