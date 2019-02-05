<template>
  <div class="ph-menu-item" @click="onClick">
    <ph-icon :name="icon" class="icon"></ph-icon>
    <span class="title">{{title}}</span>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'Type'
    },
    title: String
  },
  methods: {
    onClick($event) {
      this.$emit('click', $event)
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../styles/theme.less');
.ph-menu-item {
  display: flex;
  width: 100%;
  height: 32px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: @grey3;
  }
  .icon {
    width: 16px;
    height: 16px;
  }
  .title {
    margin-left: 8px;
    color: @textColor;
  }
}
</style>
