<template>
    <div class="layui-side layui-side-menu">
        <div class="layui-side-scroll">
            <div class="layui-logo">
                <span>Vue layuiAdmin</span>
            </div>
            <ul class="layui-nav layui-nav-tree" lay-shrink="all" id="LAY-system-side-menu" lay-filter="layadmin-system-side-menu">
                <li data-name="" data-jump="" class="layui-nav-item layui-nav-itemed">
                    <a href="javascript:;" lay-tips="主页" lay-direction="2">
                        <i class="layui-icon layui-icon-home"></i>
                        <cite>主页</cite>
                        <span class="layui-nav-more"></span>
                    </a>
                    <dl class="layui-nav-child">
                        <dd data-name="" data-jump="/" class="">
                            <a href="javascript:;" lay-href="/" class="layui-this">控制台</a>
                        </dd>
                        <dd data-name="homepage1" data-jump="home/homepage1">
                            <a href="javascript:;" lay-href="home/homepage1">主页一</a>
                        </dd>
                        <dd data-name="homepage2" data-jump="home/homepage2">
                            <a href="javascript:;" lay-href="home/homepage2">主页二</a>
                        </dd>
                    </dl>
                </li>
                <li data-name="component" data-jump="" class="layui-nav-item">
                    <a href="javascript:;" lay-tips="组件" lay-direction="2">
                        <i class="layui-icon layui-icon-component"></i>
                        <cite>组件</cite>
                        <span class="layui-nav-more"></span>
                    </a>
                    <dl class="layui-nav-child">
                        <dd data-name="grid" data-jump="">
                            <a href="javascript:;">栅格<span class="layui-nav-more"></span></a>
                            <dl class="layui-nav-child">
                                <dd data-name="list" data-jump="">
                                    <a href="javascript:;" lay-href="component/grid/list">等比例列表排列</a>
                                </dd>
                                <dd data-name="mobile" data-jump="">
                                    <a href="javascript:;" lay-href="component/grid/mobile">按移动端排列</a>
                                </dd>
                                <dd data-name="mobile-pc" data-jump="">
                                    <a href="javascript:;" lay-href="component/grid/mobile-pc">移动桌面端组合</a>
                                </dd>
                                <dd data-name="all" data-jump="">
                                    <a href="javascript:;" lay-href="component/grid/all">全端复杂组合</a>
                                </dd>
                                <dd data-name="stack" data-jump="">
                                    <a href="javascript:;" lay-href="component/grid/stack">低于桌面堆叠排列</a>
                                </dd>
                                <dd data-name="speed-dial" data-jump="">
                                    <a href="javascript:;" lay-href="component/grid/speed-dial">九宫格</a>
                                </dd>
                            </dl>
                        </dd>
                        <dd data-name="button" data-jump="">
                            <a href="javascript:;" lay-href="component/button/">按钮</a>
                        </dd>
                    </dl>
                </li>
                <li data-name="get" data-jump="system/get" class="layui-nav-item">
                    <a href="javascript:;" lay-href="system/get" lay-tips="授权" lay-direction="2">
                        <i class="layui-icon layui-icon-auz"></i>
                        <cite>授权</cite>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Slider'
    };
</script>

<style scoped>
</style>
