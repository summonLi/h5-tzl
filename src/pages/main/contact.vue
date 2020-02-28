<template>
  <div class="content-box">
    <div class="page-content">
      <div class="news-banner">
        <img src="../../assets/images/bannercontact.png">
      </div>
      <div class="index-news">
        <div class="index-news-content">
          <div class="cm-title-box">
            <img class="cm-title-topimg" src="../../assets/images/icon08.png">
            <div class="index-pro-title-textbox cm-title-bgbox">
              <span class="index-pro-zwtitle">联系我们</span>
              <span class="index-pro-ywtitle">New Information</span>
            </div>
          </div>
          <div class="contact-map">
            <div class="contact-mapbox" id="container"><img src="../../assets/images/pic04.png"></div>
            <div class="contact-map-text">御谷生物科技有限公司所在地理位置图</div>
          </div>
          <div class="contact-info">
            <div class="contact-info-des">
              <img class="contact-info-icon" src="../../assets/images/icon10.png" title="广东省珠海市香洲区兴华路106号">
              <div class="contact-info-text">广东省珠海市香洲区兴华路106号</div>
            </div>
            <div class="contact-info-des">
              <img class="contact-info-icon" src="../../assets/images/icon11.png" title="电话：400-6062-316">
              <div class="contact-info-text">电话：400-6062-316</div>
            </div>
            <div class="contact-info-des">
              <img class="contact-info-icon" src="../../assets/images/icon12.png" title="周一到周五 09：00-18：00">
              <div class="contact-info-text">周一到周五 09：00-18：00</div>
            </div>
          </div>
        </div>
      </div>
      <CommonFooter></CommonFooter>
    </div>
  </div>
</template>

<script>
  import CommonFooter from '@/components/CommonFooter'
    export default {
        name: "contact",
        components:{
          CommonFooter
        }
    }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";

</style>
