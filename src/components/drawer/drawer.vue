<template>
    <div v-if="isShowDrawer">
        <div class="layui-layer-shade" @click="closeDrawer()"></div>
        <div class="layui-layer layui-layer-page layui-anim layui-anim-rl layui-layer-adminRight" :class="isCloseAnimation ? 'layer-anim-close' : ''">
            <slot></slot>
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
