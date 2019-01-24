<template>
  <li
    class="menu-item"
    @click="handleClick"
    @contextmenu.prevent.stop="handlecontextmenu"
    :index="index"
    :class="classes"
    :href="href"
    :target="target"
    :disabled="disabled">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'ph-menu-item',
  props: {
    href: String,
    target: String,
    disabled: Boolean,
    activeIndex: {
      type: Number,
      default: 0
    },
    index: Number
  },
  computed: {
    classes() {
      return {
        'active': this.index === this.activeIndex
      }
    }
  },
  methods: {
    handleClick($event) {
      if (!this.disabled) {
        this.$emit('click', $event, this.index)
      }
    },
    handlecontextmenu($event) {
      if (!this.disabled) {
        this.$emit('optionClicked', $event, this.index)
      }
    }
  },
  mounted() {
  }
}
</script>