<template>
    <div class="homepage-box">
        <Head :show="true" :userName="userName"></Head>
        <div class="left-content">
            <div class="add-btn">
                <el-button type="text" icon="el-icon-circle-plus-outline">新增记录</el-button>
            </div>
            <div class="operate-item" :class="{'selected-item': isCurrentMonth}">
                <el-link icon="el-icon-s-grid" @click="selectLeftItem(0)">当月明细</el-link>
            </div>
            <div class="operate-item" :class="{'selected-item': isLastMonth}">
                <el-link icon="el-icon-s-data" @click="selectLeftItem(1)">往月明细</el-link>
            </div>
        </div>
        <!-- <AddRecord v-show="isAdd"></AddRecord> -->
    </div>
</template>

<script>
import Head from '@/components/Head';
import AddRecord from '@/components/AddRecord';

export default {
    name: 'Homepage',
    components: { Head, AddRecord },
    data () {
        return {
            userName: '',
            isCurrentMonth: true,
            isLastMonth: false,
        }
    },
    beforeMount: function() {
        let _this = this;
        _this.userName = _this.$route.params.userName;
    },
    methods: {
        selectLeftItem: function(index) {
            let _this = this;
            _this.isCurrentMonth = false;
            _this.isLastMonth = false;
            if(index === 0) {
                _this.isCurrentMonth = true;
            }  else {
                _this.isLastMonth = true;
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
    padding: 0 0 20px;
}
.add-btn {
    text-align: center;
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
</style>