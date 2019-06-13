<template>
    <el-aside style="width:220px;background:rgb(84, 92, 100)">
           <el-col :span="24" >
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
               <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">铭铭</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">黎明</span>
              </el-menu-item>
              <el-submenu :index="index+''" v-for="(item,index) in asideList" :key="index">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.name}}ezsy mock</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item :index="'1-'+index">{{item.object.s}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
      </el-aside>
</template>

<script>
export default {
  name: 'homeAside',
  data () {
    return {
      asideList: ''
    }
  },
  mounted () {
    // 初始化侧边选项栏
    this._asideList()
  },
  methods: {
    _asideList () {
      this.$http(
        {
          method: 'get',
          url: '/mockApi/mock'
        }
      ).then((req) => {
        this.asideList = req.data.data.projects
        // console.log(this.asideList)
      })
    }
  }
}

// es6  assign
var obj = {
  a:1
}
var a = {
  b:2
}

// Object.assign({},obj,a)
// console.log("TCL: Object.assign({},obj,a)", Object.assign({},obj,a))
</script>

<style  scoped>
</style>
