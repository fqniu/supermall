<template>
  <div class="tab-bar-item">
    <!-- 注意插槽会被切换掉的 也就是说样式会被替换掉 可以给slot再套一个标签-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
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
.active {
  color: red;
}
</style>