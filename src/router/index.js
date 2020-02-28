import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'//主框架

Vue.use(Router)

//需要左方向动画的路由用this.$router.toGo('***')
Router.prototype.toGo = function (path) {
  this.isLeft = true;
  this.isRight = false;
  this.push(path)
}

//需要右方向动画的路由用this.$router.goRight('***')
Router.prototype.goRight = function (path) {
  this.isLeft = false;
  this.isRight = true;
  this.push(path)
}

//需要返回按钮动画的路由用this.$router.goBack('***')
Router.prototype.goBack = function () {
  this.isLeft = false;
  this.isRight = true;
  this.go(-1)
}

//点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.toGoBack = function (path) {
  this.isLeft = false;
  this.isRight = true;
}

//点击浏览器前进按钮，此时不需要路由前进
Router.prototype.toGoIn = function (path) {
  this.isLeft = false;
  this.isRight = true;
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:'/home',
      children: [
        {
          path: '/home',
          name:'首页',
          component:(resolve) => require(['@/pages/main/home'],resolve)
        },
        {
          path: '/product',
          name:'产品中心',
          component:(resolve) => require(['@/pages/main/product'],resolve)
        },
        {
          path: '/news',
          name:'新闻资讯',
          component:(resolve) => require(['@/pages/main/news'],resolve)
        },
        {
          path: '/cooperation',
          name:'渠道合作',
          component:(resolve) => require(['@/pages/main/cooperation'],resolve)
        },
        {
          path: '/join',
          name:'人才招聘',
          component:(resolve) => require(['@/pages/main/join'],resolve)
        },
        {
          path: '/about',
          name:'关于我们',
          component:(resolve) => require(['@/pages/main/about'],resolve)
        },
        {
          path: '/contact',
          name:'联系我们',
          component:(resolve) => require(['@/pages/main/contact'],resolve)
        },
        {
          path:'/news/newsdetail/:id',//动态路由，传值
          name:'新闻资讯',
          component:(resolve) => require(['@/pages/main/newsdetail'],resolve)
        },
        {
          path:'/product/productdetail/:id',//动态路由，传值
          name:'产品中心',
          component:(resolve) => require(['@/pages/main/productdetail'],resolve)
        }
      ]
    },
    {
      path:'/subpages/goodsdetail',
      name: '商品详情',
      component:(resolve) => require(['@/pages/subpages/goodsdetail'],resolve)
    }
  ]
})
