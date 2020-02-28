<template>
  <div class="content-box">
    <div class="page-content">
      <div class="news-banner">
        <img src="../../assets/images/bannerabout.png">
      </div>
      <div class="index-news">
        <div class="index-news-content">
          <div class="cm-title-box">
            <img class="cm-title-topimg" src="../../assets/images/icon08.png">
            <div class="index-pro-title-textbox cm-title-bgbox">
              <span class="index-pro-zwtitle">公司简介</span>
              <span class="index-pro-ywtitle">Company Profile</span>
            </div>
          </div>
          <div class="about-intro">
            <p class="p1">珠海御谷生物科技有限公司组建于2009年，坐落在有着“中国浪漫之城”之称的广东省珠海市。本公司是一家集养生食品的研发、生产、销售于一体的创新型企业，主要产品有藤之露品牌即溶茶系列产品、御生品牌健康饮料系列产品。</p>
            <p class="p2">我们秉承品质是企业生命线的理念，凭借良好的管理模式、先进的生产工艺及完善的检测手段，严把质量控制关，各项产品质量符合国家食品标准及出口要求。目前，我们的产品越来越被国内外广大客户所喜爱。</p>
            <p class="p3">我们非常重视技术研发的投入，凝聚全员智慧，奋力攻坚克难，取得了令人骄傲和值得赞颂的成绩。本公司在日本大阪设有研发中心，并且在产品开发上与多家日本知名公司有合作关系。</p>
            <p class="p4">公司下设行政部、生管部、品控部、研发部、营销部、技术服务部，销售服务网络辐射至全国20多个省、市、自治区，以及日本、东南亚地区。</p>
            <p class="p4">热忱欢迎国内外客户前来我司参观指导，珠海御谷生物科技有限公司全体员工期待与您的真诚合作，谢谢！</p>
          </div>
          <div class="index-news-con">
            <div class="index-news-box">
              <div class="index-news-img">
                <img src="../../assets/images/icon13.png">
              </div>
              <div class="index-news-info about-info">
                <div class="index-news-info-title about-info-title">核心理念</div>
                <p class="index-news-info-des about-info-des">以“诚信、责任、敬业、创新、共赢”为企业核心理念。</p>
              </div>
            </div>
            <div class="index-news-box">
              <div class="index-news-info about-info">
                <div class="index-news-info-title about-info-title">使命</div>
                <p class="index-news-info-des about-info-des">依托现代生物科技和持续创新能力，让自然和科学结合，打造差异化的健康产品，倡导快乐生活，立志成为健康行业的领先品牌！</p>
              </div>
              <div class="index-news-img">
                <img src="../../assets/images/icon14.png">
              </div>
            </div>
            <div class="index-news-box">
              <div class="index-news-img">
                <img src="../../assets/images/icon15.png">
              </div>
              <div class="index-news-info about-info">
                <div class="index-news-info-title about-info-title">愿景</div>
                <p class="index-news-info-des about-info-des">致力于创造更健康、更和谐、更美好的生活。</p>
              </div>
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
      name: "about",
      components:{
        CommonFooter
      }
    }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";
</style>
