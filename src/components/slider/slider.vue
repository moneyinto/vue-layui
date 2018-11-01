<template>
    <div class="layui-side layui-side-menu">
        <div class="layui-side-scroll">
            <div class="layui-logo">
                <span>Vue layuiAdmin</span>
            </div>
            <ul class="layui-nav layui-nav-tree">
                <li class="layui-nav-item" v-for="(item, index) in menuList" :key="index" :class="{'layui-this': item.name === $router.history.current.name, 'layui-nav-itemed': menuOpenIndex === index }">
                    <a href="javascript:;" @click="selectMenu(item, index)">
                        <i class="layui-icon layui-icon-home"></i>
                        <cite>{{item.title}}</cite>
                        <span class="layui-nav-more" v-if="item.children && item.children.length > 0"></span>
                    </a>
                    <SliderItem v-if="item.children && item.children.length > 0" :menuList="item.children"></SliderItem>
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
    import SliderItem from './sliderItem.vue';
    export default {
        name: 'Slider',

        data() {
            return {
                menuOpenIndex: null
            };
        },

        props: {
            menuList: {
                type: Array,
                default: () => ([])
            }
        },

        mounted() {
            console.log(this.$router.history.current.name);
        },

        methods: {
            selectMenu(menu, index) {
                if (this.menuOpenIndex === index) {
                    this.menuOpenIndex = null;
                } else {
                    this.menuOpenIndex = index;
                }
            }
        },

        components: {
            SliderItem
        }
    };
</script>
