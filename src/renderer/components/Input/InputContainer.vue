<template>
  <div class="input-container">
    <slot name="left" class="button-sm button-left"></slot>

    <slot></slot>

    <slot name="right" class="button-sm button-right"></slot>

    <ph-icon name="x-circle" class="button-sm button-right" v-if="clear && !right" @click="clearValue"></ph-icon>
  </div>
</template>
<script>
export default {
  name: "ph-input-container",
  props: {
    clear: Boolean
  },
  data() {
    return {
      value: '',
      inputInstance: null
    }
  },
  computed: {
    hasValue() {
      return Boolean(this.value)
    }
  },
  methods: {
    clearValue() {
      console.log('clear')
      this.inputInstance.$el.value = ''
      this.inputInstance.$emit('input', '')
      this.setValue('')
    },
    setValue(value) {
      this.value = value
    }
  }
}
</script>
<style lang="less" src="./input.less"></style>
