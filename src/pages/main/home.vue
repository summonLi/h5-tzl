<template>
  <div class="content-box">
    <div class="page-content">
      <div class="home-bannerBox">
        <van-swipe :autoplay="5000" :loop="true" indicator-color="#3cc27e">
          <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
            <img class="bannerImg" :src="image">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="index-intro">
        <div class="index-intro-content">
          <div class="index-intro-info">
            <div class="index-intro-info-title">藤の露</div>
            <p class="index-intro-text1">“藤の露”是一个专注做藤茶产品的品牌。“藤の露”系列产品应用目前较为先进的冷萃取工艺技术，能将野生藤茶中的成分和口味完全保留。</p>
            <p class="index-intro-text2">"FUJI NO TSUYU" is a brand dedicated to making Ampelopsis products. With the application of the advanced cold extraction technology, the series products of "FUJI NO TSUYU" can completely retain the ingredients and flavors of wild Ampelopsis and make instant tea powder and containing granules, thus creating a new era of tea products.</p>
            <div class="index-langIcon"><img src="../../assets/images/icon05.png"></div>
          </div>
          <div class="index-intro-info1">
            <div class="index-intro-left">
              <div class="index-intro-pro">
                <div class="index-intro-pro-title">红</div>
                <div class="index-intro-pro-con">
                  <div class="index-intro-pro-text">红袍黑藤</div>
                  <div class="index-intro-pro-des">高山嫩叶、醇厚茶香</div>
                </div>
              </div>
              <div class="index-intro-pro">
                <div class="index-intro-pro-title">玫</div>
                <div class="index-intro-pro-con">
                  <div class="index-intro-pro-text">玫瑰紫藤</div>
                  <div class="index-intro-pro-des">重瓣玫瑰、爱与美的诠释</div>
                </div>
              </div>
              <div class="index-intro-pro">
                <div class="index-intro-pro-title">明</div>
                <div class="index-intro-pro-con">
                  <div class="index-intro-pro-text">明前绿藤</div>
                  <div class="index-intro-pro-des">明前嫩叶、色翠香幽</div>
                </div>
              </div>
            </div>
            <div class="index-intro-right">
              <div class="index-intro-pro">
                <div class="index-intro-pro-title">酒</div>
                <div class="index-intro-pro-con">
                  <div class="index-intro-pro-text">酒藤知己</div>
                  <div class="index-intro-pro-des">轻养生藤茶、健康好伴侣</div>
                </div>
              </div>
              <div class="index-intro-pro">
                <div class="index-intro-pro-title">醉</div>
                <div class="index-intro-pro-con">
                  <div class="index-intro-pro-text">醉藤你</div>
                  <div class="index-intro-pro-des">有酒相伴、生活更美好</div>
                </div>
              </div>
              <div class="index-intro-pro">
                <div class="index-intro-pro-title">金</div>
                <div class="index-intro-pro-con">
                  <div class="index-intro-pro-text">金藤爽</div>
                  <div class="index-intro-pro-des">满口清凉、滋润咽喉</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index-tc-intro">
        <img class="index-tc-intro-imgbg" src="../../assets/images/bg04.png">
        <div class="index-tc-intro-box">
          <div class="index-tc-intro-info">
            <div class="index-tc-intro-title"><span class="index-tc-intro-citeL"></span>藤茶 大自然的恩赐<span class="index-tc-intro-citeR"></span></div>
            <p class="index-tc-intro-des">藤茶，俗称端午茶、长寿藤、藤婆茶、龙须茶。此茶色泽绿，起白霜，初入口微苦，回甘快而持久。土家族人已有3000年的藤茶饮用历史，他们因藤茶而长寿，因藤茶而健康，神奇的土家藤茶已经成为茶家族里一枚绚丽璀璨的明珠。</p>
          </div>
        </div>
      </div>
      <div class="index-pro">
        <div class="index-pro-content">
          <div class="cm-title-box">
            <img class="cm-title-topimg" src="../../assets/images/icon08.png">
            <div class="index-pro-title-textbox cm-title-bgbox">
              <span class="index-pro-zwtitle">新品推荐</span>
              <span class="index-pro-ywtitle">New Arrivals</span>
            </div>
          </div>
          <div class="index-pros">
            <div class="index-pro-box">
              <div class="index-pro-imgbox">
                <div class="index-pro-imgbg-line"></div>
                <div class="index-pro-pic"><img src="../../assets/images/pic02.png"></div>
              </div>
              <div class="index-pro-info">
                <div class="index-pro-info-title">醉藤你</div>
                <p class="des1">含化型即溶茶</p>
                <p>一款直接含化的茶</p>
                <p>应酬时口服，让你“肝”之如饴</p>
                <p class="index-pro-info-morebox"><span class="index-more-line1"></span><span class="index-more-line2"></span><span class="index-more-line3"></span><span class="index-more-text" @click="goProductdetail(2)">查看更多</span></p>
              </div>
              <div class="index-pro-icon"><img src="../../assets/images/icon03.png"></div>
            </div>
            <div class="index-pro-box">
              <div class="index-pro-icon"><img src="../../assets/images/icon03.png"></div>
              <div class="index-pro-info second">
                <div class="index-pro-info-title">金藤爽</div>
                <p class="des1">含化型即溶茶</p>
                <p>倒入口中直接含化</p>
                <p>一股清凉从口腔蔓延到咽喉</p>
                <p class="index-pro-info-morebox second"><span class="index-more-text" @click="goProductdetail(1)">查看更多</span><span class="index-more-line1"></span><span class="index-more-line2"></span><span class="index-more-line3"></span></p>
              </div>
              <div class="index-pro-imgbox">
                <div class="index-pro-imgbg-line second"></div>
                <div class="index-pro-pic second"><img src="../../assets/images/pic01.png"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index-ad">
        <img src="../../assets/images/bg03.png">
      </div>
      <div class="index-news">
        <div class="index-news-content">
          <div class="cm-title-box">
            <img class="cm-title-topimg" src="../../assets/images/icon08.png">
            <div class="index-pro-title-textbox cm-title-bgbox">
              <span class="index-pro-zwtitle">新闻资讯</span>
              <span class="index-pro-ywtitle">New Information</span>
            </div>
          </div>
          <div class="index-news-con">
            <div class="index-news-box">
              <div class="index-news-img">
                <img src="../../assets/images/pic03.png">
              </div>
              <div class="index-news-info">
                <div class="index-news-info-title cm-ellipsis-1">酒藤知己映初心</div>
                <p class="index-news-info-des cm-ellipsis-2">茶，源于中国，经历千百年岁月蹉跎已经成为了中华文化的核心之一，发展至今已经涵盖了,岁月蹉跎已经成为了中华文化的核心之一</p>
                <div class="index-news-info-more" @click="goNewsDetaile(1)">查看更多</div>
              </div>
            </div>
            <div class="index-news-box">
              <div class="index-news-img">
                <img src="../../assets/images/pic03.png">
              </div>
              <div class="index-news-info">
                <div class="index-news-info-title cm-ellipsis-1">酒藤知己映初心</div>
                <p class="index-news-info-des cm-ellipsis-2">2019年8月22日，珠海御谷生物科技参加酒藤知己映初心活动珠海御谷生物科技参加酒藤知己映初心活动。。。</p>
                <div class="index-news-info-more" @click="goNewsDetaile(1)">查看更多</div>
              </div>
            </div>
            <div class="index-news-box">
              <div class="index-news-img">
                <img src="../../assets/images/pic03.png">
              </div>
              <div class="index-news-info">
                <div class="index-news-info-title cm-ellipsis-1">酒藤知己映初心</div>
                <p class="index-news-info-des cm-ellipsis-2">2019年8月22日，珠海御谷生物科技参加酒藤知己映初心活动珠海御谷生物科技参加酒藤知己映初心活动。。。</p>
                <div class="index-news-info-more" @click="goNewsDetaile(1)">查看更多</div>
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
  import { Toast } from 'vant'
  export default {
    name: "home",
    data() {
        return {
          title: '首页',
          active: 2,
          show: false,
          SwiperImg: [
            require('../../assets/images/banner01.png'),
            require('../../assets/images/banner01.png'),
            require('../../assets/images/banner01.png')
          ]
        }
    },
    created(){

    },
    methods:{
      goProductdetail(id){
        this.$router.toGo('/product/productdetail/'+id);
      },
      goToast(){
        this.show = true
      },
      goNewsDetaile(id){
        this.$router.toGo('/news/newsdetail/'+id);
      }
    },
    components:{
      CommonFooter
    }
  }
</script>

<style scoped lang="less">
  @import "../../styles/index.less";
  @import "../../styles/variable.less";
  .page-content{
    .home-bannerBox {
      width: 100%;
      .van-swipe {
        width: 100%;
        height: 100%;
        .bannerImg {
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
      }
    }
  }
  .index-intro {
    width: 100%;
    background: #ffffff;
  }
  .index-intro-content {
    margin: 50px auto;
  }
  .index-intro-info {
    .w(671);
    background-image: url(../../assets/images/bg01.png);
    box-shadow:0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
    .padding(30,0);
    margin: 0 auto;
  }
  .index-intro-info-title {
    text-align: center;
    font-family: PingFang-SC-Medium;
    .fs(30);
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    font-weight: 600;
    .mb(18);
  }

  .index-intro-left:before {
    position:absolute;
    content:"";
    bottom:12px;
    left:6px;
    top:80%;
    width:37%;
    background:#b9b9b9;
    z-index:-1;
    -webkit-box-shadow: 0 20px 15px #b9b9b9;
    -moz-box-shadow: 0 20px 15px #b9b9b9;
    box-shadow: 0 20px 15px #b9b9b9;
    -webkit-transform: rotate(-4deg);
    -moz-transform: rotate(-4deg);
    transform: rotate(-4deg);

  }
  .index-intro-right:before {
    position:absolute;
    content:"";
    bottom:12px;
    right: 6px;
    top:80%;
    width:37%;
    background:#b9b9b9;
    z-index:-1;
    -webkit-box-shadow: 0 20px 15px #b9b9b9;
    -moz-box-shadow: 0 20px 15px #b9b9b9;
    box-shadow: 0 20px 15px #b9b9b9;
    -webkit-transform: rotate(4deg);
    -moz-transform: rotate(4deg);
    transform: rotate(4deg);
  }
</style>
