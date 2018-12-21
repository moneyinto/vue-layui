<template>
    <div class="layui-side layui-side-menu">
        <div class="layui-side-scroll">
            <div class="layui-logo">
                <span>Vue layuiAdmin</span>
            </div>
            <ul class="layui-nav layui-nav-tree">
                <li
                    class="layui-nav-item"
                    v-for="(item, index) in menuList"
                    :key="index"
                    :class="{'layui-this': item.name === currentPageName, 'layui-nav-itemed': menuOpenIndex === index && item.children && item.children.length > 0 }"
                    v-if="isAccess(item.name)"
                >
                    <a href="javascript:;" @click="selectMenu(item, index)">
                        <i class="layui-icon" :class="item.icon"></i>
                        <cite>{{item.title}}</cite>
                        <span
                            class="layui-nav-more"
                            v-if="item.children && item.children.length > 0"
                        ></span>
                    </a>
                    <Menu-Item
                        v-if="item.children && item.children.length > 0"
                        :menuList="item.children"
                        :access="access"
                    ></Menu-Item>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
    name: 'Menu',

    data() {
        return {
            menuOpenIndex: null,
            currentPageName: this.$route.name
        };
    },

    props: {
        menuList: {
            type: Array,
            default: () => []
        },

        access: {
            type: Array,
            default: () => []
        }
    },

    created() {
        for (let [index, item] of this.menuList.entries()) {
            if (this.checkIsExist(item)) {
                this.menuOpenIndex = index;
            }
        }
    },

    watch: {
        $route(to) {
            this.currentPageName = to.name;
        }
    },

    methods: {
        selectMenu(menu, index) {
            if (this.menuOpenIndex === index) {
                this.menuOpenIndex = null;
            } else {
                if (!menu.children || menu.children.length === 0) {
                    this.$router.push({
                        name: menu.name
                    });
                    this.$store.state.isCloseSlider = true;
                } else {
                    this.menuOpenIndex = index;
                }
            }
            if (!this.$store.state.isSMWidth) {
                this.$store.state.isCloseSlider = true;
            }
        },

        checkIsExist(data) {
            let isExist = false;
            if (data.name === this.$route.name) isExist = true;
            if (data.children && data.children.length > 0) {
                for (let item of data.children) {
                    if (this.checkIsExist(item)) isExist = true;
                }
            }
            return isExist;
        },

        isAccess(name) {
            return this.access.findIndex(i => { return i === name; }) > -1 || name === "home";
        }
    },

    components: {
        MenuItem
    }
};
</script>
