<template>
    <div ref="slider"></div>
</template>

<script>
    export default {
        name: 'Slider',
        props: {
            options: {
                type: Object,
                default: () => ({})
            }
        },
        mounted() {
            const slider = this.$layui.slider;
            this.$nextTick(() => {
                slider.render({
                    elem: this.$refs.slider,
                    ...this.options,
                    change: (vals) => {
                        this.$emit('change', vals);
                    }
                });
            });
        }
    };
</script>
