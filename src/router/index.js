import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=> import('../views/home/Home.vue')
const Cart =()=> import('../views/cart/Cart.vue')
const Category =()=> import('../views/category/Category.vue')
const Profile =()=> import('../views/profile/Profile.vue')

// 1、安装使用插件
Vue.use(VueRouter)


const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 2、创建路由对象
const router = new VueRouter({
  routes,
  mode:'history'
})

// 多次点击同一个路由时报错
// 当路由跳转为push时 用下面的代码修改报错
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
// 当路由跳转为replace时 用下面的代码修改报错
const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 3、导出router
export default router