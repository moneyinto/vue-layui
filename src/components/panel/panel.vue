<template>
    <div class="layui-collapse" :lay-filter="`collapse_${_uid}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Panel',

        mounted() {
            this.$nextTick(() => {
                this.$layui.element.render(`collapse(collapse_${this._uid})`);
            });
        }
    };
</script>
