export default {
    data() {
        return {
            id: null
        };
    },
    methods: {
        toolbarEvent(obj) {
            if (obj.event === 'add') {
                this.id = null;
                this.$refs.addModal.type = 'add';
                this.$refs.addModal.isShow = true;
            } else if (obj.event === 'del') {
                let checkStatus = this.$layui.table.checkStatus(obj.config.id);
                let ids = checkStatus.data.map(item => { return item.id; });
                this.$layer.confirm('确定要删除吗？', (index) => {
                    this.$layer.close(index);
                    this.$http.post(this.api.delete, { ids }).then(res => {
                        if (res.success) {
                            this.init();
                        }
                    });
                });
            }
        },

        barEvent(obj) {
            let data = obj.data;
            if (obj.event === 'del') {
                this.$layer.confirm('确定要删除吗？', (index) => {
                    this.$http.post(this.api.delete, { ids: [data.id] }).then(res => {
                        if (res.success) {
                            this.init();
                            this.$layer.close(index);
                        }
                    });
                });
            } else if (obj.event === 'edit') {
                this.$refs.addModal.type = 'edit';
                this.id = data.id;
                this.$refs.addModal.isShow = true;
                this.$refs.addModal.render(data);
            }
        }
    }
};
