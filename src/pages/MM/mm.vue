<template>
  <div>
    <h1>for循环中为什么要加入key值
    </h1>
    <div>
      <input type="text" v-model="name">
      <button @click="add">添加</button>
    </div>
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <input type="checkbox"> {{item.name}}
      </li>
    </ul>
    <h1>异步刷新队列</h1>
    <div id="app">
        <div id="div" v-if="showDiv">这是一段文本</div>
        <button @click="getText">获取div内容</button>
    </div>
    <h1>事件修饰符self和cupter</h1>
    
    <!--默认是从里向外冒泡响应事件,从子级->父级元素响应事件,-->
    <div @click="box" :style="{border:'solid 2px red'}">
        <!--prevent是阻止点击a连接跳转,stop是阻止从里向外冒泡响应事件,父级的事件不执行-->
        <a href="https://www.cnblogs.com/haima" @click.prevent="links">从里向外冒泡响应事件</a>
    </div>

    <br>

    <!--capture捕获事件,从父级->子级元素响应事件,-->
    <div @click="box" :style="{border:'solid 2px red'}">
        <!--prevent是阻止点击a连接跳转,stop是阻止从里向外冒泡响应事件,父级的事件不执行-->
        <a href="https://www.cnblogs.com/haima" @click.stop.prevent="links">阻止从里向外冒泡响应事件,阻止点击a连接跳转</a>
    </div>

    <br>

    <!--self点到自己才触发事件,点谁谁响应事件-->
    <div @click.self="box" :style="{border:'solid 2px red'}">
        <!--prevent是阻止点击a连接跳转,由于父级加了self,所以就不会向上冒泡响应事件,效果同上面的stop-->
        <a href="https://www.cnblogs.com/haima" @click.prevent="links"> <a href="https://www.cnblogs.com/haima" @click.prevent="links">的撒旦撒</a>父级加self,阻止a标签冒泡响应事件,点谁谁响应事件</a>
    </div>

    <br>
    <!--capture捕获事件,从父级->子级元素响应事件,-->
    <div @click.capture="box" :style="{border:'solid 2px red'}">
        <!--prevent是阻止点击a连接跳转-->
        <a href="https://www.cnblogs.com/haima" @click.prevent="links">从父级->子级元素响应事件</a>
    </div>
    
    <br>

    <!--once是只绑定一次跳转-->
    <div @click="box" :style="{border:'solid 2px red'}">
        <!--prevent是阻止点击a连接跳转-->
        <a href="https://www.cnblogs.com/haima" @click.once.stop.prevent="links">从父级->子级元素响应事件</a>
    </div>
    <h1>路由钩子回调数据</h1>
    <input type="text" v-model="test">
  </div>
</template>

<script>
export default {
   // 创建 Vue 实例，得到 ViewModel
      data () {
        return {
          name: '',
           test:'改变之前',
          newId: 3,
        list: [
          { id: 1, name: '李斯' },
          { id: 2, name: '吕不韦' },
          { id: 3, name: '嬴政' }
        ],
         showDiv : false
        }
      },
      methods: {
        add() {
         //注意这里是unshift
          this.list.unshift({ id: ++this.newId, name: this.name })
          this.name = ''
        },
         getText:function(){
            this.showDiv = true;
            this.$nextTick(function(){
              var text = document.getElementById('div').innerHTML;
                // console.log(text);
            })
        },
        box(){
                alert('div');
            },
            links(){
                alert('www.cnblogs.com/haima');
            }
      },
        beforeCreate(){//组件生命周期函数
            // console.log('beforeCreate')
        },
        //当进入组件之前，执行 beforRouteEnter 路由钩子函数
        beforeRouteEnter(to,from,next){
          // alert('欢迎进入命名天堂')
            // console.log('beforRouteEnter')
            // console.log(this) // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
            next((vm)=>{ //参数vm就是当前组件的实例。
                vm.test = '我被改变了'
            })
        },
        beforeRouteUpdate(to,from,next){
            // console.log('beforeRouteUpdate',this)
            next()
        },
        beforeRouteLeave(to,from,next){//离开组件的时候触发
            const answer = window.confirm('离开？?')
            if (answer) {
              next()
            } else {
              next(false)
            }
        }
}
</script>

<style  scoped>
</style>
