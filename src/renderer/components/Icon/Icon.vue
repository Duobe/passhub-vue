<template>
  <span class="icon">
    <feather-icon :name="name" :size="size" :strokeWidth="strokeWidth"></feather-icon>
  </span>
</template>
<script>
export default {
  name: 'ph-icon',
  props: {
    name: {
      type: String
    },
    size: {
      type: String,
      default: '18'
    },
    strokeWidth: {
      type: String,
      default: '2'
    }
  }
}
</script>

<style lang="less">
@import url("../../styles/theme.less");

svg {
  stroke: @grey1;
}
</style>