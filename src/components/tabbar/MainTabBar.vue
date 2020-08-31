<template>
  <tab-bar>
    <!-- 这里没必要加 : 只是为了传递字符串，不是变量 其中的activeColor是为了让使用者自己修改颜色 -->
    <tab-bar-item path="/home" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbar/home.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabbar/home_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbar/category.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabbar/category_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbar/cart.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabbar/cart_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbar/profile.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img src="../../assets/img/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar.vue";
import TabBarItem from "./TabBarItem.vue";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>