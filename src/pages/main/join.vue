<template>
  <div class="content-box">
    <div class="page-content">
      <div class="news-banner">
        <img src="../../assets/images/bannerjoin.png">
      </div>
      <div class="index-news">
        <div class="index-news-content">
          <div class="cm-title-box">
            <img class="cm-title-topimg" src="../../assets/images/icon08.png">
            <div class="index-pro-title-textbox cm-title-bgbox">
              <span class="index-pro-zwtitle">人才理念</span>
              <span class="index-pro-ywtitle">Talent Concept</span>
            </div>
          </div>
          <div class="join-intro">
            <p class="p1">秉持“尊重人的价值、开发人的潜能、升华人的心灵”人才工作宗旨，我们希望在这里，普通的人变成优秀的人，优秀的人变成卓越的人，源源不断的人在这里实现自己的人生梦想。</p>
            <div class="p2">
              <p class="join-intro-spanT">尊重人的价值</p>
              <p class="join-intro-span">倡导企业价值与员工价值的共同成长，随着企业的发展，员工也获得与自身付出相适应的报酬与岗位，实现价值认可。</p>
              <p>要让员工因有御谷生物科技的工作经历而产生御谷生物品牌效应，拥有更高的市场价值。</p>
            </div>
            <div class="p3">
              <p class="join-intro-spanT">开发人的潜能</p>
              <p class="join-intro-span">御谷把人才发展置于战略高度，不断给员工提供学习的机会、工作的机会、挑战自我的机会，这是御谷对人最大的尊重，对员工最大的善。</p>
              <p>御谷努力优化人才选拔、培养、使用、保留机制，强调业绩导向使用人，科学评价选拔人，全方位多层次培养人，充分挖掘人的潜能，做到人尽其才。</p>
            </div>
            <div class="p4">
              <p class="join-intro-spanT">升华人的心灵</p>
              <p class="join-intro-span">遵循“一切以人为本，人口驱动增长，尊重人文精神，改善人们生活” 的经营理念，御谷所有业务活动为人们生活得更好而存在。这是御谷人工作、生活、成长的意义，也是御生人更高层次的精神追求。</p>
              <p>御谷通过文化培训、价值观塑造、机制激励、工作历练等方式，营造一种催人奋进、促人成长的氛围，激发员工的事业心、责任感、使命感，引领员工探索工作、生命的意义，致力于更高层次的精神升华，实现超越个人利益之上的追求。</p>
            </div>

            <div class="cm-title-box">
              <img class="cm-title-topimg" src="../../assets/images/icon08.png">
              <div class="index-pro-title-textbox cm-title-bgbox">
                <span class="index-pro-zwtitle">人才引进</span>
                <span class="index-pro-ywtitle">Talent introduction</span>
              </div>
            </div>
            <div class="join-recruitment">
              <div class="join-recruitment-box">
                <div class="join-recruitment-title">岗位名称：平面设计<span class="join-down" :class="isShow?'join-up':''" @click="onHide"></span></div>
                <div class="join-recruitment-info" v-show="isShow">
                  <div class="join-recruitment-info-title">岗位名称： 平面设计</div>
                  <div class="join-recruitment-info-stile">岗位职责：</div>
                  <p>1、协助负责公司品牌相关及周边延展的平面设计；</p>
                  <p>2、协助线下会议、品牌推广等活动，协助制作相关的配套设计；</p>
                  <p>3、协助采购物料制作输出；</p>
                  <p>4、协助负责线上市场推广物料设计；</p>
                  <p>5、完成领导交办的其他工作任务。</p>
                  <div class="join-recruitment-info-stile">任职要求：</div>
                  <p>1、本科及以上学历，美术相关专业；</p>
                  <p>2、能熟练使用Photoshop/illustrator/Coreldrew/等设计软件；</p>
                  <p>3、主动性高、耐心细致，能准确表达设计思路，</p>
                  <p>4、具备良好的团队精神和沟通能力，责任心强。</p>
                </div>
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
    name: "join",
    data(){
      return {
        isShow: true
      }
    },
    methods:{
      onHide(){
        this.isShow = !this.isShow;
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
