<template>
    <div v-if="isShow" >
        <div class="layui-modal-mask" @click="close()"></div>
        <div class="layui-modal-box" :class="animation ? 'active' : ''">
            <div class="layui-modal-header">
                <div class="layui-modal-title">
                    <span>{{title}}</span>
                </div>
                <span class="layui-modal-close-x layui-icon layui-icon-close" @click="close()"></span>
            </div>
            <div class="layui-modal-body">
                <slot></slot>
            </div>
            <div class="layui-modal-footer" v-if="showFooter">
                <button type="button" class="layui-btn layui-btn-primary layui-btn-sm" @click="close()"><span>取 消</span></button>
                <button type="button" class="layui-btn layui-btn-sm" @click="ok()"><span>确 定</span></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',

    data() {
        return {
            animation: false
        };
    },

    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        showFooter: {
            type: Boolean,
            default: false
        }
    },

    watch: {
        isShow() {
            setTimeout(() => {
                this.animation = this.isShow;
            }, 100);
        }
    },

    methods: {
        close() {
            this.$emit('close');
        },
        ok() {
            this.$emit('ok');
        }
    }
};
</script>

<style scoped>
    .layui-modal-mask {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #373737;
        background-color: rgba(55,55,55,.6);
        height: 100%;
        z-index: 1000000;
        filter: alpha(opacity=50);
    }

    .layui-modal-box {
        position: fixed;
        background-color: #fff;
        border: 0;
        border-radius: 4px;
        background-clip: padding-box;
        box-shadow: 0 2px 8px rgba(0,0,0,.2);
        top: 100px;
        left: 10%;
        right: 10%;
        transform: scale(0);
        z-index: 10000001;
        transition: .3s transform;
    }

    .layui-modal-box.active {
        transform: scale(1);
    }

    .layui-modal-header {
        padding: 13px 16px;
        border-radius: 4px 4px 0 0;
        background: #fff;
        color: rgba(0,0,0,.65);
        border-bottom: 1px solid #e9e9e9;
    }

    .layui-modal-title {
        margin: 0;
        font-size: 14px;
        line-height: 21px;
        font-weight: 500;
        color: rgba(0,0,0,.85);
    }

    .layui-modal-close-x {
        cursor: pointer;
        border: 0;
        background: transparent;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 10;
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
        -webkit-transition: color .3s ease;
        transition: color .3s ease;
        color: rgba(0,0,0,.43);
        outline: 0;
        display: block;
        font-style: normal;
        text-align: center;
        text-transform: none;
        text-rendering: auto;
        width: 48px;
        height: 48px;
        line-height: 48px;
        font-size: 14px;
    }

    .layui-modal-footer {
        border-top: 1px solid #e9e9e9;
        padding: 10px 16px 10px 10px;
        text-align: right;
        border-radius: 0 0 4px 4px;
    }

    .layui-modal-body {
        padding: 16px;
        font-size: 12px;
        line-height: 1.5;
    }
</style>
