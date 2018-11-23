<template>
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md6">
            <Card title="输入框">
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
                ]
            };
        },

        methods: {
            selectChange(val) {
                this.$layer.msg(`选中了${val.value}`);
            },

            radioChange() {
                this.$layer.msg(`选中了${this.radioValue}`);
            }
        }
    };
</script>
