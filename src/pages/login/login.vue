<template>
    <div class="layadmin-user-login layadmin-user-display-show" ref="pgCanvas">
        <div class="site-zfj site-zfj-anim">
            <i class="layui-icon" style="color: #fff; color: rgba(255,255,255,.7);"></i>
        </div>
        <div class="layadmin-user-login-main">
            <div class="layadmin-user-title">
                <strong>Vue layui Admin</strong>
                <em>Management System</em>
            </div>

            <div class="layadmin-user-form layui-icon-username layui-icon">
                <input type="text" placeholder="用户名" class="login_txtbx" v-model="data.account">
            </div>

            <div class="layadmin-user-form layui-icon layui-icon-password">
                <input type="password" placeholder="密码" class="login_txtbx" v-model="data.password">
            </div>

            <div class="login-btn" @click="login()">
                立 即 登 录
            </div>
        </div>
    </div>
</template>

<script>
    const particleground = window.particleground;
    export default {
        data() {
            return {
                data: {
                    account: '',
                    password: ''
                }
            };
        },

        mounted() {
            this.$nextTick(() => {
                particleground(this.$refs.pgCanvas, {
                    dotColor: '#5cbdaa',
                    lineColor: '#5cbdaa'
                });
            });
        },

        methods: {
            async login() {
                let response = await this.$http.post('/user/login', this.data);
                if (response.success) {
                    this.$cookie.set('LAYUI_TOKEN', response.data.token);
                    this.$store.commit('updateUserInfo', response.data.user);
                    this.$router.push('/');
                }
            }
        }
    };
</script>

<style scoped>
    .layadmin-user-login {
        position: relative;
        left: 0;
        top: 0;
        min-height: 100vh;
        box-sizing: border-box;
        background: #16a085;
    }

    .layadmin-user-login-main {
        width: 375px;
        margin: 0 auto;
        box-sizing: border-box;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 -15px 30px #0d957a;
        padding: 40px;
    }

    .layadmin-user-title {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: #45bda6;
        text-shadow: 0 0 1px #0e947a;
        margin-bottom: 15px;
    }

    .layadmin-user-title em {
        display: block;
        font-size: 12px;
        margin-top: 8px;
    }

    .layadmin-user-form {
        margin: 5px 0 10px;
        height: 42px;
        overflow: hidden;
        position: relative;
    }

    .layadmin-user-form:before {
        position: absolute;
        left: 2px;
        top: 3px;
        width: 38px;
        line-height: 36px;
        text-align: center;
        color: #fff;
    }

    .layadmin-user-form .login_txtbx {
        font-size: 14px;
        height: 26px;
        line-height: 26px;
        padding: 8px 5%;
        width: 90%;
        text-indent: 2em;
        border: none;
        background: #5cbdaa;
        color: white;
    }

    .layadmin-user-form .login_txtbx::-webkit-input-placeholder {
        color:#f4f4f4;
        line-height:inherit;
    }

    .layadmin-user-form .login_txtbx:-moz-placeholder {
        color:#f4f4f4;
        line-height:inherit;
    }

    .layadmin-user-form .login_txtbx::-moz-placeholder {
        color:#f4f4f4;
        line-height:inherit;
    }

    .layadmin-user-form .login_txtbx:focus{
        background:#55b7a4;
    }

    .login-btn {
        height: 42px;
        line-height: 42px;
        padding: 0 18px;
        background-color: #009688;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        font-size: 14px;
        border: none;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .layadmin-user-login {
            padding-top:60px
        }

        .layadmin-user-login-main {
            width: 300px
        }

        .layadmin-user-login-box {
            padding: 10px
        }
    }

    .site-zfj{
        padding-top: 25px;
        height: 220px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .site-zfj i{
        position: absolute;
        left: 50%;
        top: 25px;
        width: 200px;
        height: 200px;
        margin-left: -100px;
        font-size: 200px;
        color: #c2c2c2;
    }

    @-webkit-keyframes site-zfj {
        0% {opacity: 1;  -webkit-transform: translate3d(0, 0, 0) rotate(0deg) scale(1);}
        10% {opacity: 0.8; -webkit-transform: translate3d(-100px, 0px, 0) rotate(10deg) scale(0.7);}
        35% {opacity: 0.6; -webkit-transform: translate3d(100px, 0px, 0) rotate(30deg) scale(0.4);}
        50% {opacity: 0.4; -webkit-transform: translate3d(0, 0, 0) rotate(360deg) scale(0);}
        80% {opacity: 0.2; -webkit-transform: translate3d(0, 0, 0) rotate(720deg) scale(1);}
        90% {opacity: 0.1; -webkit-transform: translate3d(0, 0, 0) rotate(3600deg) scale(6);}
        100% {opacity: 1; -webkit-transform: translate3d(0, 0, 0) rotate(3600deg) scale(1);}
    }

    @keyframes site-zfj {
        0% {opacity: 1;  transform: translate3d(0, 0, 0) rotate(0deg) scale(1);}
        10% {opacity: 0.8; transform: translate3d(-100px, 0px, 0) rotate(10deg) scale(0.7);}
        35% {opacity: 0.6; transform: translate3d(100px, 0px, 0) rotate(30deg) scale(0.4);}
        50% {opacity: 0.4; transform: translate3d(0, 0, 0) rotate(360deg) scale(0);}
        80% {opacity: 0.2; transform: translate3d(0, 0, 0) rotate(720deg) scale(1);}
        90% {opacity: 0.1; transform: translate3d(0, 0, 0) rotate(3600deg) scale(6);}
        100% {opacity: 1; transform: translate3d(0, 0, 0) rotate(3600deg) scale(1);}
    }

    @-webkit-keyframes site-desc {
        0% { -webkit-transform: scale(1.1);}
        100% {opacity: 1; -webkit-transform: scale(1);}
    }

    @keyframes site-desc {
        0% { transform: scale(1.1);}
        100% {transform: scale(1);}
    }

    .site-zfj-anim i{
        -webkit-animation-name: site-zfj;
        animation-name: site-zfj;
        -webkit-animation-duration: 5s;
        animation-duration: 5s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
    }
</style>

