<template>
  <div class="head-box">
    <div class="title"><i class="el-icon-edit"></i>Fly Bookkeeping</div>
    <el-dropdown v-if="show" @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="el-icon-user-solid"></i>{{userName}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>更改信息</el-dropdown-item>
        <el-dropdown-item>更改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Head',
  props: ['show','userName'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    handleCommand(command) {
      if(command === "logout") {
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style scoped>
.head-box {
  background-color: #3a72c6;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.title {
  color: #ffffff;
}
.el-dropdown {
  color: #eaeaea;
}
.el-icon-user-solid {
  margin-right: 10px;
}
</style>
