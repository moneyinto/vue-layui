<template>
    <div>
        <Tree-node
            v-for="(item, i) in stateTree"
            :key="i"
            :data="item"
            :showCheckbox="showCheckbox">
        </Tree-node>
    </div>
</template>

<script>
import TreeNode from './node.vue';
export default {
    name: 'Tree',
    components: { TreeNode },
    props: {
        data: {
            type: Array,
            default: () => []
        },

        showCheckbox: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            stateTree: this.data,
            flatState: []
        };
    },

    watch: {
        data: {
            deep: true,
            handler() {
                this.stateTree = this.data;
            }
        }
    },

    methods: {
        compileFlatState () {
            return this.flattenChildren(this.stateTree);
        },

        flattenChildren(children) {
            let result = [];
            for (let item of children) {
                let obj = {...item, children: null};
                if (obj.checked) {
                    delete obj.children;
                    delete obj.expand;
                    delete obj.checked;
                    result.push(obj);
                }
                if (item.children) result = result.concat(this.flattenChildren(item.children));
            }
            return result;
        },

        getCheckedNodes() {
            let flatState = this.compileFlatState();
            return flatState;
        }
    }
};
</script>
