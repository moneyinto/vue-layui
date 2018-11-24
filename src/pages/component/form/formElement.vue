<template>
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md6">
            <Card title="输入框" icon="layui-icon-fonts-code" @icon-click="showDoc('输入框', 'input')">
                <div class="layui-row layui-col-space10">
                    <div class="layui-col-md12">
                        <input type="text" name="title" placeholder="请输入标题" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-col-md6">
                        <input type="text" name="title" placeholder="用户名" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-col-md6">
                        <input type="password" name="title" placeholder="密码" autocomplete="off" class="layui-input">
                    </div>
                </div>
            </Card>

            <Card title="下拉选择框">
                <div class="layui-row layui-col-space10">
                    <div class="layui-col-md6">
                        <Select :source="list1" placeholder="请选择一个城市" @select-change="selectChange"></Select>
                    </div>
                    <div class="layui-col-md6">
                        <Select :source="list2" v-model="selectValue"></Select>
                    </div>
                </div>
                <div class="layui-row layui-col-space10">
                    <div class="layui-col-md6">
                        <Select :group="true" :source="list3"></Select>
                    </div>
                    <div class="layui-col-md6">
                        <Select :source="list1" :search="true" placeholder="带搜索的选择框"></Select>
                    </div>
                </div>
            </Card>

            <Card title="复选框">
                <div class="layui-form-item">
                    <CheckBox title="写作" v-model="checkBoxChecked"></CheckBox>
                    <CheckBox title="阅读"></CheckBox>
                    <CheckBox title="禁用" :disabled="true"></CheckBox>
                </div>

                <div class="layui-form-item">
                    <CheckBox title="写作" v-model="checkBoxChecked" skin="primary"></CheckBox>
                    <CheckBox title="阅读" skin="primary"></CheckBox>
                    <CheckBox title="禁用" :disabled="true" skin="primary"></CheckBox>
                </div>
            </Card>

            <Card title="开关">
                <div class="layui-form-item">
                    <CheckBox skin="switch"></CheckBox>
                    <CheckBox skin="switch" v-model="checkBoxChecked" text="ON|OFF"></CheckBox>
                    <CheckBox skin="switch" text="开启|关闭"></CheckBox>
                    <CheckBox :disabled="true" skin="switch"></CheckBox>
                </div>
            </Card>

            <Card title="单选框">
                <div class="layui-form-item">
                    <RadioList :source="radioList" v-model="radioValue" @radio-change="radioChange"></RadioList>
                </div>
            </Card>
        </div>

        <div class="layui-col-md6">
            <Card title="文本域">
                <textarea placeholder="请输入内容" class="layui-textarea" name="desc"></textarea>
            </Card>

            <Card title="响应式组合" icon="layui-icon-fonts-code" @icon-click="showDoc('响应式组合代码', 'form')">
                <div class="layui-elem-quote">
                    <p>【注】form表单为了提交获取值更加方便，但是Checkbox还是不要用form表单的提交获取值，获取后还要对数据进行处理，可以使用Checkbox和CheckboxList封装的v-model。<br />重置目前因为input的checked属性赋值有问题，会清空radio和checkbox默认选中的值。</p>
                </div>
                <form class="layui-form">
                    <div class="layui-row layui-col-space10 layui-form-item">
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">员工姓名：</label>
                            <div class="layui-input-block">
                                <input type="text" name="fullname" placeholder="" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-col-lg6">
                            <label class="layui-form-label">技术工种：</label>
                            <div class="layui-input-block">
                                 <Select :source="list4" name="type"></Select>
                            </div>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <label class="layui-form-label">兴趣爱好：</label>
                        <CheckBox title="写作" name="interest[write]"></CheckBox>
                        <CheckBox title="阅读" name="interest[read]"></CheckBox>
                        <CheckBox title="代码" name="interest[code]"></CheckBox>
                        <CheckBox title="做梦" name="interest[dreaming]"></CheckBox>
                    </div>

                    <div class="layui-form-item">
                        <label class="layui-form-label">是否婚姻：</label>
                        <CheckBox skin="switch" text="是|否" name="marriage"></CheckBox>
                    </div>

                    <div class="layui-form-item">
                        <label class="layui-form-label">所属职称：</label>
                        <RadioList :source="radioList2"></RadioList>
                    </div>

                    <div class="layui-form-item">
                        <label class="layui-form-label">其它信息：</label>
                        <div class="layui-input-block">
                            <textarea name="other" placeholder="" class="layui-textarea"></textarea>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <div class="layui-input-block">
                            <CheckBox title="同意" skin="primary" name="agreement"></CheckBox>
                        </div>
                    </div>

                    <div class="layui-form-item">
                        <div class="layui-input-block">
                            <button class="layui-btn" lay-submit="" lay-filter="submitTest">立即提交</button>
                            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectValue: '0',
                checkBoxChecked: true,
                radioValue: '男',
                list1: [
                    {
                        name: '北京',
                        value: 0
                    },

                    {
                        name: '上海',
                        value: 1
                    },

                    {
                        name: '杭州',
                        value: 2
                    }
                ],

                list2: [
                    {
                        name: '北京',
                        value: 0
                    },

                    {
                        name: '上海（禁用效果）',
                        value: 1,
                        disabled: true
                    },

                    {
                        name: '杭州',
                        value: 2
                    }
                ],

                list3: [
                    {
                        label: '城市记忆',
                        list: [
                            {
                                name: '你工作的第一个城市？',
                                value: 0
                            }
                        ]
                    },

                    {
                        label: '学生时代',
                        list: [
                            {
                                name: '你的工号？',
                                value: 1
                            },

                            {
                                name: '你最喜欢的老师？',
                                value: 2
                            }
                        ]
                    }
                ],

                radioList: [
                    {
                        name: 'sex',
                        title: '男',
                        value: '男'
                    },

                    {
                        name: 'sex',
                        title: '女',
                        value: '女'
                    },

                    {
                        name: 'sex',
                        title: '禁用',
                        vaule: '禁用',
                        disabled: true
                    }
                ],

                list4: [
                    {
                        name: '前端工程师',
                        value: 0
                    },

                    {
                        name: 'Node.js工程师',
                        value: 1
                    },

                    {
                        name: 'PHP工程师',
                        value: 2
                    },

                    {
                        name: 'Java工程师',
                        value: 3
                    },

                    {
                        name: '运维',
                        value: 4
                    },

                    {
                        name: '视觉设计师',
                        value: 5
                    }
                ],

                radioList2: [
                    {
                        name: 'role',
                        title: '经理',
                        value: '经理',
                        checked: true
                    },

                    {
                        name: 'role',
                        title: '主管',
                        value: '主管'
                    },

                    {
                        name: 'role',
                        title: '码农',
                        value: '码农'
                    },

                    {
                        name: 'role',
                        title: '端水',
                        value: '端水'
                    }
                ]
            };
        },

        mounted() {
            this.$nextTick(() => {
                this.$layui.form.on('submit(submitTest)', (data) => {
                    this.$layer.msg(JSON.stringify(data.field));
                    return false;
                });
            });
        },

        methods: {
            selectChange(val) {
                this.$layer.msg(`选中了${val.value}`);
            },

            radioChange() {
                this.$layer.msg(`选中了${this.radioValue}`);
            },

            showDoc(name, target) {
                this.$layer.open({
                    title: name,
                    type: 2,
                    area: ['100%', '100%'],
                    content: `/static/doc/form/${target}.html`
                });
            }
        }
    };
</script>
