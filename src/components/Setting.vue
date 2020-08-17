<template>
    <div class="setting-box">
        <div class="avatar-box">
            <div class="tips-text margin-auto">头像：</div>
            <el-upload
                class="avatar-uploader margin-auto"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <div class="right-box">
            <div class="info-line">
                <div class="tips-text">用户名：</div>
                <el-input
                    class="username-input"
                    type="text"
                    placeholder="请输入用户名"
                    v-model="username"
                    maxlength="10"
                    show-word-limit
                    :clearable="true"
                ></el-input>
            </div>
            <div class="info-line">
                <div class="tips-text">手机号：</div>
                <el-input
                    class="phone-input"
                    type="text"
                    placeholder="请输入手机号"
                    v-model="phone"
                    maxlength="11"
                    show-word-limit
                    :clearable="true"
                ></el-input>
            </div>
            <div class="info-line">
                <div class="tips-text">密码：</div>
                <el-input
                    class="phone-input"
                    type="password"
                    placeholder="请输入密码"
                    v-model="password"
                    :clearable="true"
                ></el-input>
            </div>
        </div>
        <div class="btn">
            <el-button type="primary">确认修改</el-button>
        </div>
    </div>
</template>

<script>
import Head from '@/components/Head';

export default {
    name: 'ChangeInfo',
    components: { Head },
    data () {
        return {
            userName: '',
            username: '',
            phone: '',
            password: '',
            imageUrl: ''
        }
    },
    beforeMount: function() {
        let _this = this;
        _this.userName = _this.$route.params.userName;
        _this.username = _this.$route.params.userName;
    },
}
</script>
<style scoped>
.margin-auto{
    margin: auto;
}
.setting-box {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
}
.avatar-box {
    width: 40%;
    margin-top: 50px;
}
.avatar-uploader {
    width: 100px;
    height: 100px;
    border: 1px dashed #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.right-box {
    width: 60%;
    margin-top: 50px;
}
.info-line {
    display: flex;
    align-items: center;
    width: 60%;
    margin-bottom: 10px;
}
.tips-text {
    width: 100px;
}
.btn {
    width: 76%;
    text-align: right;
}
</style>