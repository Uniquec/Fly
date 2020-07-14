<template>
  <div>
    <Head :show="false"></Head>
    <div class="login-box">
        <div class="phone-line">
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
        <div class="code-line" v-show="isCode">
            <div class="tips-text">验证码：</div>
            <el-input
                class="code-input"
                type="text"
                placeholder="请输入验证码"
                v-model="code"
                maxlength="4"
                :clearable="true"
            ></el-input>
            <el-button type="success" class="get-code-btn" :disabled="isDisabled" @click="getCode">{{getCodeText}}</el-button>
        </div>
        <div class="password-line" v-show="isPassword">
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
        <div class="use-password">
            <el-link type="primary" @click="showPassword" >{{loginMethod}}</el-link>
        </div>
        <el-button type="primary" class="bottom-btn" @click="login">登录/注册</el-button>
        <div class="login-tip">新手机号将直接为您创建账号</div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head';
import HomePageVue from './HomePage.vue';

export default {
  name: 'Login',
  components: { Head },
  data () {
    return {
      phone: '',
      code: '',
      password: '',
      isCode: true,
      isPassword: false,
      isDisabled: false,
      loginMethod: '点击使用密码登录',
      getCodeText: '获取验证码',
    }
  },
  methods: {
     showPassword: function() {
         let _this = this;
         if(_this.isCode) {
            _this.isCode = false;
            _this.isPassword = true;
            _this.loginMethod = '点击使用验证码登录';
         } else {
            _this.isCode = true;
            _this.isPassword = false;
            _this.loginMethod = '点击使用密码登录';
         }
     },
     getCode: function() {
         let _this = this;
         let num = 10;
         let timer;
         _this.getCodeText = num + 's';
         timer = setInterval(() => {
             num--;
             _this.isDisabled = true;
             _this.getCodeText = num + 's';
             if (num <= 0) {
                clearInterval(timer);
                _this.isDisabled = false;
                _this.getCodeText = '重新获取验证码'
             }
         }, 1000); 
     },
     login: function() {
        let _this = this;
        if(_this.isPassword) {
            if(_this.phone === '18268649553' && _this.password === '111111') {
                _this.$router.push({ name: 'Homepage', params:{userName: 'user1'} });
            } else {
                _this.$alert('手机号或密码错误，请重新登录', '登录失败', {
                    confirmButtonText: '确定',
                });
            }
        }
        
     }
  }
}
</script>

<style scoped>
.login-box {
    width: 80%;
    margin: 100px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.phone-line, .code-line, .password-line {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
} 
.password-line, .code-line {
    margin: 20px 0 10px;
}
.tips-text {
    width: 80px;
    text-align: right;
}
.phone-input, .password-input {
    width: 290px;
}
.code-input {
    width: 140px;
    margin-right: 10px;
}
.get-code-btn {
    width: 140px;
}
.use-password {
    width: 55%;
    margin-left: 56%;
}   
.bottom-btn {
    width: 200px;
    margin: 30px 0 10px;
}
.login-tip {
    width: 100%;
    font-size: 12px;
    color: #758282;
    text-align: center;
}
</style>
