<template>
  <div class="form-item" v-if="type === 'image'">
    <p class="name" v-html="name"></p>
    <div class="screenshot">
      <img :src="value" alt="alt"/>
    </div>
  </div>

  <div class="form-item" v-else-if="type === 'remarks'">
    <p class="name" v-html="name"></p>
    <div class="remarks-wrap">
      <textarea
        class="remarks"
        v-model="value"
        :maxlength="maxlength"
      ></textarea>
      <div class="word-length">{{wordCount}}</div>
    </div>
  </div>

  <div class="form-item" v-else>
    <p class="name" v-html="name"></p>
    <ph-input-container>
      <ph-icon :name="icon1"></ph-icon>
      <ph-input autocomplete="new-word" value="value" :type="type"></ph-input>
      <ph-icon :name="icon2"></ph-icon>
    </ph-input-container>
  </div>
</template>
<script>
export default {
  name: 'ph-form-item',
  props: {
    content: String,
    name: {
      type: String,
      default: 'Name'
    },
    alt: {
      type: String,
      default: 'image'
    },
    type: {
      type: String,
      default: 'text'
    },
    icon1: {
      type: String,
      default: 'square'
    },
    icon2: {
      type: String,
      default: 'square'
    }
  },
  data() {
    return {
      maxlength: '500',
      value: this.content
    }
  },
  computed: {
    wordCount () {
      return this.value.length + ' / ' + this.maxlength
    }
  }
}
</script>
<style lang="less" src="./form.less"></style>