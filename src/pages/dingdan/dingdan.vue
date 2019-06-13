<template>
<div class="hello">
    <child style="border:1px solid red" :name.sync="name"></child>
    <button @click="al">点击</button>
    <button @click="change">改变</button>

    <hr>
    <hr>
    
    <div id="myChart" :style="{width: '300px', height: '300px',background:'red'}"></div>
 </div>
</template>


<script>
import child from './components/dingdanChildren'
let echarts = require('echarts/dist/echarts.min.js')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'list',
  components: {
    child
  },
  data () {
    return {
      name: 'xiaoming',
       msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    al() {
      alert(this.name);
    },
    change() {
      this.name = '123';
    },
    drawLine(){
    // 基于准备好的dom，初始化echarts实例
    console.log(echarts,1111)
    let myChart = echarts.init(document.getElementById('myChart'))
    // 绘制图表
    myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  },
  mounted() {
     this.drawLine();
       console.log(1111)
  }
 }
}

</script>

<style  scoped></style>
