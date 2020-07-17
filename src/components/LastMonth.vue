<template>
    <div>
        <div class="month-list">
           <div v-for="item in monthLists" :key="item.id" class="month-item">
               <div class="month-text">{{item.month}}</div>
               <div class="amount-text">共计：{{item.amount}}</div>
            </div>
        </div>
        <!-- <CurrentMonth></CurrentMonth> -->
    </div>
</template>
<script>
import CurrentMonth from '@/components/CurrentMonth';

export default {
    name: 'LastMonth',
    components: { CurrentMonth },
    data () {
        return {
            monthLists: [{
                month: '2020年6月',
                amount: '6560元'
            },{
                month: '2020年5月',
                amount: '8560元'
            }],
        }
    },
}
</script>
<style scoped>
.month-list {
    width: 180px;
    height: calc(100vh - 41px);
    border-right: 2px solid #dce3e9;
}
.month-item {
    border-bottom: 1px solid #d3d3d3;
    padding: 15px;
}
.month-text {
    font-size: 16px;
    font-weight: bolder;
    color: #0072C6;
}
.amount-text {
    font-size: 14px;
    margin-top: 5px;
    text-align: right;
}
</style>