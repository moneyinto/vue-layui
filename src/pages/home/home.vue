<template>
    <div class="layui-row layui-col-space15">
        <div class="layui-col-sm6 layui-col-md3">
            <div class="layui-card">
                <div class="layui-card-header">
                    访问量
                    <span class="layui-badge layui-bg-blue layuiadmin-badge">周</span>
                </div>
                <div class="layui-card-body layuiadmin-card-list">
                    <p class="layuiadmin-big-font">9,999,666</p>
                    <p>
                        总计访问量
                        <span class="layuiadmin-span-color">88万 <i class="layui-icon"></i></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
            <div class="layui-card">
                <div class="layui-card-header">
                    下载
                    <span class="layui-badge layui-bg-cyan layuiadmin-badge">月</span>
                </div>
                <div class="layui-card-body layuiadmin-card-list">
                    <p class="layuiadmin-big-font">33,555</p>
                    <p>
                        新下载
                        <span class="layuiadmin-span-color">10% <i class="layui-icon"></i></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
            <div class="layui-card">
                <div class="layui-card-header">
                    收入
                    <span class="layui-badge layui-bg-green layuiadmin-badge">年</span>
                </div>
                <div class="layui-card-body layuiadmin-card-list">
                    <p class="layuiadmin-big-font">999,666</p>
                    <p>
                        总收入
                        <span class="layuiadmin-span-color">*** <i class="layui-icon"></i></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="layui-col-sm6 layui-col-md3">
            <div class="layui-card">
                <div class="layui-card-header">
                    活跃用户
                    <span class="layui-badge layui-bg-orange layuiadmin-badge">月</span>
                </div>
                <div class="layui-card-body layuiadmin-card-list">
                    <p class="layuiadmin-big-font">66,666</p>
                    <p>
                        最近一个月
                        <span class="layuiadmin-span-color">15% <i class="layui-icon"></i></span>
                    </p>
                </div>
            </div>
        </div>

        <div class="layui-col-sm12">
            <Card>
                <div class="layui-elem-quote" style="margin-bottom: 0;">
                    <p class="layui-text">图表使用 <a href="https://v-charts.js.org">v-charts</a> 和 <a href="http://echarts.baidu.com/index.html">echarts</a></p>
                    <p>由于v-charts初始化echarts时没有等待dom加载完成，在侧边栏动画时开始初始化echarts导致图标溢出或不能撑开，安装完v-charts后需要找到node-moudles->v-charts->lib->index.js，将其中的mounted中的init放入nextTick中。</p>
                </div>
            </Card>
        </div>

        <div class="layui-col-sm6">
            <Card title="折线图">
                <ve-line :data="chartData"></ve-line>
            </Card>
        </div>

        <div class="layui-col-sm6">
            <Card title="柱状图">
                <ve-histogram :data="chartData"></ve-histogram>
            </Card>
        </div>

        <div class="layui-col-sm6">
            <Card title="条形图">
                <ve-bar :data="chartData"></ve-bar>
            </Card>
        </div>

        <div class="layui-col-sm6">
            <Card title="饼图">
                <ve-pie :data="chartData"></ve-pie>
            </Card>
        </div>

        <div class="layui-col-sm6">
            <Card title="环图">
                <ve-ring :data="chartData"></ve-ring>
            </Card>
        </div>

        <div class="layui-col-sm6">
            <Card title="漏斗图">
                <ve-funnel :data="chartData"></ve-funnel>
            </Card>
        </div>

        <div class="layui-col-sm6">
            <Card title="雷达图">
                <ve-radar :data="chartData"></ve-radar>
            </Card>
        </div>

        <div class="layui-col-sm6">
            <Card title="地图">
                <div style="max-width: 455px;margin: auto">
                    <ve-map :data="chartData1" :extend="chartExtend" :theme="theme"></ve-map>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                    { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            },

            chartData1: {
                columns: ['name', '人数'],
                rows: [{
                    name: '西藏',
                    '人数': 60
                }, {
                    name: '青海',
                    '人数': 167
                }, {
                    name: '宁夏',
                    '人数': 210
                }, {
                    name: '海南',
                    '人数': 252
                }, {
                    name: '甘肃',
                    '人数': 502
                }, {
                    name: '贵州',
                    '人数': 570
                }, {
                    name: '新疆',
                    '人数': 661
                }, {
                    name: '云南',
                    '人数': 8890
                }, {
                    name: '重庆',
                    '人数': 10010
                }, {
                    name: '吉林',
                    '人数': 5056
                }, {
                    name: '山西',
                    '人数': 2123
                }, {
                    name: '天津',
                    '人数': 9130
                }, {
                    name: '江西',
                    '人数': 10170
                }, {
                    name: '广西',
                    '人数': 6172
                }, {
                    name: '陕西',
                    '人数': 9251
                }, {
                    name: '黑龙江',
                    '人数': 5125
                }, {
                    name: '内蒙古',
                    '人数': 1435
                }, {
                    name: '安徽',
                    '人数': 9530
                }, {
                    name: '北京',
                    '人数': 51919
                }, {
                    name: '福建',
                    '人数': 3756
                }, {
                    name: '上海',
                    '人数': 59190
                }, {
                    name: '湖北',
                    '人数': 37109
                }, {
                    name: '湖南',
                    '人数': 8966
                }, {
                    name: '四川',
                    '人数': 31020
                }, {
                    name: '辽宁',
                    '人数': 7222
                }, {
                    name: '河北',
                    '人数': 3451
                }, {
                    name: '河南',
                    '人数': 9693
                }, {
                    name: '浙江',
                    '人数': 62310
                }, {
                    name: '山东',
                    '人数': 39231
                }, {
                    name: '江苏',
                    '人数': 35911
                }, {
                    name: '广东',
                    '人数': 55891
                }]
            },

            theme: {
                dataRange: {
                    itemWidth: 15,
                    color: ['#009688', '#e0ffff']
                }
            },

            chartExtend: {
                tooltip: {
                    trigger: 'item'
                },

                dataRange: {
                    orient: 'horizontal',
                    min: 0,
                    max: 6e4,
                    text: ['高', '低'],
                    splitNumber: 0
                },

                legend: {
                    show: false
                },

                series: [{
                    name: '全国的 layui 用户分布',
                    type: 'map',
                    mapType: 'china',
                    selectedMode: 'multiple',
                    itemStyle: {
                        normal: {
                            label: {
                                show: !0
                            }
                        },
                        emphasis: {
                            label: {
                                show: !0
                            }
                        }
                    }
                }]
            }
        };
    },

    mounted() {
        // this.$http.get('getRoleList');
    },

    methods: {

    }
};
</script>

<style scoped>
.content {
    background-color: #f8f8f8;
}

.info {
    padding: 30px;
    color: #888;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
}

.category {
    padding: 15px;
    margin: 10px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 2px;
}
</style>
