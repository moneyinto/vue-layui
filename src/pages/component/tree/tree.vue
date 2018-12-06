<template>
    <Card title="树形结构">
        <div class="layui-elem-quote" style="margin-bottom: 0;">
            <p class="layui-text">&nbsp;&nbsp;layui 2.0以上不支持树形结构了，为了权限功能考虑，来一个简单的树形结构组件。</p>
            <p class="layui-text">【注】checked值在showCheckbox为true时，一定要附上初始值，不然一些链式反应存在问题，偷懒所致😊</p>
        </div>
        <Tree :data="data" :showCheckbox="true"></Tree>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        title: 'parent 1',
                        expand: true,
                        checked: false,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        checked: false
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        checked: false
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checked: false
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        checked: false
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        }
    };
</script>
