<template>
  <div class="header-tab">
    <div class="left-icon">
      <span @click="goBack" class="logo"></span>
    </div>
    <div class="tab-text">
      <span class="header-text">{{title}}</span>
    </div>
    <div class="right-icon" @click="showNav">
      <span class="set-icon"></span>
    </div>
    <div class="nav-box" v-show="isShowNav">
      <div class="nav-ul">
        <router-link class="nav-li" v-for="(item, index) in navList" :key="index" :to="item.path" :class="{'active': activeRoute == item.path}">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CommonHeader",
      data(){
        return {
          title:'首页',
          isShowNav:false,//false隐藏，true显示
          navList: [
            {
              'path':'/home',
              'name': '首 页'
            },
            {
              'path':'/product',
              'name':'产品中心'
            },
            {
              'path':'/news',
              'name':'新闻资讯'
            },
            {
              'path':'/cooperation',
              'name':'渠道合作'
            },
            {
              'path':'/join',
              'name':'人才招聘'
            },
            {
              'path':'/about',
              'name':'关于我们'
            },
            {
              'path':'/contact',
              'name':'联系我们'
            }
          ],
        }
      },
      methods:{
        goBack(){
          this.$router.goBack()
        },
        showNav(){
          //显示菜单栏
          this.isShowNav = !this.isShowNav;
        }
      },
      computed: {
        activeRoute (){
          this.isShowNav = false;
          this.title = this.$route.name;
          return this.$route.path;
        }
      }
    }
</script>

<style scoped lang="less">
  @import "~styles/index.less";
  @import "~styles/variable.less";
  .header-tab {
    position: relative;
    text-align: center;
    display: flex;
    z-index: 1;
    width: 100%;
    -webkit-box-shadow: 0.3px 0.9px 3px 0px rgba(10,2,4,0.22);
    -moz-box-shadow: 0.3px 0.9px 3px 0px rgba(10,2,4,0.22);
    box-shadow: 0.3px 0.9px 3px 0px rgba(10,2,4,0.22);
    .fs(@header-tab-size);
    background: @header-tab-bg;
    color: @header-tab-color;
    .h(88);
    .lh(88);
    .left-icon {
      flex: 1;
      position: relative;
      .logo {
        position: absolute;
        .bottom(10);
        .left(40);
        .w(28);
        .h(60);
        background-image: url("../assets/images/logo.png");
        -webkit-background-size: cover;
        background-size: cover;
      }
    }
    .tab-text {
      flex: 3;
      .header-text {
        font-family: PingFang-SC-Bold;
        .fs(36);
        font-weight: 600;
      }
    }
    .right-icon {
      flex: 1;
      position: relative;
      .set-icon {
        position: absolute;
        .bottom(23);
        .right(40);
        .w(55);
        .h(36);
        background-image: url("../assets/images/icon01.png");
        -webkit-background-size: cover;
        background-size: cover;
      }
    }
    .nav-box {
      position: absolute;
      .top(82);
      left: 0;
      width: 100%;
      border-top: 1px solid #dddddd;
      background: rgba(239,239,239,0.9);
      .nav-ul {
        display: flex;
        flex-wrap: wrap;
        .nav-li {
          width: 33.1%;
          .h(88);
          .lh(88);
          color: @header-tab-color;
          border-bottom: 1px solid #f6f6f6;
          border-right: 1px solid #f6f6f6;
        }
        .nav-li.active {
          color: #51c31f;
        }
        .nav-li:nth-child(3n) {
          border-right: none;
        }
      }
    }
  }
</style>
