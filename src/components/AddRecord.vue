<template>
  <div class="add-record-box">
    <div class="info-box">
      <div class="tip-text"><span class="red-star">*</span>日期：</div>
      <el-date-picker
        v-model="date"
        align="right"
        type="date"
        placeholder="请选择日期"
      ></el-date-picker>
      <div class="tip-text more-right"><span class="red-star">*</span>金額：</div>
      <el-input
        class="price-input"
        placeholder="请输入金额"
        v-model="price"
        clearable>
      </el-input>
    </div>
    <div class="info-box">
      <div class="tip-text"><span class="red-star">*</span>类别：</div>
      <el-radio-group v-model="type">
        <el-radio-button label="其他"><i class="el-icon-tickets type-icon"></i>其他</el-radio-button>
        <el-radio-button label="餐饮"><i class="el-icon-food type-icon"></i>餐饮</el-radio-button>
        <el-radio-button label="服饰"><i class="el-icon-suitcase type-icon"></i>服饰</el-radio-button>
        <el-radio-button label="购物"><i class="el-icon-shopping-cart-full type-icon"></i>购物</el-radio-button>
        <el-radio-button label="交通"><i class="el-icon-bicycle type-icon type-icon"></i>交通</el-radio-button>
        <el-radio-button label="娱乐"><i class="el-icon-mic type-icon"></i>娱乐</el-radio-button>
        <el-radio-button label="学习"><i class="el-icon-reading type-icon"></i>学习</el-radio-button>
        <el-radio-button label="通讯"><i class="el-icon-mobile-phone type-icon"></i>通讯</el-radio-button>
        <el-radio-button label="医疗"><i class="el-icon-first-aid-kit type-icon"></i>医疗</el-radio-button>
      </el-radio-group>
    </div>
    <div class="info-box">
      <div class="tip-text"><span class="red-star">*</span>备注：</div>
      <el-input
        class="remark-input"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="remarks">
      </el-input>
    </div>
    <!-- <div class="btn-box"> -->
      <el-button type="primary" class="submit-btn" @click="submit">提交</el-button>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'AddRecord',
  data () {
    return {
      date: '',
      price: '',
      type: '其他',
      remarks: '',
    }
  },
  methods: {
    submit: function() {
      let _this = this;
      if(_this.date === '') {
        _this.$alert('日期不能为空', '提交失败', {
          confirmButtonText: '确定',
        });
      }else if(_this.price === '') {
        _this.$alert('金额不能为空', '提交失败', {
          confirmButtonText: '确定',
        });
      }else if(_this.remarks === '') {
        _this.$alert('备注不能为空', '提交失败', {
          confirmButtonText: '确定',
        });
      }else {
        _this.$alert('已记录', '提交成功', {
          confirmButtonText: '确定',
        });
      }
    }
  }
}
</script>

<style scoped>
.add-record-box {
  width: 70%;
  padding: 50px;
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
.red-star {
  color: #ff0000;
}
.more-right {
  margin-left: 20px;
}
.price-input{
  width: 200px;
}
.type-icon {
  margin-right: 5px;
}
.remark-input {
  width: 500px;
}
.submit-btn {
  margin-left: 30px;
  width: 100px;
}
</style>
