<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName:''
    }
  },
  watch: {
    $route(to,form){//监听路由的变化
      console.log(this.$router.isLeft)
      if(this.$router.isLeft){
        this.transitionName = 'slideleft'
      }
      if(this.$router.isRight){
        this.transitionName = 'slideright'
      }
    }
  }
}
</script>

<style lang="less">
@import "~styles/variable.less";
#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   /*text-align: center;*/
   color: #2c3e50;
}
  .Router {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: @body-bg-color;
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
  }
  .slideleft-enter,
  .slideright-leave-active {
    opacity: 1;
    transform: translate3d(90% 0, 0);
    -webkit-transform: translate3d(90%, 0, 0);
    -moz-transform: translate3d(90%, 0, 0);
  }
  .slideleft-leave-active,
  .slideright-enter {
    opacity: 1;
    transform: translate3d(-90% 0, 0);
    -webkit-transform: translate3d(-90%, 0, 0);
    -moz-transform: translate3d(-90%, 0, 0);
  }
</style>
