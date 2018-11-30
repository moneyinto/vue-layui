<template>
    <div>
        <Card title="完整分页">
            <Page :options="options"></Page>
        </Card>

        <Card title="自定义主题颜色">
            <Page :options="options1"></Page>
        </Card>

        <Card title="显示首页尾页">
            <Page :options="options2"></Page>
        </Card>

        <Card title="只显示上一页、下一页">
            <Page :options="options3"></Page>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    count: 100,
                    layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip'],
                    jump: (obj) => {
                        console.log(obj);
                    }
                },

                options1: {
                    count: 100,
                    theme: '#FFB800'
                },

                options2: {
                    count: 100,
                    last: '尾页',
                    first: '首页'
                },

                options3: {
                    count: 100,
                    layout: ['prev', 'next'],
                    jump: (obj, first) => {
                        if (!first) {
                            this.$layer.msg('第 ' + obj.curr + ' 页');
                        }
                    }
                }
            };
        }
    };
</script>
