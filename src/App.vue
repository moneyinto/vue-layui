<template>
    <div id="app" layadmin-themealias="default" class="layui-layout-body">
        <div class="layadmin-tabspage-none" :class="isSMWidth ? ($store.state.isCloseSlider ? '': 'layadmin-side-spread-sm') : ($store.state.isCloseSlider ? 'layadmin-side-shrink': '')">
            <div class="layui-layout layui-layout-admin">
                <Header></Header>
                <Slider></Slider>
                <Drawer></Drawer>
                <router-view></router-view>
                <div class="layadmin-body-shade" @click="$store.commit('toggleSlider')"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',

        data() {
            return {
                isCloseDrawer: false,
                isSMWidth: false,
                isLGWidth: false
            };
        },

        mounted() {
            localStorage.VUE_LAYUI_ADMIN_USERINFO = JSON.stringify({
                name: 'moneyinto'
            });

            this.$store.commit('updateUserInfo');

            this.isSMWidth = window.innerWidth <= 992;
            this.isLGWidth = window.innerWidth > 992;
            this.closeSlider();
            this.openSlider();
            // 监听screen size
            window.onresize = () => {
                this.isSMWidth = window.innerWidth <= 992;
                this.isLGWidth = window.innerWidth > 992;
                this.closeSlider();
                this.openSlider();
            };
        },

        methods: {
            // 切换到sm尺寸时关闭slider
            closeSlider() {
                if (this.isSMWidth) {
                    this.$store.state.isCloseSlider = true;
                }
            },

            // 切换到lg尺寸时打开slider
            openSlider() {
                if (this.isLGWidth) {
                    this.$store.state.isCloseSlider = false;
                }
            }
        }
    };
</script>
