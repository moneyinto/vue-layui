<template>
    <div class="tree-header">
        <div class="tree-body">
            <span class="icon" @click="handleExpand">
                <i v-if="data.children" class="layui-icon" :class="data.expand ? 'layui-icon-down' : 'layui-icon-right'"></i>
            </span>
            <label class="layui-checkbox" v-if="showCheckbox">
                <input type="checkbox" v-model="data.checked" @change="handleClick(data)">
                <div class="layui-unselect layui-form-checkbox" :class="data.checked ? 'layui-form-checked': ''" lay-skin="primary">
                    <i class="layui-icon layui-icon-ok"></i>
                </div>
            </label>
            <span>{{ data.title }}</span>
            <Tree-node
                v-if="data.expand"
                v-for="(item, i) in data.children"
                :key="i"
                :data="item"
                :showCheckbox="showCheckbox"
                @checkEvent="checkEvent"
                >
            </Tree-node>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TreeNode',
        props: {
            data: {
                type: Object,
                default: () => ({})
            },

            showCheckbox: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            handleExpand() {
                this.data.expand = !this.data.expand;
            },

            handleClick(obj) {
                if (obj.checked) {
                    this.$emit('checkEvent', true);
                } else {
                    obj.children && obj.children.forEach(item => {
                        item.checked = false;
                    });
                }
            },

            checkEvent(checked) {
                if (checked) {
                    this.data.checked = true;
                    this.$emit('checkEvent', true);
                }
            }
        }
    };
</script>

<style scoped>
    .tree-body .tree-header {
        padding: 0 0 0 18px;
    }

    .tree-body {
        margin: 8px 0;
    }

    .icon {
        cursor: pointer;
        display: inline-block;
        position: relative;
        top: 1px;
        margin-right: 5px;
        width: 13px;
    }

    .layui-icon {
        font-size: 13px;
    }

    .layui-checkbox {
        display: inline-block;
    }

    .layui-checkbox input {
        display: none;
    }
</style>
