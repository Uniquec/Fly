<template>
  <div class="add-record-box">
    <div class="info-box">
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
    <div class="info-box">
      <div class="tip-text">类别：</div>
      <el-radio-group v-model="radio1">
        <el-radio-button label="餐饮"><i class="el-icon-food"></i>餐饮</el-radio-button>
        <el-radio-button label="服饰"><i class="el-icon-suitcase"></i>服饰</el-radio-button>
        <el-radio-button label="购物"><i class="el-icon-shopping-cart-full"></i>购物</el-radio-button>
        <el-radio-button label="交通"><i class="el-icon-bicycle"></i>交通</el-radio-button>
        <el-radio-button label="娱乐"><i class="el-icon-mic"></i>娱乐</el-radio-button>
        <el-radio-button label="学习"><i class="el-icon-reading"></i>学习</el-radio-button>
        <el-radio-button label="通讯"><i class="el-icon-mobile-phone"></i>通讯</el-radio-button>
        <el-radio-button label="医疗"><i class="el-icon-first-aid-kit"></i>医疗</el-radio-button>
      </el-radio-group>
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
      radio1: '餐饮',
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
.info-box {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
