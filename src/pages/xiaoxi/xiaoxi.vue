<template>
  <div style="width:400px;margin:0 auto" > 
        <el-radio-group v-model="labelPosition" size="mini">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
<div style="margin: 20px;"></div>
        <el-form ref="ruleForm" :rules="rules" label-width="80px" :model="formLabelAlign">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="formLabelAlign.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formLabelAlign.pwd"></el-input>
          </el-form-item>
          <el-button type="primary" :loading="loading" @click="submit" >提交</el-button>
         <Button style1="btn">这是一个自定组件按钮</Button>
        </el-form>
        <h1><span style="color:red">{{num | date}}</span>&nbsp;&nbsp;&nbsp;我是一个全局过滤器</h1>
  </div>
</template>

<script>
import Button from '../../components/button/button.vue'
export default {
  data() {
     var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('号码不能为空!!'))
      }
      setTimeout(() => {
        if (!phoneReg.test(value)) {
          callback(new Error('格式有误'))
        } else {
          callback()
        }
      }, 0)
    }
    return {
      num:11,
      labelPosition: 'right',
      formLabelAlign: {
        phone: '18322332452',
        pwd: '',
      },
      loading:false,
      rules: {
        // 校验手机号码，主要通过validator来指定验证器名称
        phone: [{ required: true, validator: validatePhone, trigger: 'blur' }]
      },
    }
  },
  methods:{
    submit(){
     this.$refs.ruleForm.validate((valid) => {
         this.$message({
          onClose:this.close,
          duration:'1000',
          dangerouslyUseHTMLString: true,
          message: ' <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2059197837,390762756&fm=26&gp=0.jpg" alt="">'
        });
          // console.log(valid)  
        });
    },
    close(){
      alert("我准备关闭了")
    }
  },
  components:{
    Button
  }
}

</script>

<style  scoped>
</style>
