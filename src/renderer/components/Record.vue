<template>
  <div class="record">
    <ph-icon :name="icon" size="28"></ph-icon>
    <ph-form>
      <ph-form-item
        v-for="(item, index) in data"
        v-bind:key="index"
        :name="item.name"
        :content="item.content"
        :type="item.type"
        :icon1="item.icon1"
        :icon2="item.icon2"
      >
      </ph-form-item>
    </ph-form>
    <ph-icon name="plus" class="add" size="22"></ph-icon>
  </div>
</template>
<script>
export default {
  name: 'ph-record',
  props: {
    icon: {
      type: String,
      default: 'file-text'
    },
    data: Array
  },
  mounted() {
  }
}
</script>
<style lang="less">
@import url('../styles/theme.less');

.record {
  overflow: auto;
  padding: 12px 14px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 450px;

  & > .icon {
    width: 32px;
    height: 32px;
    padding: 0;
    margin-bottom: 12px;
    &.add {
      border: @border;
      border-radius: @borderRadius;
      float: right;
    }
  }
}
</style>

