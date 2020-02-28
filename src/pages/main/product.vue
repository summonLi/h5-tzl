<template>
  <div class="content-box">
    <div class="page-content">
      <div class="news-banner">
        <img src="../../assets/images/bannerproduct.png">
      </div>
      <div class="index-news">
        <div class="index-news-content">
          <div class="cm-title-box">
            <img class="cm-title-topimg" src="../../assets/images/icon08.png">
            <div class="index-pro-title-textbox cm-title-bgbox">
              <span class="index-pro-zwtitle">藤茶系列</span>
              <span class="index-pro-ywtitle">Ampelopsis tea series</span>
            </div>
          </div>
          <div class="product-con">
            <div class="product-con-top">
              <div class="product-top-left">
                <div class="product-top-left-img"><img src="../../assets/images/pic05.png"></div>
                <div class="product-top-left-info">
                  <div class="product-top-left-title cm-ellipsis-1">醉藤你</div>
                  <div class="product-top-left-mtitle cm-ellipsis-1">含化型即溶茶</div>
                  <p class="cm-ellipsis-1">含化冲泡两用</p>
                  <p class="cm-ellipsis-1">商务人士交际应酬好伴侣</p>
                  <p class="cm-ellipsis-1">先苦后甜“肝”之如饴</p>
                  <div class="product-top-left-btn" @click="goProductdetail(2)">查看详情 &gt;&gt;</div>
                </div>
              </div>
              <div class="product-top-left">
                <div class="product-top-left-info">
                  <div class="product-top-left-title cm-ellipsis-1">金藤爽</div>
                  <div class="product-top-left-mtitle cm-ellipsis-1">含化型即溶茶</div>
                  <p class="cm-ellipsis-1">含化冲泡两用</p>
                  <p class="cm-ellipsis-1">一条入口 咽喉倍感舒爽</p>
                  <p class="cm-ellipsis-1">轻装出行 方便携带</p>
                  <div class="product-top-left-btn" @click="goProductdetail(1)">查看详情 &gt;&gt;</div>
                </div>
                <div class="product-top-left-img"><img src="../../assets/images/pic06.png"></div>
              </div>
            </div>
            <div class="product-con-bottom">
              <div class="product-bottom-list" @click="goProductdetail(3)">
                <img class="product-bottom-pic" src="../../assets/images/pic07.png">
                <div class="product-bottom-info">
                  <div class="prouct-bottom-infotxt">
                    <div class="product-bottom-info-title cm-ellipsis-1">轻养型即溶茶·酒藤知己</div>
                    <div class="product-bottom-info-des cm-ellipsis-1">呵护‘益’生 健康随行</div>
                  </div>
                </div>
              </div>
              <div class="product-bottom-list" @click="goProductdetail(4)">
                <img class="product-bottom-pic" src="../../assets/images/pic08.png">
                <div class="product-bottom-info">
                  <div class="prouct-bottom-infotxt">
                    <div class="product-bottom-info-title cm-ellipsis-1">风味型即溶茶·明前绿藤</div>
                    <div class="product-bottom-info-des cm-ellipsis-1">明前嫩叶 口感清雅 </div>
                  </div>
                </div>
              </div>
              <div class="product-bottom-list" @click="goProductdetail(5)">
                <img class="product-bottom-pic" src="../../assets/images/pic09.png">
                <div class="product-bottom-info">
                  <div class="prouct-bottom-infotxt">
                    <div class="product-bottom-info-title cm-ellipsis-1">风味型即溶茶·玫瑰紫藤</div>
                    <div class="product-bottom-info-des cm-ellipsis-1">重瓣玫瑰 花香四溢</div>
                  </div>
                </div>
              </div>
              <div class="product-bottom-list" @click="goProductdetail(6)">
                <img class="product-bottom-pic" src="../../assets/images/pic10.png">
                <div class="product-bottom-info">
                  <div class="prouct-bottom-infotxt">
                    <div class="product-bottom-info-title cm-ellipsis-1">风味型即溶茶·红袍黑藤</div>
                    <div class="product-bottom-info-des cm-ellipsis-1">精选大红袍 底蕴浓厚</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index-news">
        <div class="index-news-content">
          <div class="cm-title-box">
            <img class="cm-title-topimg" src="../../assets/images/icon08.png">
            <div class="index-pro-title-textbox cm-title-bgbox">
              <span class="index-pro-zwtitle">其他产品</span>
              <span class="index-pro-ywtitle">Other products</span>
            </div>
          </div>
          <div class="product-con">
            <div class="product-con-bottom">
              <div class="product-bottom-list" @click="goProductdetail(7)">
                <img class="product-bottom-pic" src="../../assets/images/pic11.png">
                <div class="product-bottom-info">
                  <div class="prouct-bottom-infotxt">
                    <div class="product-bottom-info-title cm-ellipsis-1">藤之露茶具·碧波水漾</div>
                    <div class="product-bottom-info-des cm-ellipsis-1">如波似纹 晶莹剔透</div>
                  </div>
                </div>
              </div>
              <div class="product-bottom-list" @click="goProductdetail(8)">
                <img class="product-bottom-pic" src="../../assets/images/pic12.png">
                <div class="product-bottom-info">
                  <div class="prouct-bottom-infotxt">
                    <div class="product-bottom-info-title cm-ellipsis-1">藤之露配套饮水机</div>
                    <div class="product-bottom-info-des cm-ellipsis-1">方便快捷 安全可靠</div>
                  </div>
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
    name: "product",
    data(){
      return {

      }
    },
    components:{
      CommonFooter
    },
    mounted(){
    },
    methods:{
      goProductdetail(id){
        if(id == 8) {
          this.$toast("暂无该产品")
        }else{
          this.$router.toGo('/product/productdetail/'+id);
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";

</style>
