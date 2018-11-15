<template>
    <div>
        <table class="layui-hide" ref="table"></table>
        <div v-if="isShow" style="display: none" ref="tableHtml">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    let self = null;
    export default {
        props: {
            options: {
                type: Object,
                default: () => ({
                    cols: []
                })
            }
        },

        data() {
            return {
                isShow: true
            };
        },

        mounted() {
            self = this;
            this.$nextTick(() => {
                this.$layui.use('table', () => {
                    const table = this.$layui.table;
                    const form = this.$layui.form;
                    let options = {
                        elem: this.$refs.table
                    };

                    // 处理表格header中dom按钮
                    if (this.options.toolbarDom) this.options.toolbar = this.$refs.tableHtml.querySelector(`[mref='${this.options.toolbarDom}']`);

                    // 处理表格中的dom按钮
                    if (this.options.cols.length > 0) {
                        for (let col of this.options.cols[0]) {
                            if (col.toolbarDom) col.toolbar = this.$refs.tableHtml.querySelector(`[mref='${col.toolbarDom}']`);
                        }
                    }

                    table.render({...this.options, ...options});

                    this.isShow = false;

                    // 头工具栏事件
                    table.on('toolbar', (obj) => {
                        this.$emit('table-toolbar-event', obj);
                    });

                    // 监听行工具事件
                    table.on('tool', (obj) => {
                        this.$emit('table-bar-event', obj);
                    });

                    // 监听单元格编辑
                    table.on('edit', (obj) => {
                        this.$emit('table-cell-edit-event', obj);
                    });

                    // 监听表格复选框选择
                    table.on('checkbox', (obj) => {
                        this.$emit('table-checkbox-event', obj);
                    });

                    // 监听行单击事件
                    table.on('row', (obj) => {
                        this.$emit('table-row-event', obj);
                    });

                    // 监听行双击事件
                    table.on('rowDouble', (obj) => {
                        this.$emit('table-row-double-event', obj);
                    });

                    // 监听排序事件
                    table.on('sort', (obj) => {
                        this.$emit('table-sort-event', obj);
                    });

                    // 监听表单事件
                    form.on('switch', function(obj) {
                        self.$emit('table-form-switch-event', this, obj);
                    });

                    form.on('checkbox', function(obj) {
                        self.$emit('table-form-checkbox-event', this, obj);
                    });
                });
            });
        }
    };
</script>
