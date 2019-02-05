<template>
  <div class="ph-field-item">
    <ph-input-container class="ph-name">
      <ph-input :value="item.title" @input="onUpdateFieldTitle"></ph-input>
    </ph-input-container>

    <ph-input-container v-if="item.icon === 'type'">
      <ph-icon :name="item.icon"></ph-icon>
      <ph-input
        v-model="value"
        @keyup.native="onInput"
        @input="onUpdateFieldValue"
        class="input"
        autocomplete="new-word"
      ></ph-input>
      <ph-icon name="clipboard" @click="copy"></ph-icon>
      <ph-icon name="trash-2" @click="onDeleteField"></ph-icon>
    </ph-input-container>
    <ph-input-container v-else>
      <ph-icon :name="item.icon"></ph-icon>
      <ph-input
        v-model="value"
        :type="type"
        @keyup.native="onInput"
        @input="onUpdateFieldValue"
        class="input"
        autocomplete="new-word"
      ></ph-input>
      <ph-icon name="eye" @click="onClickButton" v-show="type === 'text'"></ph-icon>
      <ph-icon name="eye-off" @click="onClickButton" v-show="type === 'password'"></ph-icon>
      <ph-icon name="clipboard" @click="copy"></ph-icon>
      <ph-icon name="trash-2" @click="onDeleteField"></ph-icon>
    </ph-input-container>
  </div>
</template>
<script>
import * as cp from 'copy-text-to-clipboard'

export default {
  props: { item: Object },
  data() {
    return {
      value: this.item.value,
      type: this.item.icon === 'lock' ? 'password' : 'text'
    }
  },
  computed: {},
  methods: {
    onClickButton() {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    onUpdateFieldValue(value) {
      this.$store.dispatch('updateFieldValue', {
        id: this.item.id,
        entryId: this.item.entryId,
        value
      })
    },
    onUpdateFieldTitle(title) {
      this.$store.dispatch('updateFieldTitle', {
        id: this.item.id,
        entryId: this.item.entryId,
        title
      })
    },
    onDeleteField() {
      this.$store.dispatch('deleteField', {
        id: this.item.id,
        entryId: this.item.entryId
      })
    },
    onInput(event) {
      this.value = event.target.value
    },
    copy() {
      cp(this.value)
    }
  }
}
</script>
<style lang='less' scoped>
@import url('../../styles/theme.less');
.ph-field-item {
  .ph-name {
    border: none;
    .ph-input {
      border: none;
      padding: 0;
    }
  }
  .input {
    border: none;
    padding: 0;
  }
}
</style>
