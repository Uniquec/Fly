<template>
    <div>
        <Head :show="true" :userName="userName"></Head>
        <div class="left-content">
            <div class="operate-item" :class="{'selected-item': isAdd}">
                <el-link icon="el-icon-circle-plus-outline" @click="addRecord">新增记录</el-link>
            </div>
            <div class="operate-item">
                <el-link icon="el-icon-s-grid">当月明细</el-link>
            </div>
            <div class="operate-item">
                <el-link icon="el-icon-s-data">往月明细</el-link>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/Head';

export default {
    name: 'Homepage',
    components: { Head },
    data () {
        return {
            userName: '',
            isAdd: true
        }
    },
    beforeMount: function() {
        let _this = this;
        _this.userName = _this.$route.params.userName;
    },
    methods: {
        addRecord: function() {
            console.log("123")
        }
    }
}
</script>
<style scoped>
.left-content {
    width: 15%;
    height: calc(100vh - 81px);
    border-right: 2px solid #dce3e9;
    padding: 10px 0 20px;
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
</style>