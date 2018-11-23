<template>
    <div class="layui-form" :lay-filter="'form_' + _uid">
        <input type="checkbox" :lay-filter="'checkbox_' + _uid" :title="title" :checked="checked" :disabled="disabled" :lay-skin="skin" :lay-text="text" :name="name">
    </div>
</template>

<script>
    export default {
        name: 'CheckBox',
        props: {
            title: {
                type: String,
                default: ''
            },

            name: {
                type: String,
                default: ''
            },

            checked: {
                type: Boolean,
                default: false
            },

            disabled: {
                type: Boolean,
                default: false
            },

            skin: {
                type: String,
                default: ''
            },

            text: {
                type: String,
                default: ''
            }
        },

        model: {
            prop: 'checked',
            event: 'parent-event'
        },

        watch: {
            title () {
                this.render();
            },

            name() {
                this.render();
            },

            checked () {
                this.render();
            },

            disabled () {
                this.render();
            },

            skin () {
                this.render();
            },

            text () {
                this.render();
            }
        },

        mounted() {
            let form = this.$layui.form;
            this.$nextTick(() => {
                // 渲染指定表单
                form.render('checkbox', `form_${this._uid}`);

                form.on(`checkbox(checkbox_${this._uid})`, (val) => {
                    this.$emit('parent-event', val.elem.checked);
                    this.$emit('checkbox-change', val);
                });
            });
        },

        methods: {
            render() {
                this.$nextTick(() => {
                    this.$layui.form.render('checkbox', `form_${this._uid}`);
                });
            }
        }
    };
</script>

<style scoped>
    .layui-form {
        display: inline-block;
    }
</style>

