<template>
    <div>
        <input v-show="isInput" type="text" class="layui-input" :placeholder="placeholder" ref="dateTime">
        <slot></slot>
    </div>
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
            },

            hint: {
                type: String,
                default: ''
            },

            isInput: {
                type: Boolean,
                default: true
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
                    let init = null;
                    let options = {
                        elem: this.isInput ? this.$refs.dateTime : this.$refs.dateTime.nextElementSibling,
                        done: (value, date) => {
                            this.$emit('laydate-done', value, date);
                        },
                        ready: () => {
                            this.hint && init.hint(this.hint);
                        }
                    };

                    init = laydate.render({...this.options, ...options});
                });
            });
        }
    };
</script>
