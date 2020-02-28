<template>
  <div class="content-box">
    <commonHeader :title="title" :showback="true"></commonHeader>
    <div class="page-content">
      详情页面
    </div>
  </div>
</template>

<script>
    export default {
      name: "goodsdetail",
      data(){
        return {
          title:'商品详情'
        }
      },
      components: {}
    }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";
  .page-content{
    .mb(98);
  }
</style>
