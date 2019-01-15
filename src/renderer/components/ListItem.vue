<template>
  <div class="list-item">
    <ph-icon :name="icon" size="28"></ph-icon>
    <div class="detail">
      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ph-list-item",
  props: {
    title: String,
    description: String,
    icon: String
  }
}
</script>
<style lang="less">
@import url('../styles/theme.less');

.list-item {
  position: relative;
  padding: 12px;
  min-height: 60px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: @grey3;
  }
  .icon {
    height: 28px;
    width: 28px;
    padding: 0;
    vertical-align: text-top;
    border-radius: @borderRadius;
  }
  .detail {
    margin-left: 12px;
    color: @textColor;
    .title {
      font-weight: bold;
    }
  }
}
</style>
