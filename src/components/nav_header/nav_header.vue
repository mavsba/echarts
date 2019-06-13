<template>
    <div>
        <el-menu
        style="padding:0 30px"
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item @click="mock" style="margin-left:-150px"><img src="../../assets/pq1.png" alt="你是佩奇" title="你是佩奇" style="width:40px;height:40px"></el-menu-item>
        <el-menu-item index="1" @click="MM">铭铭</el-menu-item>
        <el-menu-item index="2" @click="$router.push('/gzt')">我的工作台</el-menu-item>
        <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu> -->
          <el-menu-item index="3" @click="$router.push('/xiaoxi')">消息中心</el-menu-item>
          <el-menu-item index="4" @click="$router.push('/dingdan')">订单管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'nav_header',
  data () {
    return {
      data: '',
      kkk: '付汇信息',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    MM(){
      let {href} = this.$router.resolve({
            name: "mm",
      })
      window.open(href,"_blank")
    },
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    async mock () {
      this.data = await this.$http(
        {
          method: 'get',
          url: '/mockApi/mock'
        }
      )
    }
  },
  
}
</script>

<style  scoped>
.el-menu-demo{
  padding:  0 220px !important;
}
</style>
