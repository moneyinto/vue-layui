<template>
    <div class="layui-upload-form">
        <button v-if="!drag" type="button" class="layui-btn" :class="type" ref="upload"><i class="layui-icon" v-if="icon"></i>{{text}}</button>
        <div v-if="drag" class="layui-upload-drag" ref="upload">
            <i class="layui-icon"></i>
            <p>点击上传，或将文件拖拽到此处</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Upload',
        props: {
            options: {
                type: Object,
                default: () => ({})
            },

            text: {
                type: String,
                default: '上传图片'
            },

            icon: {
                type: Boolean,
                default: false
            },

            type: {
                type: String,
                default: ''
            },

            drag: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                inst: null
            };
        },
        mounted() {
            let upload = this.$layui.upload;
            this.$nextTick(() => {
                let uploadInst = upload.render({
                    elem: this.$refs.upload,
                    ...this.options,
                    before: (obj) => {
                        this.$emit('before', obj);
                    },
                    done: (res) => {
                        this.$emit('after', res);
                    },
                    error: () => {
                        this.$emit('error', uploadInst);
                    }
                });

                this.inst = uploadInst;
            });
        }
    };
</script>
