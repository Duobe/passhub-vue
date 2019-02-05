<template>
  <div class="ph-entry-item" @click="onClick" @contextmenu.prevent.stop="onContextMenu">
    <ph-icon :name="item.icon" size="28"></ph-icon>
    <div class="detail">
      <div class="title">{{item.title}}</div>
      <div class="description">{{item.description}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: { item: Object },
  methods: {
    onClick($event) {
      this.$emit('click', this.item, $event)
    },
    onContextMenu($event) {
      this.$emit('contextmenu', this.item, $event)
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../styles/theme.less');
.ph-entry-item {
  position: relative;
  padding: 12px;
  min-height: 60px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: @grey3;
  }
  &.active {
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 180px;
    }
    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 180px;
    }
  }
}
</style>
