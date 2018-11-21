<template>
    <form class="layui-form" :lay-filter="'form_' + _uid">
        <select :lay-filter="'select_' + _uid">
            <option value="">{{placeholder}}</option>
            <option v-if="!group" :value="item.value" v-for="(item, index) in source" :key="index" :selected="item.selected" :disabled="item.disabled">{{item.name}}</option>

            <optgroup v-if="group" :label="item.label" v-for="(item, index) in source" :key="index">
                <option :value="child.value" v-for="(child, i) in item.list" :key="i" :selected="child.selected" :disabled="child.disabled">{{child.name}}</option>
            </optgroup>
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
            },

            group: {
                type: Boolean,
                default: false
            }
        },

        watch: {
            source (val) {
                this.render();
            },

            placeholder (val) {
                this.render();
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
        },

        methods: {
            render() {
                this.$nextTick(() => {
                    this.$layui.form.render('select', `form_${this._uid}`);
                });
            }
        }
    };
</script>
