<template>
  <div>
    <div>
      <el-date-picker
        v-model="date"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions">
      </el-date-picker>
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

</style>
