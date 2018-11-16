<template>
    <Card title="监听单元格事件">
        <Table :options="options" @table-bar-event="barEvent"></Table>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    url: '/static/data/simple.json',
                    cellMinWidth: 80,
                    cols: [[
                        {
                            field: 'id',
                            width: 80,
                            title: 'ID'
                        },

                        {
                            field: 'username',
                            title: '用户名'
                        },

                        {
                            field: 'sign',
                            title: '签名',
                            width: '50%',
                            minWidth: 100,
                            event: 'setSign'
                        },

                        {
                            field: 'score',
                            title: '评分',
                            sort: true
                        },

                        {
                            field: 'wealth',
                            title: '财富',
                            sort: true
                        }
                    ]]
                }
            };
        },

        methods: {
            barEvent(obj) {
                let data = obj.data;
                if (obj.event === 'setSign') {
                    this.$layer.prompt({
                        formType: 2,
                        title: '修改 ID 为 [' + data.id + '] 的用户签名',
                        value: data.sign
                    }, (value, index) => {
                        this.$layer.close(index);

                        // 这里一般是发送修改的Ajax请求

                        // 同步更新表格和缓存对应的值
                        obj.update({
                            sign: value
                        });
                    });
                }
            }
        }
    };
</script>
