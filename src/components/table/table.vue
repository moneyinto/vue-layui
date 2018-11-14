<template>
    <div>
        <table class="layui-hide" ref="table"></table>
        <div v-if="isShow" style="display: none" ref="tableHtml">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    const layui = window.layui;
    const layer = window.layer;
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
            this.$nextTick(() => {
                layui.use('table', () => {
                    const table = layui.table;
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
                        let checkStatus = table.checkStatus(obj.config.id);
                        switch (obj.event) {
                        case 'getCheckData':
                            layer.alert(JSON.stringify(checkStatus.data));
                            break;
                        case 'getCheckLength':
                            layer.msg('选中了：' + checkStatus.data.length + ' 个');
                            break;
                        case 'isAll':
                            layer.msg(checkStatus.isAll ? '全选' : '未全选');
                            break;
                        };
                    });
                });
            });
        }
    };
</script>
