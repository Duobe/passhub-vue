<template>
  <a
    class="button"
    :href="href"
    :disabled="disabled"
    :target="target"
    :rel="newRel"
    @click="$emit('click', $event)"
    v-if="href"
  >
    <slot></slot>
  </a>

  <button
    class="button"
    :type="type"
    :disabled="disabled"
    @click="$emit('click', $event)"
    v-else
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    href: String,
    target: String,
    rel: String,
    type: {
      type: String,
      default: "button"
    },
    disabled: Boolean
  },
  computed: {
    newRel() {
      if (this.target === "_blank") {
        return this.rel || "noopener"
      }

      return this.rel
    }
  }
};
</script>
<style lang="less" src="./button.less"></style>
