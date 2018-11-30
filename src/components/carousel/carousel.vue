<template>
    <div class="layui-carousel" ref="carousel" :lay-filter="`carousel_${_uid}`">
        <div carousel-item="">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Carousel',
        props: {
            width: {
                type: String,
                default: '100%'
            },

            height: {
                type: String,
                default: 'auto'
            },

            full: {
                type: Boolean,
                default: false
            },

            anim: {
                type: String,
                default: 'default'
            },

            autoPlay: {
                type: Boolean,
                default: true
            },

            interval: {
                type: Number,
                default: 3000
            },

            index: {
                type: Number,
                default: 0
            },

            arrow: {
                type: String,
                default: 'always'
            },

            indicator: {
                type: String,
                default: 'inside'
            }
        },

        data() {
            return {
                inst: null
            };
        },

        watch: {
            width() {
                this.inst.reload({
                    width: this.width
                });
            },

            height() {
                this.inst.reload({
                    height: this.height
                });
            },

            full() {
                this.inst.reload({
                    full: this.full
                });
            },

            anim() {
                this.inst.reload({
                    anim: this.anim
                });
            },

            autoPlay() {
                this.inst.reload({
                    autoplay: this.autoPlay
                });
            },

            interval() {
                this.inst.reload({
                    interval: this.interval
                });
            },

            index() {
                this.inst.reload({
                    index: this.index
                });
            },

            arrow() {
                this.inst.reload({
                    arrow: this.arrow
                });
            },

            indicator() {
                this.inst.reload({
                    indicator: this.indicator
                });
            }
        },

        mounted() {
            const carousel = this.$layui.carousel;
            let option = {
                elem: this.$refs.carousel,
                width: this.width,
                height: this.height,
                full: this.full,
                anim: this.anim,
                autoplay: this.autoPlay,
                interval: this.interval,
                index: this.index,
                arrow: this.arrow,
                indicator: this.indicator
            };

            this.$nextTick(() => {
                this.inst = carousel.render(option);

                carousel.on(`change(carousel_${this._uid})`, (obj) => {
                    this.$emit('change', obj);
                });
            });
        }
    };
</script>
