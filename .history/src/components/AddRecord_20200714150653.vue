<template>
  <div class="add-record-box">
    <div class="date-box">
      <div class="tip-text">日期：</div>
      <el-date-picker
        v-model="date"
        align="right"
        type="date"
        placeholder="请选择日期"
      ></el-date-picker>
      <div class="tip-text more-right">金額：</div>
      <el-input
        class="price-input"
        placeholder="请输入金额"
        v-model="price"
        clearable>
      </el-input>
    </div>
    <div>
      <div class="tip-text">类别：</div>
      <el-radio-group v-model="radio1">
        <el-radio-button label="餐饮"><i class="el-icon-food"></i></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
      <el-radio-button v-model="radio2" label="1" border size="medium"><i class="el-icon-food"></i>餐饮</el-radio-button>
      <el-radio-button v-model="radio2" label="1" border size="medium"><i class="el-icon-food"></i>餐饮</el-radio-button>
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
      radio2: '',
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.add-record-box {
  width: 70%;
  padding: 50px 30px;
}
.date-box {
  display: flex;
  align-items: center;
}
.tip-text {
  width: 80px;
  text-align: right;
}
.more-right {
  margin-left: 20px;
}
.price-input{
  width: 200px;
}
</style>
