<template>
    <div class="homepage-box">
        <Head :show="true" :userName="userName"></Head>
        <div class="left-content">
            <div class="add-btn-box">
                <el-button 
                    type="text" 
                    icon="el-icon-circle-plus-outline" 
                    class="add-btn"
                    @click="selectLeftItem(0)"
                >新增记录</el-button>
            </div>
            <div class="operate-item" :class="{'selected-item': isMonthRecord}">
                <el-link icon="el-icon-s-grid" @click="selectLeftItem(1)">月明细</el-link>
            </div>
            <div class="operate-item" :class="{'selected-item': isSeting}">
                <el-link icon="el-icon-s-tools" @click="selectLeftItem(2)">设置</el-link>
            </div>
        </div>
        <AddRecord v-show="isAdd"></AddRecord>
        <MonthRecord v-show="isMonthRecord"></MonthRecord>
        <Setting v-show="isSeting"></Setting>
    </div>
</template>

<script>
import Head from '@/components/Head';
import AddRecord from '@/components/AddRecord';
import MonthRecord from '@/components/MonthRecord';
import Setting from '@/components/Setting';

export default {
    name: 'Homepage',
    components: { Head, AddRecord, MonthRecord, Setting },
    data () {
        return {
            userName: '',
            isAdd: false,
            isMonthRecord: false,
            isSeting: false,
            // isTest: true,
        }
    },
    beforeMount: function() {
        let _this = this;
        _this.userName = _this.$route.params.userName;
    },
    methods: {
        selectLeftItem: function(index) {
            let _this = this;
            _this.isAdd = false;
            _this.isMonthRecord = false;
            _this.isSeting = false;
            if(index === 0) {
                _this.isAdd = true;
            }  else if(index === 1) {
                _this.isMonthRecord = true;
            } else if(index === 2) {
                _this.isSeting = true;
            } 
        },
    }
}
</script>
<style scoped>
.homepage-box {
    display: flex;
    flex-wrap: wrap;
}
.left-content {
    width: 15%;
    height: calc(100vh - 81px);
    border-right: 2px solid #dce3e9;
    padding: 20px 0 20px;
}
.add-btn-box {
    text-align: center;
    margin-bottom: 20px;
}
.add-btn {
    font-size: 18px;
}
.operate-item {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
    padding: 10px 0;
}
.el-link {
    font-size: 16px !important;
}
.selected-item {
    background-color: #cde6f6;
}
.el-icon-s-tools {
    margin-left: -15px;
}
</style>