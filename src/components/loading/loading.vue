<template>
    <div class="loading-bar" v-show="show">
        <div class="loading-bar-inner" :style="styles"></div>
    </div>
</template>

<script>
    export default {
        name: 'loadingBar',

        computed: {
            styles() {
                let style = {
                    width: `${this.percent}%`,
                    backgroundColor: `${this.color}px`
                };

                return style;
            }
        },

        data() {
            return {
                percent: 0,
                show: false
            };
        }
    };
</script>

<style scoped>
.loading-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    height: 2px;
}

.loading-bar-inner {
    height: 2px;
    background-color: #009688;
    transition: width .2s linear;
}
</style>
