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
<style lang="less">
@import url('../../styles/theme.less');
.form-item {
  margin-bottom: 2px;
  p.name {
    line-height: 30px;
    color: @textColor;
  }

  .screenshot {
    width: 320px;
    height: 80px;
    border: @border;
    border-radius: @borderRadius;
    display: flex;
    justify-items: center;
    img {
      margin: 8px auto;
      max-height: 64px;
    }
  }

  .remarks {
    width: 100%;
    height: 48px;
    padding: 4px;
    padding-right: 1px;
    resize: none;
    border-radius: @borderRadius;
    border: @border;
    color: @textColor;
    &:focus {
      outline: none;
      color: @black;
    }
    &-wrap {
      color: @textColor;
      position: relative;
      .word-length {
        position: absolute;
        bottom: 8px;
        right: 8px;
        font-size: 12px;
        user-select: none;
        background-color: @white;
        padding: 2px;
      }
    }
  }
  .input {
    padding: 0;
    &-container {
      width: 100%;
    }
  }
}
</style>