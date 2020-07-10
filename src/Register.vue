<template>
  <div>
    <Head :show="false"></Head>
    <div class="register-box">
        <div class="user-name-line">
            <div class="tips-text">用户名：</div>
            <el-input
                class="user-name-input"
                type="text"
                placeholder="请输入用户名"
                v-model="userName"
                maxlength="10"
                show-word-limit
                :clearable="true"
                >
            </el-input>
        </div>
        <div class="password-line">
            <div class="tips-text">密码：</div>
            <el-input
                class="password-input"
                type="password"
                placeholder="请输入密码"
                v-model="password"
                :clearable="true"
                >
            </el-input>
        </div>
        <div class="password-line">
            <div class="tips-text">确认密码：</div>
            <el-input
                class="password-again-input"
                type="password"
                placeholder="请再次输入密码"
                v-model="password"
                :clearable="true"
                >
            </el-input>
        </div>
        <div class="btn-box">
            <el-button type="primary" class="bottom-btn">注册</el-button>
        </div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head';

export default {
  name: 'Register',
  components: { Head },
  data () {
    return {
      userName: '',
      password: '',
    }
  }
}
</script>

<style scoped>
.register-box {
    width: 80%;
    margin: 100px auto 0;
    text-align: center;
}
.user-name-line, .password-line {
    display: flex;
    justify-content: center;
    align-items: center;
}
.password-line {
    margin-top: 20px;
    margin-bottom: 50px;
}
.tips-text {
    width: 80px;
    text-align: right;
}
.user-name-input, .password-input {
    width: 25%;
}
.btn-box {
    width: 270px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.bottom-btn {
    width: 100px;
}
</style>
