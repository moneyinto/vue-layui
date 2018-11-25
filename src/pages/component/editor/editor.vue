<template>
    <Card>
        <div class="layui-elem-quote">
            <p>富文本采用百度的ueditor进行样式整改的Neditor</p>
        </div>

        <div class="layui-btn-container">
            <button class="layui-btn" @click="switchLang()">切换中英文</button>
            <button class="layui-btn" @click="getAllHtml()">获取整个html的内容</button>
            <button class="layui-btn" @click="getContent()">获取html的内容</button>
        </div>

        <Editor ref="editor" @ready="ueditorReady"></Editor>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                instance: null,
                isZH: true
            };
        },
        methods: {
            ueditorReady(instance) {
                this.instance = instance;
            },

            switchLang() {
                this.isZH = !this.isZH;
                this.$refs.editor.switchLang(this.isZH ? 'zh-cn' : 'en');
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
