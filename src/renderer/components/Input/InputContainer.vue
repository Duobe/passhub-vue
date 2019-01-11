<template>
  <div class="input-container">
    <my-button class="button-sm button-left" @click="$emit('click', $event)" v-if="left">
      <slot name="left-icon"></slot>
    </my-button>
    <slot></slot>
    <my-button class="button-sm button-right" v-if="right" @click="$emit('click', $event)">
      <slot name="right-icon"></slot>
    </my-button>

    <my-button class="button-sm button-right" v-if="clear" @click="clearValue">
      <x-circle-icon class="custom-class"></x-circle-icon>
    </my-button>
  </div>
</template>
<script>
import { XCircleIcon, EyeIcon, EyeOffIcon } from "vue-feather-icons"

export default {
  name: "my-input-container",
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
  components: {
    XCircleIcon,
    EyeIcon,
    EyeOffIcon
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
