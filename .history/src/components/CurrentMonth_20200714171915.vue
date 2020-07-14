<template>
    <div>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="price"
                label="金额"
                width="180">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类别">
            </el-table-column>
            <el-table-column
                prop="remarks"
                label="备注">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                    移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'CurrentMonth',
    data () {
        return {
            tableData:[{
                date: '2020/07/14',
                price: '3',
                type: 'triffic',
                remarks: '地铁',
            }]
        }
    },
}
</script>
<style scoped>

</style>