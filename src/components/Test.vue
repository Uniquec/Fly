<template>
  <div class="test-box">
    <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" />
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      fileList:[],
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      let _this = this;
      _this.fileList[0].url = file.content 
    },
  }
}
</script>

<style scoped>
.test-box {
  padding: 100px;
}
</style>
