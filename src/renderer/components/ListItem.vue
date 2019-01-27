<template>
  <div :class="['entry-item', { active }]" @click="click">
    <ph-icon :name="data.icon" size="28"></ph-icon>
    <div class="detail">
      <div class="title">{{data.title}}</div>
      <div class="description">{{data.description}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ph-entry-item",
  props: {
    data: Object,
    active: Boolean
  },
  methods: {
    click($event) {
      this.$emit('click', data)
    }
  }
}
</script>
<style lang="less">
@import url('../styles/theme.less');

.entry-item {
  position: relative;
  padding: 12px;
  min-height: 60px;
  display: flex;
  align-items: center;

  &:hover:not([disabled]){
    background-color: @grey3;
  }
  &.active:not([disabled]){
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
