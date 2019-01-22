<template>
  <span class="icon" @click="$emit('click', $event)">
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
      default: '16'
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

.icon {
  padding: 8px;
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