<template>
  <div class="page">
    <CommonHeader></CommonHeader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
    import CommonHeader from '@/components/CommonHeader'
    export default {
        name: "Layout",
        data(){
          return {
            title: '首页'
          }
        },
        components: {
          CommonHeader
        },
        computed: {
            activeRoute (){
              return this.$route.path
            }
        }
    }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";
  .page {
    display: flex;
    flex-direction: column;
  }

</style>
