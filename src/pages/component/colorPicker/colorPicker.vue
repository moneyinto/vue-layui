<template>
    <div>
        <Card title="常规使用">
            <ColorPicker @done="selectColor"></ColorPicker>
        </Card>

        <Card title="RGB / RGBA 色值">
            <ColorPicker :options="options1"></ColorPicker>

            <ColorPicker :options="options2" style="margin-left: 30px;"></ColorPicker>
        </Card>

        <Card title="预定义颜色项">
            <ColorPicker :options="options3"></ColorPicker>

            <ColorPicker :options="options4" style="margin-left: 30px;"></ColorPicker>
        </Card>

        <Card title="设定颜色框尺寸">
            <ColorPicker :options="options5"></ColorPicker>

            <ColorPicker :options="options6" style="margin-left: 30px;"></ColorPicker>

            <ColorPicker :options="options7" style="margin-left: 30px;"></ColorPicker>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options1: {
                    color: 'rgb(68,66,66)',
                    format: 'rgb'
                },

                options2: {
                    color: 'rgba(68,66,66,0.5)',
                    format: 'rgb',
                    alpha: true
                },

                options3: {
                    color: '#c71585',
                    predefine: true
                },

                options4: {
                    color: '#9d8a0e',
                    predefine: true,
                    colors: ['#ff8c00', '#00ced1', '#9d8a0e']
                },

                options5: {
                    size: 'lg'
                },

                options6: {
                    size: 'sm'
                },

                options7: {
                    size: 'xs'
                }
            };
        },
        methods: {
            selectColor(color) {
                this.$layer.msg(color);
            }
        }
    };
</script>
