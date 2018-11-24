<template>
    <Card>
        <div class="layui-elem-quote">
            <p>富文本采用百度的ueditor进行样式整改的Neditor</p>
        </div>

        <div class="layui-btn-container">
            <button class="layui-btn" @click="getAllHtml()">获取整个html的内容</button>
            <button class="layui-btn" @click="getContent()">获取html的内容</button>
        </div>

        <Editor @ready="ueditorReady"></Editor>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                instance: null
            };
        },
        methods: {
            ueditorReady(instance) {
                console.log('ready');
                this.instance = instance;
            },

            getAllHtml() {
                let html = this.instance.getAllHtml();
                alert(html);
            },

            getContent() {
                let content = this.instance.getContent();
                alert(content);
            }
        }
    };
</script>
