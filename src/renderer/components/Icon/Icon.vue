<template>
  <span class="ph-icon" @click="$emit('click', $event)">
    <feather-icon :name="name" :size="size" :strokeWidth="strokeWidth"></feather-icon>
  </span>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    },
    size: {
      type: String,
      default: '16'
    },
    strokeWidth: {
      type: String,
      default: '2'
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../styles/theme.less");

.ph-icon {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    stroke: @grey1;
  }
  &:hover {
    svg {
      stroke: @black;
    }
  }
  &:active {
    svg {
      stroke: @grey1;
    }
  }
}
</style>