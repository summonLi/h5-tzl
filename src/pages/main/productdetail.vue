<template>
  <div class="content-box">
    <div class="page-content">
<!--      <div class="productdetail-nav">-->
<!--        <ul class="productdetail-navul" :style="{left: navLeft + 'px'}">-->
<!--          <li class="productdetail-navli" @click="goProductdetail(item.id)" :class="item.id == currentId?'active':''" v-for="(item,index) in result">{{item.name}}</li>-->
<!--        </ul>-->
<!--      </div>-->
      <div>
        <van-tabs @click="goProductdetail" v-model="currentId">
          <van-tab v-for="(item,index) in results" :name="item.id" :key="item.id" :title="item.name"></van-tab>
        </van-tabs>
      </div>
      <div class="news-banner">
        <img v-if="item.id == currentId" v-for="(item,index) in results" :key="item.id" :src="item.bannerImg">
      </div>
      <div class="index-news">
        <div class="index-news-content">
          <div class="cm-title-box">
            <img class="cm-title-topimg" src="../../assets/images/icon08.png">
            <div class="index-pro-title-textbox cm-title-bgbox">
              <span class="index-pro-zwtitle">产品详情</span>
              <span class="index-pro-ywtitle">Product details</span>
            </div>
          </div>
          <div class="prodectdetail-content" v-if="item.id == currentId" v-for="(item,index) in results" :key="item.id">
            <p class="productImg">
              <img :src="item" v-for="(item,index) in item.productdetails">
            </p>
          </div>
        </div>
      </div>
      <CommonFooter></CommonFooter>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import CommonFooter from '@/components/CommonFooter'
  // import productData from './static/productdetail.json'
  // var result = require('../../static/productdetail.json')
  export default {
    name: "product",
    data(){
      return {
        result:[],
        currentId:0,//当前产品id
        results: [
          {
            "id": 1,
            "name": "金藤爽",
            "bannerImg": require("../../assets/images/product/01/b01.png"),
            "productdetails":[require('../../assets/images/product/01/01.jpg'),require('../../assets/images/product/01/02.jpg'),require('../../assets/images/product/01/03.jpg'),require('../../assets/images/product/01/04.jpg'),require('../../assets/images/product/01/05.jpg')],
            "productdetail": "<p class='productImg'><img src='https://www.mercymodest.com/app/static/img/bg02.649f313.png'><img src='require('../../assets/images/product/01/02.jpg')'><img src='../../assets/images/product/01/03.jpg'><img src='../../assets/images/product/01/04.jpg'><img src='../../assets/images/product/01/05.jpg'></p>"
          },
          {
            "id": 2,
            "name": "醉藤你",
            "bannerImg": require("../../assets/images/product/02/b01.png"),
            "productdetails":[require('../../assets/images/product/02/01.jpg'),require('../../assets/images/product/02/02.jpg'),require('../../assets/images/product/02/03.jpg'),require('../../assets/images/product/02/04.jpg'),require('../../assets/images/product/02/05.jpg')],
            "productdetail": "<p class='productImg'><img src='../../assets/images/product/02/01.jpg'><img src='../../assets/images/product/02/02.jpg'><img src='../../assets/images/product/02/03.jpg'><img src='../../assets/images/product/02/04.jpg'><img src='../../assets/images/product/02/05.jpg'></p>"
          },
          {
            "id": 3,
            "name": "酒藤知己",
            "bannerImg": require("../../assets/images/product/03/b01.png"),
            "productdetails":[require('../../assets/images/product/03/01.jpg'),require('../../assets/images/product/03/02.jpg'),require('../../assets/images/product/03/03.jpg'),require('../../assets/images/product/03/04.jpg'),require('../../assets/images/product/03/05.jpg')],
            "productdetail": "<p class='productImg'><img src='../../assets/images/product/03/01.jpg'><img src='../../assets/images/product/03/02.jpg'><img src='../../assets/images/product/03/03.jpg'><img src='../../assets/images/product/03/04.jpg'><img src='../../assets/images/product/03/05.jpg'></p>"
          },
          {
            "id": 4,
            "name": "明前绿藤",
            "bannerImg": require("../../assets/images/product/04/b01.jpg"),
            "productdetails":[require('../../assets/images/product/04/01.jpg'),require('../../assets/images/product/01/02.jpg'),require('../../assets/images/product/04/03.jpg'),require('../../assets/images/product/04/04.jpg'),require('../../assets/images/product/04/05.jpg')],
            "productdetail": "<p class='productImg'><img src='../../assets/images/product/04/01.jpg'><img src='../../assets/images/product/04/02.jpg'><img src='../../assets/images/product/04/03.jpg'><img src='../../assets/images/product/04/04.jpg'><img src='../../assets/images/product/04/05.jpg'></p>"
          },
          {
            "id": 5,
            "name": "玫瑰紫藤",
            "bannerImg": require("../../assets/images/product/05/b01.png"),
            "productdetails":[require('../../assets/images/product/05/01.jpg'),require('../../assets/images/product/05/02.jpg'),require('../../assets/images/product/05/03.jpg'),require('../../assets/images/product/05/04.jpg'),require('../../assets/images/product/05/05.jpg')],
            "productdetail": "<p class='productImg'><img src='../../assets/images/product/05/01.jpg'><img src='../../assets/images/product/05/02.jpg'><img src='../../assets/images/product/05/03.jpg'><img src='../../assets/images/product/05/04.jpg'><img src='../../assets/images/product/05/05.jpg'></p>"
          },
          {
            "id": 6,
            "name": "红袍黑藤",
            "bannerImg": require("../../assets/images/product/06/b01.png"),
            "productdetails":[require('../../assets/images/product/06/01.jpg'),require('../../assets/images/product/06/02.jpg'),require('../../assets/images/product/06/03.jpg'),require('../../assets/images/product/06/04.jpg'),require('../../assets/images/product/06/05.jpg')],
            "productdetail": "<p class='productImg'><img src='../../assets/images/product/06/01.jpg'><img src='../../assets/images/product/06/02.jpg'><img src='../../assets/images/product/06/03.jpg'><img src='../../assets/images/product/06/04.jpg'><img src='../../assets/images/product/06/05.jpg'></p>"
          }
          ,
          {
            "id": 7,
            "name": "碧波水漾",
            "bannerImg": require("../../assets/images/product/07/b01.png"),
            "productdetails":[require('../../assets/images/product/07/01.jpg'),require('../../assets/images/product/07/02.jpg')],
            "productdetail": "<p class='productImg'><img src='../../assets/images/product/02/01.jpg'><img src='../../assets/images/product/02/02.jpg'><img src='../../assets/images/product/02/03.jpg'><img src='../../assets/images/product/02/04.jpg'><img src='../../assets/images/product/02/05.jpg'></p>"
          }
          // ,
          // {
          //   "id": 8,
          //   "name": "饮水机",
          //   "bannerImg": require("../../assets/images/product/01/b01.png"),
          //   "productdetails":[require('../../assets/images/product/01/01.jpg'),require('../../assets/images/product/01/02.jpg'),require('../../assets/images/product/01/03.jpg'),require('../../assets/images/product/01/04.jpg'),require('../../assets/images/product/01/05.jpg')],
          //   "productdetail": "<p class='productImg'><img src='../../assets/images/product/01/01.jpg'><img src='../../assets/images/product/01/02.jpg'><img src='../../assets/images/product/01/03.jpg'><img src='../../assets/images/product/01/04.jpg'><img src='../../assets/images/product/01/05.jpg'></p>"
          // }
        ]
      }
    },
    components:{
      CommonFooter
    },
    mounted(){
      //this.getdata();
    },
    activated(){
      this.$nextTick(() => {
        this.currentId = parseInt(this.$route.params.id);
      })
    },
    methods:{
      goProductdetail(name,title){
        this.currentId = parseInt(name);
        this.$router.toGo('/product/productdetail/'+name);
      },
      getdata(){
        var that = this;
        axios.get('/api/product').then((res) => {
          that.result = res.data.data;
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";

</style>
<style lang="less">
  .productImg img {
    width: 100%;
    display: block;
  }
  .van-tabs--line .van-tabs__wrap {
    height: 37px;
  }
  .van-tabs {
    background: #333333;
  }
  .van-tabs__nav {
    background-color: #333333;
  }
  .van-tab {
    line-height: 37px;
    color: #e9e9e9;
  }
  .van-tab--active {
    color: #ffffff;
  }
  .van-tabs__nav--line {
    margin-bottom: 0;
  }
  .van-tabs__line {
    z-index: 0;
  }
</style>
