<template>
        <div>
            <el-table
                    :data="tableData"
                    style="width: 100%;margin-bottom: 20px;"
                    row-key="member_id"
                    border
                    :tree-props="{children: 'children1'}">
                <el-table-column
                        prop="parent_id"
                        label="日期"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="self_purchase_count"
                        label="姓名"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="self_purchase_money"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="self_purchase_money"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="self_purchase_money"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="self_purchase_money"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="self_purchase_money"
                        label="地址">
                </el-table-column>

            </el-table>
        </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                tableData: [{
                    member_id: 1,
                    parent_id: 2,
                    self_purchase_count:  '2016-05-02',
                    self_purchase_money: '王小虎',
                    self_purchase_power: '上海市普陀区金沙江路 1518 弄',
                    team_computing_count: '上海市普陀区金沙江路 1518 弄',
                    team_computing_money: '上海市普陀区金沙江路 1518 弄',
                    team_computing_power: '上海市普陀区金沙江路 1518 弄'
                }, {
                    member_id: 2,
                    parent_id: 3,
                    self_purchase_count:  '2016-05-02',
                    self_purchase_money: '王小虎',
                    self_purchase_power: '上海市普陀区金沙江路 1518 弄',
                    team_computing_count: '上海市普陀区金沙江路 1518 弄',
                    team_computing_money: '上海市普陀区金沙江路 1518 弄',
                    team_computing_power: '上海市普陀区金沙江路 1518 弄'
                }, {
                    member_id: 3,
                    parent_id: 4,
                    self_purchase_count:  '2016-05-02',
                    self_purchase_money: '王小虎',
                    self_purchase_power: '上海市普陀区金沙江路 1518 弄',
                    team_computing_count: '上海市普陀区金沙江路 1518 弄',
                    team_computing_money: '上海市普陀区金沙江路 1518 弄',
                    team_computing_power: '上海市普陀区金沙江路 1518 弄',
                    children1: [{
                        member_id: 4,
                        parent_id: 5,
                        self_purchase_count:  '2016-05-02',
                        self_purchase_money: '王小虎',
                        self_purchase_power: '上海市普陀区金沙江路 1518 弄',
                        team_computing_count: '上海市普陀区金沙江路 1518 弄',
                        team_computing_money: '上海市普陀区金沙江路 1518 弄',
                        team_computing_power: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        member_id: 5,
                        parent_id: 6,
                        self_purchase_count:  '2016-05-02',
                        self_purchase_money: '王小虎',
                        self_purchase_power: '上海市普陀区金沙江路 1518 弄',
                        team_computing_count: '上海市普陀区金沙江路 1518 弄',
                        team_computing_money: '上海市普陀区金沙江路 1518 弄',
                        team_computing_power: '上海市普陀区金沙江路 1518 弄'
                    }]
                }, {
                    member_id: 6,
                    parent_id: 7,
                    self_purchase_count:  '2016-05-02',
                    self_purchase_money: '王小虎',
                    self_purchase_power: '上海市普陀区金沙江路 1518 弄',
                    team_computing_count: '上海市普陀区金沙江路 1518 弄',
                    team_computing_money: '上海市普陀区金沙江路 1518 弄',
                    team_computing_power: '上海市普陀区金沙江路 1518 弄'
                }],
            }
        },
        methods:{
            load(tree, treeNode, resolve) {

                setTimeout(() => {
                    resolve([
                        {
                            id: 31,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            id: 32,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }
                    ])
                }, 1000)
            }
        }
    }
</script>

<style scoped>

</style>
