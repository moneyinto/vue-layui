<template>
    <div class="layui-form" :lay-filter="'form_' + _uid">
        <input type="radio" :lay-filter="'radio_' + _uid" v-for="(item, index) in source" :key="index" :title="item.title" :checked="value == item.value || item.checked" :value="item.value" :name="item.name" :disabled="item.disabled">
    </div>
</template>

<script>
    export default {
        name: 'RadioList',
        props: {
            source: {
                type: Array,
                default: () => ([])
            },

            value: {
                type: String,
                default: ''
            }
        },

        model: {
            prop: 'value',
            event: 'parent-event'
        },

        watch: {
            source () {
                this.render();
            }
        },

        mounted() {
            let form = this.$layui.form;
            this.$nextTick(() => {
                // 渲染指定表单
                form.render('radio', `form_${this._uid}`);

                form.on(`radio(radio_${this._uid})`, (val) => {
                    this.$emit('parent-event', val.value);
                    this.$emit('radio-change', val);
                });
            });
        },

        methods: {
            render() {
                this.$nextTick(() => {
                    this.$layui.form.render('radio', `form_${this._uid}`);
                });
            }
        }
    };
</script>

