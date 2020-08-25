<template>
    <div>
        <table class="layui-hide" :id="`table_${_uid}`" :lay-filter="`table_${_uid}`"></table>
        <div style="display: none">
            <div :id="`toolbar_${_uid}`">
                <slot name="toolbar"></slot>
            </div>
            <div :id="`bar_${_uid}`">
                <slot name="bar"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    let self = null;
    import config from '@/http/config';
    import { baseUrl } from '@/http';
    export default {
        props: {
            options: {
                type: Object,
                default: () => ({
                    cols: []
                })
            }
        },

        watch: {
            options() {
                this.render();
            }
        },

        mounted() {
            this.render();
        },

        methods: {
            render() {
                self = this;
                this.$nextTick(() => {
                    this.$layui.use('table', () => {
                        const table = this.$layui.table;
                        const form = this.$layui.form;
                        let options = {
                            elem: `#table_${self._uid}`
                        };

                        if (this.options.urlKey) {
                            this.options.url = baseUrl + config[this.options.urlKey];
                        }

                        // 处理表格header中dom按钮
                        if (this.options.toolbarDom) options.toolbar = `#toolbar_${self._uid}`;

                        // 处理表格中的dom按钮
                        if (this.options.cols.length > 0) {
                            for (let col of this.options.cols[0]) {
                                if (col.toolbarDom) col.toolbar = `#${col.toolbarDom}_${self._uid}`;
                            }
                        }

                        table.render({...this.options, ...options});

                        // 头工具栏事件
                        table.on(`toolbar(table_${self._uid})`, (obj) => {
                            this.$emit('table-toolbar-event', obj);
                        });

                        // 监听行工具事件
                        table.on(`tool(table_${self._uid})`, (obj) => {
                            this.$emit('table-bar-event', obj);
                        });

                        // 监听单元格编辑
                        table.on(`edit(table_${self._uid})`, (obj) => {
                            this.$emit('table-cell-edit-event', obj);
                        });

                        // 监听表格复选框选择
                        table.on(`checkbox(table_${self._uid})`, (obj) => {
                            this.$emit('table-checkbox-event', obj);
                        });

                        // 监听行单击事件
                        table.on(`row(table_${self._uid})`, (obj) => {
                            this.$emit('table-row-event', obj);
                        });

                        // 监听行双击事件
                        table.on(`rowDouble(table_${self._uid})`, (obj) => {
                            this.$emit('table-row-double-event', obj);
                        });

                        // 监听排序事件
                        table.on(`sort(table_${self._uid})`, (obj) => {
                            this.$emit('table-sort-event', obj);
                        });

                        // 监听表单事件
                        form.on(`switch(table_${self._uid})`, function(obj) {
                            self.$emit('table-form-switch-event', this, obj);
                        });

                        form.on(`checkbox(table_${self._uid})`, function(obj) {
                            self.$emit('table-form-checkbox-event', this, obj);
                        });
                    });
                });
            }
        }
    };
</script>
