<template>
  <nav class="menu">
    <ul>
      <slot></slot>
    </ul>
    <slot name="options"></slot>
  </nav>
</template>
<script>
export default {
  name: "ph-menu",
}
</script>

<style lang="less" src="./menu.less"></style>
