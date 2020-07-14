<template>
  <div class="add-record-box">
    <div class="date-box">
      <div>日期：</div>
      <el-date-picker
        v-model="date"
        align="right"
        type="date"
        placeholder="请选择日期"
      ></el-date-picker>
      <div>金額：</div>
      <el-input
        placeholder="请输入金额"
        v-model="price"
        clearable>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddRecord',
  data () {
    return {
      date: '',
      price: '',
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.add-record-box {
  padding: 50px 30px;
}
.date-box {
  display: flex;
  align-items: center;
}
</style>
