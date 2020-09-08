<template>
    <div class="current-box">
        <div class="choose-month-box">
            <div>请选择查询月份：</div>
            <el-date-picker
                v-model="selectedMonth"
                type="month"
                value-format="yyyy-MM"
                :placeholder="currentMonth">
            </el-date-picker>
            <el-button type="primary" style="margin-left:10px" @click="queryMonth">查询</el-button>
        </div>
        <el-radio-group v-model="showType" @change="changeShowType" class="type-box">
            <el-radio-button label="表格">表格</el-radio-button>
            <el-radio-button label="饼图">饼图</el-radio-button>
        </el-radio-group>
         <el-table
            :data="tableData"
            border
            style="width: 80%"
            show-summary
            :height="tableHeight"
            v-show="isTable"
            >
            <el-table-column
                prop="date"
                label="日期"
                align="center"
                width="120">
            </el-table-column>
            <el-table-column
                prop="price"
                label="金额（元）"
                align="center"
                sortable
                width="120">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类别"
                align="center">
            </el-table-column>
            <el-table-column
                prop="remarks"
                label="备注"
                align="center"
                width="250">
            </el-table-column>
             <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button
                    @click.native.prevent="changeRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                    修改
                    </el-button>
                     <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                    移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div id="myChart" :style="{width: '450px', height: '450px',margin: 'auto'}" v-show="!isTable"></div>
    </div>
</template>
<script>
export default {
    name: 'MonthRecord',
    data () {
        return {
            selectedMonth: '',
            currentMonth: '',
            tableData:[{
                date: '2020/07/15',
                price: '4',
                type: '交通',
                remarks: '地铁',
            },{
                date: '2020/07/14',
                price: '3',
                type: '交通',
                remarks: '地铁',
            },{
                date: '2020/07/13',
                price: '18',
                type: '餐饮',
                remarks: '外卖',
            },{
                date: '2020/07/13',
                price: '120',
                type: '购物',
                remarks: '餐巾纸',
            },{
                date: '2020/07/13',
                price: '200',
                type: '服饰',
                remarks: '外套',
            },],
            tableHeight: 0,
            showType: '表格',
            isTable: true,
        }
    },
    beforeMount: function() {
        this.calculateHeight();
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() > 8 ? date.getMonth() + 1 : '0'+(date.getMonth() + 1);
        this.currentMonth =  year + '-' + month;
    },
    methods: {
        calculateHeight: function() {
            let _this = this;
            let tableLength = _this.tableData.length;
            if(tableLength <= 6) {
                _this.tableHeight = 57 * tableLength + 108;
            }else {
                _this.tableHeight = 450;
            }
        },
        queryMonth: function() {
            let _this = this;
            console.log(_this.selectedMonth)
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
            this.calculateHeight();
            this.drawLine();
        },
        changeRow(index, rows) {

        },
        drawLine(){
            let _this = this;
            let xArray = [];
            let yArray = [];
            let sum = [{
                value: parseInt(_this.tableData[0].price),
                name:  _this.tableData[0].type
            }];
            for(let i = 1;i < _this.tableData.length;i++) {
                for(let j = 0; j < sum.length;j++){
                    if(sum[j].name === _this.tableData[i].type) {
                        sum[j].value += parseInt(_this.tableData[i].price); 
                        break;
                    }else {
                        sum.push({
                            value: parseInt(_this.tableData[i].price),
                            name:  _this.tableData[i].type
                        });
                        break;
                    }
                }
            }
            for(let i = 0; i < sum.length;i++) {
                xArray.push(sum[i].name);
                yArray.push(sum[i].value);
            }
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                 tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c} ({d}%)'
                },
                legend: {
                    data: xArray,
                    left:"center",                              
                    top:"bottom",                              
                    orient:"horizontal",                        
                },
                series: [
                    {
                        type: 'pie',
                        radius: '50%',
                        center: ['50%', '50%'],
                        data: sum,
                        hoverAnimation:true,
                        emphasis: {
                            label: {
                                show: true,
                            }
                        },
                    }
                ]
            });
        },
        changeShowType: function() {
            let _this = this;
            if(_this.showType === '饼图') {
                _this.isTable = false;
                this.drawLine();
            } else {
                _this.isTable = true;
            }
        },
    },
}
</script>
<style scoped>
.current-box {
    padding: 50px 50px 10px;
    width: 70%;
}
.choose-month-box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.type-box {
    float: right;
}
#myChart canvas {
    width: 450px;
    height: 450px;
}
</style>