<template>
    <div class="alet">
        <div class="alert-mask"></div>
        <div class="alert-box">
            <div class="alert-animation" :class="isClose ? 'alert-close' : ''">
                <div class="alert-title">
                    {{title}}
                </div>
                <div class="alert-content">
                    <div>{{content}}</div>
                </div>
                <div class="alert-footer">
                    <div class="alert-close-btn" @click="close">
                        确定
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: '',
            title: '提示',
            isClose: false
        };
    },

    methods: {
        close() {
            this.isClose = true;
            setTimeout(() => {
                this.$el.remove();
                this.isClose = false;
                this.onClose();
            }, 300);
        }
    }
};
</script>

<style scoped>
.alert-box {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}

.alert-animation {
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0, 0, 0, .3);
    animation-name: scaleIn;
    animation-duration: .3s;
    animation-fill-mode: both;
}

.alert-close {
    animation-name: scaleOut;
}

@keyframes scaleIn {
    0% {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}

@keyframes scaleOut {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(0.5);
        opacity: 0;
    }
}

.alert-mask {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
}

.alert-title {
    background: #2d8cf0;
    color: #fff;
    padding: 0 80px 0 20px;
    height: 42px;
    line-height: 42px;
}

.alert-content {
    background: #fff;
    color: #444;
    padding: 20px;
}

.alert-footer {
    padding: 0 20px 20px;
    text-align: right;
}

.alert-close-btn {
    display: inline-block;
    border-color: #2d8cf0;
    background-color: #2d8cf0;
    color: #fff;
    height: 28px;
    line-height: 28px;
    margin: 5px 5px 0;
    padding: 0 15px;
    border-radius: 2px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
}

.alert-close-btn:hover {
    background-color: #4e9cf0;
}
</style>
