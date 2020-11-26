<template>
  <div class="head-box">
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';

export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    handleCommand(command) {
      if(command === "logout") {
        this.$router.replace('/');
      }
    }
  }
}
</script>

<style scoped>
</style>
