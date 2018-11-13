<template>
    <div class="layui-card">
        <div class="layui-card-header" v-if="title">{{title}}</div>

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
            }
        }
    };
</script>
