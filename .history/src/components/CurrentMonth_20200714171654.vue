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
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
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