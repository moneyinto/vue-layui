<template>
    <div>
        <Card title="普通图片上传">
            <div class="layui-upload">
                <Upload :options="options" @before="uploadBefore" @after="uploadAfter" @error="uploadError"></Upload>
            </div> 
        </Card>

        <Card title="多图片上传">
            <div class="layui-upload">
                <Upload :options="options2" text="多图片上传" @before="uploadBefore" @after="uploadAfter" @error="uploadError"></Upload>
            </div>
        </Card>

        <Card title="指定允许上传的文件类型">
            <div class="layui-upload">
                <Upload :options="options3" text="上传文件" :icon="true"></Upload>
                <Upload :options="options4" type="layui-btn-primary" text="只允许压缩文件" :icon="true"></Upload>
                <Upload :options="options5" text="上传视频" :icon="true"></Upload>
                <Upload :options="options6" text="上传音频" :icon="true"></Upload>
            </div>
        </Card>

        <Card title="设定文件大小限制">
            <div class="layui-upload">
                <Upload :options="options7" type="layui-btn-danger" text="上传图片" :icon="true"></Upload>
                <div class="layui-inline layui-word-aux">
                    这里以限制 60KB 为例
                </div>
            </div>
        </Card>

        <Card title="选完文件后不自动上传">
            <div class="layui-upload">
                <Upload ref="upload" :options="options8" type="layui-btn layui-btn-normal" text="选择文件"></Upload>
                <button type="button" class="layui-btn" @click="upload()">开始上传</button>
            </div>
        </Card>

        <Card title="拖拽上传">
            <div class="layui-upload">
                <Upload :options="options" :drag="true"></Upload>
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    url: '/upload'
                },

                options2: {
                    url: '/upload',
                    multiple: true
                },

                options3: {
                    url: '/upload',
                    accept: 'file'
                },

                options4: {
                    url: '/upload',
                    accept: 'file',
                    exts: 'zip|rar|7z'
                },

                options5: {
                    url: '/upload',
                    accept: 'video'
                },

                options6: {
                    url: '/upload',
                    accept: 'audio'
                },

                options7: {
                    url: '/upload',
                    size: 60 // 限制文件大小，单位 KB
                },

                options8: {
                    url: '/upload',
                    auto: false
                }
            };
        },

        methods: {
            uploadBefore(obj) {
                // 预读本地文件示例，不支持ie8
                obj.preview((index, file, result) => {
                    console.log(result);
                });
            },

            uploadAfter(res) {
                // 上传接口回调
                console.log(res);
            },

            uploadError(inst) {
                // 上传失败 重传方法
                // inst.upload()
            },

            upload() {
                this.$refs.upload.inst.upload();
            }
        }
    };
</script>
