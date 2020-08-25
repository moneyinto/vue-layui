<template>
    <Modal :isShow="isShow" @close="isShow = false" :title="type == 'add' ? '新增商品' : '编辑商品'" @ok="save()">
        <form class="layui-form" :lay-filter="`form_${_uid}`">
            <div class="layui-row layui-col-space10 layui-form-item">
                <div class="layui-col-lg6 layui-col-md6">
                    <label class="layui-form-label">商品名称：</label>
                    <div class="layui-input-block">
                        <input type="text" name="name" lay-verify="required" placeholder="请输入商品名称" autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-col-lg6 layui-col-md6">
                    <label class="layui-form-label">商品价格：</label>
                    <div class="layui-input-inline">
                        <input type="text" name="price" lay-verify="required|number" placeholder="请输入商品价格" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-form-mid layui-word-aux">元</div>
                </div>
            </div>
            <div class="layui-form-item layui-offset-top30">
                <div class="layui-input-block">
                    <button class="layui-btn" lay-submit="" :lay-filter="`submit_${_uid}`">立即提交</button>
                </div>
            </div>
        </form>
    </Modal>
</template>

<script>
export default {
    name: 'AddModal',
    data() {
        return {
            type: 'add',
            isShow: false
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.$layui.form.on(`submit(submit_${this._uid})`, (data) => {
                this.$layer.msg(JSON.stringify(data.field));
                return false;
            });
        });
    },
    methods: {
        render(data) {
            this.$nextTick(() => {
                this.$layui.form.val(`form_${this._uid}`, data);
            });
        },
        save() {
        }
    }
};
</script>
