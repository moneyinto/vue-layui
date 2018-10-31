<template>
    <div class="layui-header">
        <ul class="layui-nav layui-layout-left">
            <li class="layui-nav-item layadmin-flexible">
                <a href="javascript:;" title="侧边伸缩" @click="$store.commit('toggleSlider')">
                    <i class="layui-icon layui-icon-shrink-right" id="LAY_app_flexible"></i>
                </a>
                <span class="layui-nav-bar"></span>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;" title="刷新">
                    <i class="layui-icon layui-icon-refresh-3"></i>
                </a>
                <span class="layui-nav-bar"></span>
            </li>
            <li class="layui-nav-item layui-hide-xs">
                <input type="text" placeholder="搜索..." autocomplete="off" class="layui-input layui-input-search" />
                <span class="layui-nav-bar"></span>
            </li>
        </ul>
        <ul class="layui-nav layui-layout-right">
            <li class="layui-nav-item">
                <a lay-href="app/message/">
                    <i class="layui-icon layui-icon-notice"></i>
                    <span class="layui-badge-dot"></span>
                </a>
                <span class="layui-nav-bar"></span>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;" @click="openDrawer()">
                    <i class="layui-icon layui-icon-theme"></i>
                </a>
                <span class="layui-nav-bar"></span>
            </li>
            <li class="layui-nav-item layui-hide-xs">
                <a href="javascript:;" @click="$store.commit('toggleFullScreen')">
                    <i class="layui-icon" :class="$store.state.isFullScreen ? 'layui-icon-screen-restore' : 'layui-icon-screen-full'"></i>
                </a>
                <span class="layui-nav-bar"></span>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;">
                    <cite>贤心</cite>
                    <span class="layui-nav-more"></span>
                </a>
                <span class="layui-nav-bar"></span>
                <dl class="layui-nav-child layui-anim layui-anim-upbit">
                    <dd>
                        <a lay-href="set/user/info">基本资料</a>
                    </dd>
                    <dd>
                        <a lay-href="set/user/password">修改密码</a>
                    </dd>
                    <hr>
                    <dd layadmin-event="logout" style="text-align: center;">
                        <a>退出</a>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
</template>

<script>
import Bus from '@/bus';
export default {
    name: 'Header',

    methods: {
        openDrawer() {
            Bus.$emit('openDrawer');
        }
    }
};
</script>

<style scoped>
    .layui-nav-item:hover .layui-nav-bar {
        width: 100% !important;
    }

    .layui-nav-item:hover .layui-nav-more {
        border-color: transparent transparent #666;
        margin-top: -9px;
    }

    .layui-nav-item:hover .layui-anim-upbit {
        display: block !important;
    }

    .layui-layout-admin .layui-header .layui-nav-child {
        top: 50px;
    }

    .layui-layout-right {
        padding-right: 10px;
    }
</style>

