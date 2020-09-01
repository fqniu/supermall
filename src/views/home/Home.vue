<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物车</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@common/navbar/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  methods: {
    // 获取数据
    async getHomeData() {
      const res = await this.$request.get("/books");
      console.log(res);
    },
  },
  created() {
    // 1、请求数据
    this.getHomeData();
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>