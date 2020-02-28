<template>
  <div class="content-box">
    <div class="page-content">
      <div class="news-banner">
        <img src="../../assets/images/bannernews.png">
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
                <div class="index-news-info-more" @click="goNewsDetaile(2)">查看更多</div>
              </div>
            </div>
            <div class="index-news-box">
              <div class="index-news-img">
                <img src="../../assets/images/pic03.png">
              </div>
              <div class="index-news-info">
                <div class="index-news-info-title cm-ellipsis-1">酒藤知己映初心</div>
                <p class="index-news-info-des cm-ellipsis-2">2019年8月22日，珠海御谷生物科技参加酒藤知己映初心活动珠海御谷生物科技参加酒藤知己映初心活动。。。</p>
                <div class="index-news-info-more" @click="goNewsDetaile">查看更多</div>
              </div>
            </div>
            <div class="index-news-box">
              <div class="index-news-img">
                <img src="../../assets/images/pic03.png">
              </div>
              <div class="index-news-info">
                <div class="index-news-info-title cm-ellipsis-1">酒藤知己映初心</div>
                <p class="index-news-info-des cm-ellipsis-2">2019年8月22日，珠海御谷生物科技参加酒藤知己映初心活动珠海御谷生物科技参加酒藤知己映初心活动。。。</p>
                <div class="index-news-info-more" @click="goNewsDetaile">查看更多</div>
              </div>
            </div>
            <div class="index-news-box">
              <div class="index-news-img">
                <img src="../../assets/images/pic03.png">
              </div>
              <div class="index-news-info">
                <div class="index-news-info-title cm-ellipsis-1">酒藤知己映初心</div>
                <p class="index-news-info-des cm-ellipsis-2">2019年8月22日，珠海御谷生物科技参加酒藤知己映初心活动珠海御谷生物科技参加酒藤知己映初心活动。。。</p>
                <div class="index-news-info-more" @click="goNewsDetaile">查看更多</div>
              </div>
            </div>
          </div>
          <div>
            <van-pagination
              v-model="currentPage"
              :show-page-size="3"
              :total-items="30"
              :items-per-page="6"
              :prev-text="prev"
              :next-text="next"
              force-ellipses
              @change="handleCurrentChange"
            />
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
        name: "news",
        data(){
          return {
            currentPage:1,
            prev:'<',
            next:'>'
          }
        },
        methods: {
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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
  @import "~styles/index.less";
  @import "~styles/variable.less";

</style>
<style lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";
  .van-pagination {
    justify-content: center;
    text-align: center;
    .fs(24);
    height: 22px;
    .van-pagination__item {
      width: 22px;
      min-width: 22px;
      height: 22px;
      line-height: 22px;
      color: #ffffff;
      margin-right: 5px;
      background-color: #999999;
      flex: none;
    }
  }
  .van-pagination .van-pagination__item--active {
    background: #8fc31f!important;
    color: #ffffff;
  }
  .van-pagination__prev {
    margin-right: 10px!important;
  }
  .van-pagination__next {
    margin-left: 5px;
  }
</style>
