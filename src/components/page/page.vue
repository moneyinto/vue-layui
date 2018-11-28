<template>
    <div ref="page"></div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Object,
                default: () => ({})
            }
        },

        mounted() {
            let options = {
                elem: this.$refs.page
            };

            let laypage = this.$layui.laypage;
            laypage.render({...this.options, ...options});
        }
    };
</script>
