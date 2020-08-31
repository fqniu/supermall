<template>
  <div class="tab-bar-item" @click="itemClick(path)">
    <!-- 注意插槽会被切换掉的 也就是说样式会被替换掉 可以给slot再套一个标签-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>-->
  </div>
</template>

<script>
export default {
  props: {
    // 希望是字符串类型
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      // 活跃的路由 如果找到返回 true
      // /home -> item1(/home) =true
      // /home -> item1(/category) =false
      // /home -> item1(/cart) =false
      // /home -> item1(/profile) =false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* 去掉图片间隙 */
  vertical-align: middle;
}
/* 活跃的样式 为了方便 封装 */
/* .active {
  color: red;
} */
</style>