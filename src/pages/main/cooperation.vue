<template>
  <div class="content-box">
    <div class="page-content">
      <div class="news-banner">
        <img src="../../assets/images/bannercooperation.png">
      </div>
      <div class="index-news">
        <div class="index-news-content">
          <div class="cm-title-box">
            <img class="cm-title-topimg" src="../../assets/images/icon08.png">
            <div class="index-pro-title-textbox cm-title-bgbox">
              <span class="index-pro-zwtitle">渠道合作</span>
              <span class="index-pro-ywtitle">Channel cooperation</span>
            </div>
          </div>
          <div class="cooperation-info">
            <p>藤之露系列即溶茶，在品牌推广、营销管理、督导培训、售后服务等全方面支持加盟商，强化藤之露品牌在加盟区域内的综合影响力的同时，不断协助加盟商获取更多发展空间。</p>
            <p>联系人：郭先生    加盟电话：19928336699</p>
            <p>联系地址：广东省珠海市香洲区兴华路106号</p>
          </div>
        </div>
      </div>
      <div class="cooperation-ideaBox">
        <div class="cooperation-idea-con">
          <div class="cooperation-idea-li">
            <div class="cooperation-idea-index">01</div>
            <div class="cooperation-idea-text">统一的经营理念</div>
          </div>
          <div class="cooperation-idea-li">
            <div class="cooperation-idea-index">02</div>
            <div class="cooperation-idea-text">注重产品的品质</div>
          </div>
          <div class="cooperation-idea-li">
            <div class="cooperation-idea-index">03</div>
            <div class="cooperation-idea-text">大力度的品牌支持</div>
          </div>
          <div class="cooperation-idea-li">
            <div class="cooperation-idea-index">04</div>
            <div class="cooperation-idea-text">实现活动落地支持</div>
          </div>
          <div class="cooperation-idea-li">
            <div class="cooperation-idea-index">05</div>
            <div class="cooperation-idea-text">自我提升进修机会</div>
          </div>
          <div class="cooperation-idea-li">
            <div class="cooperation-idea-index">06</div>
            <div class="cooperation-idea-text">可持续的产品开发</div>
          </div>
        </div>
      </div>
      <div class="index-news-content">
        <div class="cm-title-box" style="padding-top: 30px;">
          <img class="cm-title-topimg" src="../../assets/images/icon08.png">
          <div class="index-pro-title-textbox cm-title-bgbox">
            <span class="index-pro-zwtitle">加盟须知</span>
            <span class="index-pro-ywtitle">Affiliate Policy</span>
          </div>
        </div>
        <div class="cooperation-info pconter">
          <p>认同藤之露品牌文化；</p>
          <p>了解公司和加盟商的关系，愿意服从公司管理；</p>
          <p>对消费需求有一定了解，具备市场营销意识和店铺管理知识；</p>
          <p>具有一定的经济、投资实力；</p>
          <p>具有良好的商业信誉及商业道德。</p>
        </div>
      </div>
      <div class="cooperation-leavemsg">
        <div class="cooperation-leavemsg-con">
          <div class="cooperation-leavemsg-title">加盟留言</div>
          <div class="cooperation-leavemsg-info">
            <div class="cooperation-leavemsg-info-inputbox">
              <span>姓名：</span>
              <input class="cooperation-leavemsg-info-input" type="text" name="name" autocomplete="off">
            </div>
            <div class="cooperation-leavemsg-info-inputbox">
              <span>电话：</span>
              <input class="cooperation-leavemsg-info-input" type="text" name="phone" autocomplete="off">
            </div>
            <div class="cooperation-leavemsg-info-inputbox">
              <span>留言：</span>
              <textarea class="cooperation-leavemsg-info-input cooperation-textarea" type="text" name="name" autocomplete="off"></textarea>
            </div>
            <div class="cooperation-leavemsg-info-btnbox">
              <span class="cooperation-leavemsg-info-btn">提 交</span>
              <span class="cooperation-leavemsg-info-tip">*提交留言后会有专门给您联系！</span>
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
      name: "cooperation",
      components:{
        CommonFooter
      }
    }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";
</style>
