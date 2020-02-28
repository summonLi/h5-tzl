<template>
  <div class="foot">
    <div class="foot-top">
      <ul class="foot-top-info-ul">
        <li class="foot-top-info-li">
          <div class="foot-top-info-title">帮助中心</div>
          <p>账号管理</p>
          <p>购物指南</p>
          <p>订单操作</p>
        </li>
        <li class="foot-top-info-li">
          <div class="foot-top-info-title">服务支持</div>
          <p>售后服务</p>
          <p>自助服务</p>
          <p>相关下载</p>
        </li>
        <li class="foot-top-info-li">
          <div class="foot-top-info-title">线下门店</div>
          <p>体验中心</p>
        </li>
        <li class="foot-top-info-li">
          <div class="foot-top-info-title">关于我们</div>
          <p>了解藤之露</p>
          <p>加入我们</p>
          <p>投资者关系</p>
        </li>
        <li class="foot-top-info-li">
          <div class="foot-top-info-title">关注我们</div>
          <p>新浪微博</p>
          <p>官方微信</p>
          <p>联系我们</p>
        </li>
      </ul>
    </div>
    <div class="foot-bottom">
      <div class="foot-bottom-con">
        <div class="foot-img">
          <img src="../assets/images/logofoot.png">
        </div>
        <div class="foot-bottom-l">
            <div class="foot-top-contact">
              <div class="foot-top-contact-phone">400-6062-316</div>
              <div class="foot-top-contact-time">周一至周日 8:00-18:00</div>
              <div class="foot-top-contact-tip">(仅收取市话费)</div>
              <div class="foot-top-contact-kefu"><img src="../assets/images/icon04.png"><span>人工客服</span></div>
            </div>
            <div class="foot-bottom-info-js">技术支持：广州闪电鲸科技有限公司</div>
            <p class="foot-bottom-info-beian">COPYRIGHT © 2019-2025 珠海御谷生物科技有限公司 版权所有粤公网安备粤ICP备19086519号-1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CommonFooter"
    }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";
  .foot-top {
    width: 100%;
    background: #f9f9f9;
  }
  .foot-top-info-ul {
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    padding: 15px 0 5px 0;
  }
  .foot-top-info-li p {
    font-family: PingFang-SC-Regular;
    .fs(20);
    font-weight: normal;
    font-stretch: normal;
    line-height: 17px;
    letter-spacing: 0px;
    color: #666666;
    .mb(14);
    text-align: center;
    cursor: pointer;
  }
  .foot-top-info-title {
    font-family: PingFang-SC-Bold;
    .fs(24);
    font-weight: normal;
    font-stretch: normal;
    line-height: 17px;
    letter-spacing: 0px;
    color: #2e306b;
    .mb(30);
  }
  .foot-bottom-con {
    display: -webkit-box;
    display: flex;
    .padding(20,40)
  }
  .foot-img {
    width: 125px;
    .h(269);
    overflow: hidden;
  }
  .foot-img img {
    width: 100%;
  }

  .foot-bottom-l {
    .ml(25);
  }
  .foot-top-contact {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
  }
  .foot-top-contact-phone {
    font-family: PingFang-SC-Bold;
    .fs(36);
    font-weight: normal;
    font-stretch: normal;
    line-height: 17px;
    letter-spacing: 0px;
    color: #0b8f0e;
    .mb(15);
  }
  .foot-top-contact-time,.foot-top-contact-tip {
    font-family: PingFang-SC-Medium;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 17px;
    letter-spacing: 0px;
    color: #666666;
  }
  .foot-top-contact-kefu {
    border: 1px solid #0b8f0e;
    color: #0b8f0e;
    .w(147);
    .mt(14);
    text-align: center;
    padding: 5px 0;
  }
  .foot-top-contact-kefu img {
    wdith: 12px;
    height: 11px;
    display: inline-block;
  }
  .foot-bottom {
    width: 100%;
    background: #e5eaed;
    height: 220px;
  }
  .foot-bottom-info-title {
    background: url(../assets/images/icon04.png) no-repeat center center;
    width: 386px;
    height: 27px;
    margin: 0 auto;
    margin-bottom: 33px;
  }
  .foot-bottom-info-js,.foot-bottom-info-beian {
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #696969;
    line-height: 17px;
  }
  .foot-bottom-info-js {
    .mt(29);
    .mb(19);
  }
</style>
