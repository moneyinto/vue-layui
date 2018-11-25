<template>
    <div :id="`img_view_${_uid}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ImgView',
        props: {
            anim: {
                type: Number, // 0 ~ 6
                default: 5
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.$layer.photos({
                    photos: `#img_view_${this._uid}`,
                    anim: this.anim,
                    tab: (pic, layero) => {
                        this.$emit('tab', pic, layero);
                    }
                });
            });
        }
    };
</script>
