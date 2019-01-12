<template>
  <div class="input-container">
    <ph-button class="button-sm button-left" v-if="left">
      <slot name="left-icon"></slot>
    </ph-button>

    <slot></slot>

    <ph-button class="button-sm button-right" v-if="right">
      <slot name="right-icon"></slot>
    </ph-button>

    <ph-button class="button-sm button-right" v-if="clear && !right" @click="clearValue">
      <ph-icon name="x-circle"></ph-icon>
    </ph-button>
  </div>
</template>
<script>
export default {
  name: "ph-input-container",
  props: {
    left: Boolean,
    right: Boolean,
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
