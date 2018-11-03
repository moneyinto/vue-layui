<template>
    <div class="layui-card layadmin-header" v-if="$route.name !== 'home'">
        <div class="layui-breadcrumb" style="visibility: visible;">
            <a href="javascript:;" @click="$router.push('/')">主页</a>
            <span v-for="(item, index) in tabs" :key="index">
                <span lay-separator>/</span>
                  <a><cite>{{item}}</cite></a>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tabs',

        data() {
            return {
                menuList: [],
                tabs: []
            };
        },

        mounted() {
            this.dealMenuList(this.$store.state.menuList);

            this.dealTabs();
        },

        watch: {
            '$route' (to) {
                this.dealTabs();
            }
        },

        methods: {
            dealMenuList(list) {
                for (let item of list) {
                    this.menuList.push({
                        name: item.name,
                        title: item.title
                    });

                    if (item.children && item.children.length > 0) {
                        this.dealMenuList(item.children);
                    }
                }
            },

            dealTabs() {
                this.tabs = [];
                for (let item of this.$route.matched) {
                    if (item.name !== 'main' && item.name !== 'home') {
                        let title = this.menuList.find(obj => { return obj.name === item.name; }).title;
                        this.tabs.push(title);
                    }
                }
            }
        }
    };
</script>
