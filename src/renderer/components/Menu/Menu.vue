<template>
  <div class="ph-menu">
    <slot></slot>
  </div>
</template>
<style lang="less" scoped>
@import url('../../styles/theme.less');
.ph-menu {
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border: @border;
  border-radius: @borderRadius;
}
</style>
