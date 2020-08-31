<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/home.svg" alt />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/home_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/category.svg" alt />
        </template>
          <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/category_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/cart.svg" alt />
        </template>
          <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/cart_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item>
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/profile.svg" alt />
        </template>
          <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/profile_active.svg" alt />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
