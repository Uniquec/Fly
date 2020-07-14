<template>
  <div class="add-record-box">
    <div class="date-box">
      <div>日期：</div>
      <el-date-picker
        v-model="date"
        align="right"
        type="date"
        placeholder="选择日期"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddRecord',
  data () {
    return {
      date: '',
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.add-record-box {
  padding: 50px 20px;
}
.date-box {
  display: flex;
  align-items: center;
}
</style>
