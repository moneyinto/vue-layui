<template>
    <dl class="layui-nav-child">
        <dd v-for="(item, index) in menuList" :key="index" :class="{'layui-nav-itemed': menuOpenIndex === index}">
            <a href="javascript:;" :class="{'layui-this': item.name === $router.history.current.name}" @click="selectMenu(item, index)">
                {{item.title}}
                <span class="layui-nav-more" v-if="item.children && item.children.length > 0"></span>
            </a>
            <SliderItem v-if="item.children && item.children.length > 0" :menuList="item.children"></SliderItem>
        </dd>
    </dl>
</template>

<script>
    import SliderItem from './sliderItem.vue';
    export default {
        name: 'SliderItem',

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
