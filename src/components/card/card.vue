<template>
    <div class="layui-card">
        <div class="layui-card-header" v-if="title">
            {{title}}  <i v-if="icon" class="layui-icon" :class="icon" @click="iconClick()"></i>
        </div>

        <div class="layui-card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            title: {
                type: String,
                default: ''
            },

            icon: {
                type: String,
                default: ''
            }
        },
        methods: {
            iconClick() {
                this.$emit('icon-click');
            }
        }
    };
</script>

<style scoped>
    .layui-icon {
        cursor: pointer;
    }

    .layui-icon:hover {
        opacity: 0.8;
    }
</style>

