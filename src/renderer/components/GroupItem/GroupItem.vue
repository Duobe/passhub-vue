<template>
  <div class="ph-group-item" @click="onClick" @contextmenu.prevent.stop="onContextMenu">
    <ph-icon :name="item.icon"></ph-icon>
    <span>{{item.title}}</span>
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
.ph-group-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  list-style: none;
  height: 42px;
  padding-left: 4px;
  color: @textColor;
  user-select: none;
  transition: background-color 0.3s;
  &:hover { background-color: @grey2; }
  &.active {
    position: relative;
    color: @black;

    svg {
      stroke: @black;
    }

    &::before {
      position: absolute;
      display: block;
      content: '';
      left: 0;
      height: 42px;
      width: 4px;
      background-color: @grey1;
    }
  }
}
</style>
