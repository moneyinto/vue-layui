<template>
    <input type="text" class="layui-input" :placeholder="placeholder" ref="dateTime">
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: ''
            },

            options: {
                type: Object,
                default: () => ({})
            }
        },

        data() {
            return {
                isShow: true
            };
        },

        mounted() {
            this.$nextTick(() => {
                this.$layui.use('laydate', () => {
                    const laydate = this.$layui.laydate;

                    let options = {
                        elem: this.$refs.dateTime,
                        done: (value, date) => {
                            this.$emit('laydate-change', value, date);
                        }
                    };

                    laydate.render({...this.options, ...options});
                });
            });
        }
    };
</script>
