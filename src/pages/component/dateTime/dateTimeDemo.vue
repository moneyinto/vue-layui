<template>
    <div>
        <Card title="常规用法">
            <div class="layui-form" wid100>
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">中文版</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">国际版</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{lang: 'en'}"></DateTime>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <Card title="五大选择器">
            <div class="layui-form" wid100>
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">年选择器</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy" :options="{type: 'year'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">年月选择器</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM" :options="{type: 'month'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">时间选择器</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="HH:mm:ss" :options="{type: 'time'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">日期选择器</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{type: 'date'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">日期时间选择器</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd HH:mm:ss" :options="{type: 'datetime'}"></DateTime>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <Card title="范围选择">
            <div class="layui-form" wid100>
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">日期范围</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy" :options="{range: true}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">年范围</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM" :options="{type: 'year', range: true}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">年月范围</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM" :options="{type: 'month', range: true}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">时间范围</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="HH:mm:ss" :options="{type: 'time', range: true}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">日期时间范围</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd HH:mm:ss" :options="{type: 'datetime', range: true}"></DateTime>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <Card title="自定义格式">
            <div class="layui-form" wid100>
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">请选择日期</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy年MM月dd日" :options="{format: 'yyyy年MM月dd日'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">请选择日期</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="dd/MM/yyyy" :options="{format: 'dd/MM/yyyy'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">请选择月份</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyyMMdd" :options="{format: 'yyyyMMdd'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">请选择时间</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="H点m分" :options="{type: 'time', format: 'H点m分'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">请选择范围</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="~" :options="{range: '~', format: 'yyyy-MM-dd'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">请选择范围</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="开始 到 结束" :options="{type: 'datetime', range: '到', format: 'yyyy年M月d日H时m分s秒'}"></DateTime>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <Card title="公历节日和自定义重要日子">
            <div class="layui-form" wid100>
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">开启公历节日</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{calendar: true}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">自定义重要日</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{mark: {'0-10-14': '生日','0-12-31': '跨年','0-0-10': '工资','0-0-15': '月中','2017-8-15': '','2099-10-14': '呵呵'}}"></DateTime>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <Card title="控制可选的日期与时间">
            <div class="layui-form" wid100>
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">限定可选日期</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{min: '2016-10-14', max: '2080-10-14'}" hint="日期可选值设定在 <br> 2016-10-14 到 2080-10-14"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">前后若干天可选</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{min: -7, max: 7}"  hint="只可以选前后7天"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">限定可选时间</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="HH:mm:ss" :options="{type: 'time', min: '09:30:00', max: '17:30:00', btns: ['clear', 'confirm']}"></DateTime>
                        </div>
                        <div class="layui-form-mid layui-word-aux">
                            这里以控制在9:30-17:30为例
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <Card title="其它功能示例">
            <div class="layui-form" wid100>
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">初始赋值</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :value="myDateTime"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">选中后的回调</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" @laydate-done="dateDone"></DateTime>
                        </div>
                    </div>

                    <div class="layui-inline">
                        <label class="layui-form-label">不出现底部栏</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{showBottom: false}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">只出现确定按钮</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{btns: ['confirm']}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label" id="testDateClick">点我触发</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{eventElem: '#testDateClick', trigger: 'click'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label" id="testDateDoubleClick">双击我触发</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{eventElem: '#testDateDoubleClick', trigger: 'dblclick'}"></DateTime>
                        </div>
                    </div>

                    <div class="layui-inline">
                        <label class="layui-form-label">日期只读</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{trigger: 'click'}" readonly=""></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">非input元素</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{trigger: 'click'}" :isInput="false">
                                <div style="height: 38px; line-height: 38px; cursor: pointer; border-bottom: 1px solid #e2e2e2;"></div>
                            </DateTime>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <Card title="其他主题">
            <div class="layui-form" wid100>
                <div class="layui-form-item">
                    <div class="layui-inline">
                        <label class="layui-form-label">墨绿主题</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{theme: 'molv'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">自定义颜色主题</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{theme: '#393D49'}"></DateTime>
                        </div>
                    </div>
                    <div class="layui-inline">
                        <label class="layui-form-label">格子主题</label>
                        <div class="layui-input-inline">
                            <DateTime placeholder="yyyy-MM-dd" :options="{theme: 'grid'}"></DateTime>
                        </div>
                    </div>
                </div>
            </div>
        </Card>

        <Card title="直接嵌套显示">
            <div class="site-demo-laydate">
                <div class="layui-inline">
                    <DateTime placeholder="yyyy-MM-dd" :options="{position: 'static'}" :isInput="false">
                        <div></div>
                    </DateTime>
                </div>
                <div class="layui-inline">
                    <DateTime placeholder="yyyy-MM-dd" :options="{position: 'static', lang: 'en'}" :isInput="false">
                        <div></div>
                    </DateTime>
                </div>
                <div class="layui-inline">
                    <DateTime placeholder="yyyy-MM-dd" :options="{position: 'static', type: 'month'}" :isInput="false">
                        <div></div>
                    </DateTime>
                </div>
                <div class="layui-inline">
                    <DateTime placeholder="yyyy-MM-dd" :options="{position: 'static', type: 'time'}" :isInput="false">
                        <div></div>
                    </DateTime>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                myDateTime: '2018-12-11'
            };
        },

        methods: {
            dateDone(value, date) {
                this.$layer.alert('你选择的日期是：' + value + '<br>获得的对象是' + JSON.stringify(date));
            }
        }
    };
</script>

<style scoped>
    .layui-form-item:last-child {
        margin-bottom: 0;
    }

    .site-demo-laydate .layui-inline {
        margin: 0 20px 20px 0;
    }
</style>

