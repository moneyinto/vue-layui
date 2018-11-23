<template>
    <div class="layui-form" :lay-filter="'form_' + _uid">
        <select :lay-filter="'select_' + _uid" :lay-search="search" :value="value" :name="name">
            <option value="">{{placeholder}}</option>
            <option v-if="!group" :value="item.value" v-for="(item, index) in source" :key="index" :disabled="item.disabled">{{item.name}}</option>

            <optgroup v-if="group" :label="item.label" v-for="(item, index) in source" :key="index">
                <option :value="child.value" v-for="(child, i) in item.list" :key="i" :disabled="child.disabled">{{child.name}}</option>
            </optgroup>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'Select',
        props: {
            source: {
                type: Array,
                default: () => ([])
            },

            name: {
                type: String,
                default: ''
            },

            placeholder: {
                type: String,
                default: ''
            },

            group: {
                type: Boolean,
                default: false
            },

            search: {
                type: Boolean,
                default: false
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
            source (val) {
                this.render();
            },

            name() {
                this.render();
            },

            placeholder (val) {
                this.render();
            },

            group () {
                this.render();
            },

            search () {
                this.render();
            }
        },

        mounted() {
            let form = this.$layui.form;
            this.$nextTick(() => {
                // 渲染指定表单
                form.render('select', `form_${this._uid}`);

                form.on(`select(select_${this._uid})`, (val) => {
                    this.$emit('parent-event', val.value);
                    this.$emit('select-change', val);
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
