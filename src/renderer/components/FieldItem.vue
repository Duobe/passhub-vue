<template>
  <div class="field-item">
    <p class="name">{{title}}</p>
    <ph-input-container>
      <ph-icon :name="iconType"></ph-icon>
      <ph-input
        v-model="value"
        :type="type"
        autocomplete="new-word"
        ></ph-input>
      <ph-icon :name="eye" v-if="eye" @click="togglePassword"></ph-icon>
      <ph-icon name="clipboard" @click="copy"></ph-icon>
    </ph-input-container>
  </div>
</template>
<script>
import * as cp from 'copy-text-to-clipboard'

const ICONS_TYPE = {
  user: 'user',
  password: 'lock',
  text: 'type'
}

export default {
  name: "ph-field-item",
  props: {
    data: Object
  },
  data() {
    return {
      title: this.data.title,
      value: this.data.value,
      eye: '',
      type: 'text'
    }
  },
  computed: {
    iconType() {
      if (!this.title) return ICONS_TYPE['text']

      const matched = this.title.match(/(password)|(pwd)|(name)|(username)|(user)/g)[0]
      if (matched.join('-').match(/(password)|(pwd)/g).length >= 1) {
        this.type = 'password'
        this.eye = 'eye-off'
      }
      return ICONS_TYPE[matched]
    }
  },
  methods: {
    togglePassword() {
      if (this.eye.contains('off')) {
        this.eye = 'eye'
        this.type = 'text'
      } else {
        this.eye = 'eye-off'
        this.type = 'password'
      }
    },
    copy() {
      cp(this.value)
    }
  }
}
</script>
<style lang="less">
@import url("../styles/theme.less");
.field-item {
}
</style>
