<template>
  <div
    class="ph-group-item"
    @click="onClick"
    @contextmenu.prevent.stop="onContextMenu"
    v-if="!editable"
  >
    <ph-icon :name="item.icon"></ph-icon>
    <span>{{item.title}}</span>
  </div>

  <div class="ph-group-input" v-else>
    <ph-input-container>
      <ph-icon :name="item.icon" class="icon"></ph-icon>
      <ph-input @keyup.enter.native="onSave" v-focus class="solid" :value="item.title" @blur.native="onBlur"></ph-input>
    </ph-input-container>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
    editable: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    onClick($event) {
      this.$emit('click', this.item, $event)
    },
    onSave($event) {
      this.$emit('keyup', this.item, $event)
    },
    onBlur($event) {
      this.$emit('blur', $event)
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
  &:hover {
    background-color: @grey2;
  }
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
.ph-group-input {
  padding: 4px;
  transition: all 0.3s;
  .icon {
    padding: 8px;
  }
  .solid {
    padding-left: 0;
  }
}
</style>
