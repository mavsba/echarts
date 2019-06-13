<template>
  <div>
     <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      prop="date"
      width="200">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
     <el-table-column
      label="操作">
     <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
            :page-sizes="[5, 10, 20, 40]"
            :page-size="1"
            layout="total, sizes, prev, pager, next, jumper"
            :total="20">
    </el-pagination>
  </div>
   <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
  <vue-lazy-component>
    <lazy></lazy>
   
  </vue-lazy-component>
  </div>
</template>

<script>
import lazy from '../../components/lazy/lazy'
export default {
  components: {
    lazy
  },
  name: 'gzt',
  data () {
    return {
      val:'',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  mounted () {
    this.val = 1
    // console.log(this.val);
  },
  methods: {
    handleEdit (index, row) {
      // console.log(index, row)
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
    },
    toggleSelection (rows) {
      // console.log(rows, 11)
      if (rows) {
        rows[0].forEach(row => {
          if (row.name === '王小虎') {
            this.$refs.multipleTable.toggleRowSelection(row)
          }
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      // console.log(this.multipleSelection)
    }
  }
}
</script>

<style scoped>
</style>
