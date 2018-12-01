<template>
    <div :id="`colorPicker_${_uid}`"></div>
</template>

<script>
    export default {
        name: 'ColorPicker',
        props: {
            options: {
                type: Object,
                default: () => ({})
            }
        },
        mounted() {
            const colorpicker = this.$layui.colorpicker;
            colorpicker.render({
                elem: `#colorPicker_${this._uid}`,
                change: (color) => {
                    this.$emit('change', color);
                },
                done: (color) => {
                    this.$emit('done', color);
                },
                ...this.options
            });
        }
    };
</script>
