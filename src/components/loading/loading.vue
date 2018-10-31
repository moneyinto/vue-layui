<template>
    <div class="loading-bar">
        <!-- loading 1 -->
        <div class="spinner" v-if="type == 0">
            <div class="spinner-container container1">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
            </div>
            <div class="spinner-container container2">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
            </div>
            <div class="spinner-container container3">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
            </div>
        </div>

        <!-- loading 2 -->
        <div class="loading-block" v-if="type == 1">
            <i class="loading-gif"></i>
            <p class="loading-content">{{content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loadingBar',
    data() {
        return {
            type: 0,
            content: ''
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
    bottom: 0;
    z-index: 2000;
}

/** loading 1 */
.spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translate(-50%, -50%);
}

.container1 > div, .container2 > div, .container3 > div {
    width: 18px;
    height: 18px;
    background-color: #2d8cf0;
    border-radius: 100%;
    position: absolute;
    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
    animation: bouncedelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.spinner .spinner-container {
    position: absolute;
    width: 100%;
    height: 100%;
}

.container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
}

.container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
}

.circle1 {
    top: 0;
    left: 0;
}

.circle2 {
    top: 0;
    right: 0;
}

.circle3 {
    right: 0;
    bottom: 0;
}

.circle4 {
    left: 0;
    bottom: 0;
}

.container2 .circle1 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
}

.container3 .circle1 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}

.container1 .circle2 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
}

.container2 .circle2 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
}

.container3 .circle2 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
}

.container1 .circle3 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
}

.container2 .circle3 {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
}

.container3 .circle3 {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
}

.container1 .circle4 {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
}

.container2 .circle4 {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
}

.container3 .circle4 {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
}

@-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
    0%, 80%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    } 40% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
}

/** loading 2 */
.loading-block {
    position: fixed;
    z-index: 2000;
    width: 7.6em;
    min-height: 7.6em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(17, 17, 17, 0.7);
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
}

.loading-gif {
    margin: 25px 0 0;
    width: 38px;
    height: 38px;
    display: inline-block;
    vertical-align: middle;
    -webkit-animation: weuiLoading 1s steps(12, end) infinite;
    animation: weuiLoading 1s steps(12, end) infinite;
    background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
    background-size: 100%;
}

@-webkit-keyframes weuiLoading {
    0% {
        transform: rotate3d(0, 0, 1, 0deg);
    }

    100% {
        transform: rotate3d(0, 0, 1, 360deg);
    }
}

@keyframes weuiLoading {
    0% {
        transform: rotate3d(0, 0, 1, 0deg);
    }

    100% {
        transform: rotate3d(0, 0, 1, 360deg);
    }
}

.loading-content {

}
</style>
