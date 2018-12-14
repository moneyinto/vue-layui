<template>
  <script :id="randomId" name="content" type="text/plain"></script>
</template>

<script>
export default {
    name: 'editor',
    props: {
        ueditorPath: {
            // UEditor 代码的路径
            type: String,
            default: '/static/lib/neditor/'
        },
        ueditorConfig: {
            // UEditor 配置项
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    data() {
        return {
            // 为了避免麻烦，每个编辑器实例都用组件的id
            randomId: `editor_${this._uid}`,
            instance: null
        };
    },
    mounted() {
        this.initEditor();
    },
    beforeDestroy() {
        // 组件销毁的时候，要销毁 UEditor 实例
        if (this.instance !== null && this.instance.destroy) {
            this.instance.destroy();
        }
    },
    methods: {
        initEditor() {
            if (this.instance === null) {
                // Vue 异步执行 DOM 更新，这样一来代码执行到这里的时候可能 template 里面的 script 标签还没真正创建
                // 所以，我们只能在 nextTick 里面初始化 UEditor
                this.$nextTick(() => {
                    this.instance = window.UE.getEditor(
                        this.randomId,
                        this.ueditorConfig
                    );
                    // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
                    this.instance.addListener('ready', () => {
                        this.$emit('ready', this.instance);
                    });
                });
            }
        },
        switchLang(lang) {
            let opt = {
                lang: lang
            };

            console.log(lang, window.UE._bak_I18N);

            window.UE.utils.extend(opt, this.ueditorConfig, true);

            window.UE.delEditor(this.randomId);

            // 清空语言
            if (!window.UE._bak_I18N) {
                window.UE._bak_I18N = window.UE.I18N;
            }

            window.UE.I18N = {};
            window.UE.I18N[opt.lang] = window.UE._bak_I18N[ opt.lang ];

            window.UE.getEditor(this.randomId, opt);
        }
    }
};
</script>
