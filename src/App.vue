<template>
    <div id="app" :class="'theme-' + $store.state.theme.name" class="layui-layout-body">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>

