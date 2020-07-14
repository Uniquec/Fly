<template>
    <div>
        <Head :show="true" :userName="userName"></Head>
        <div class="left-content">
            <div class="operate-item"><i class="el-icon-circle-plus-outline"></i>新增记录</div>
            <div class="operate-item"><i class="el-icon-s-grid"></i>当月明细</div>
            <div class="operate-item"><i class="el-icon-s-data"></i>往月明细</div>
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
    width: 20%;
    padding: 20px;
    color: #3a72c6;
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
}
.operate-item {
    width: 100%;
    margin-bottom: 20px;
}
</style>