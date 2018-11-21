<template>
    <form class="layui-form" :lay-filter="'form_' + _uid">
        <select :lay-filter="'select_' + _uid">
            <option value="">{{placeholder}}</option>
            <option :value="item.value" v-for="(item, index) in source" :key="index">{{item.name}}</option>
        </select>
    </form>
</template>

<script>
    export default {
        name: 'Select',
        props: {
            source: {
                type: Array,
                default: () => ([])
            },

            placeholder: {
                type: String,
                default: ''
            }
        },

        watch: {
            source (val) {
                this.$nextTick(() => {
                    this.$layui.form.render('select', `form_${this._uid}`);
                });
            }
        },

        mounted() {
            let form = this.$layui.form;
            this.$nextTick(() => {
                // 渲染指定表单
                form.render('select', `form_${this._uid}`);

                form.on(`select(select_${this._uid})`, (val) => {
                    console.log(val);
                });
            });
        }
    };
</script>
