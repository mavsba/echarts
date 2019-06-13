<template>
  <div id="app">
    <el-container style="height:100%">
      <el-header style="padding:0">
         <navHeader></navHeader>
      </el-header>
      <el-container style="height:100%">
        <homeAside v-if="!$route.meta.isAside"/>
        <el-main>
           <transition name="slide-left">
              <!-- <vue-lazy-component
                @init="init"
                @beforeInit="beforeInit"
              > -->
                <!--需要懒加载的组件-->
                <router-view></router-view>
                <!--在加载之前展示的骨架组件-->
                <!-- <st-series-sohu-skeleton slot="skeleton"/> -->
              <!-- </vue-lazy-component> -->
           </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import navHeader from './components/nav_header/nav_header'
import homeAside from './components/aside/aside'
export default {
  name: 'App',
  components: {
    navHeader,
    homeAside
  }
}

</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app{
  height: 100%;
}
.slide-left-enter-active {
     animation: slideLeft 1s;
   }
  /****自定义动画**/
  @keyframes slideLeft {
    from {
      transform: translate3d(100%, 0, 0);
      opacity: 0;/*横坐标,纵坐标,z坐标*/
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
</style>
