<template>
    <div class="layadmin-tabspage-none" :class="isSMWidth ? ($store.state.isCloseSlider ? '': 'layadmin-side-spread-sm') : ($store.state.isCloseSlider ? '': 'layadmin-side-shrink')">
            <div class="layui-layout layui-layout-admin">
                <Header></Header>
                <Slider :menuList="$store.state.menuList"></Slider>
                <Drawer></Drawer>
                <div class="layadmin-body-shade" @click="$store.commit('toggleSlider')"></div>
                <div class="layui-body" id="LAY_app_body">
                    <div class="layadmin-tabsbody-item layui-show">
                        <Tabs></Tabs>
                        <div class="layui-fluid">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                isCloseDrawer: false,
                isSMWidth: false,
                isLGWidth: false
            };
        },

        mounted() {
            this.$store.commit('updateUserInfo', { name: 'moneyinto' });

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
                    this.$store.state.isCloseSlider = true;
                }
            }
        }
    };
</script>
