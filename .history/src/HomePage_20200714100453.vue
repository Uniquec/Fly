<template>
    <div>
        <Head :show="true" :userName="userName"></Head>
        <div class="left-content">
            <div class="operate-item">
                <el-link icon="el-icon-circle-plus-outline">新增记录</el-link>
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
        }
    },
    beforeMount: function() {
        let _this = this;
        _this.userName = _this.$route.params.userName;
    },
    methods: {
        
    }
}
</script>
<style scoped>
.left-content {
    width: 10%;
    height: calc(100vh - 81px);
    border-right: 2px solid #dce3e9;
    padding: 20px;
}
.operate-item {
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
    color: #3a72c6 !important;
    font-size: 16px;
}
</style>