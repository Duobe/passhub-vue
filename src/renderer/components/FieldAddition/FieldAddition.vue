<template>
  <div class="ph-field-addition">
    <ph-icon name="plus" class="ph-icon-plus" @click="onButtonClick"></ph-icon>
    <ph-menu class="ph-field-menu" v-if="visible">
      <ph-menu-item icon="type" title="Text" @click="onFieldCreate('type')"></ph-menu-item>
      <ph-menu-item icon="lock" title="Password" @click="onFieldCreate('lock')"></ph-menu-item>
    </ph-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    onOutside(event) {
      if (event.target.closest('.ph-field-addition')) return
      if (this.visible) {
        this.visible = false
      }
    },
    onButtonClick() {
      this.visible = true
    },
    onFieldCreate(icon) {
      const entryId = this.$route.params.entryId
      this.$store.dispatch('createField', {
        entryId,
        icon,
        title: icon === 'type' ? 'Text' :'Password',
        value: ''
      })
      this.visible = false
    }
  },
  created() {
    document.addEventListener('click', this.onOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onOutside)
  }
}
</script>
<style lang='less' scoped>
@import url('../../styles/theme.less');
.ph-field-addition {
  .ph-icon-plus {
    position: fixed;
    right: 14px;
    bottom: 14px;
    border: @border;
    border-radius: @borderRadius;
    background-color: @white;
    &:hover {
      border-color: @black;
    }
  }
  .ph-field-menu {
    position: fixed;
    right: 14px;
    bottom: 55px;
    background-color: @white;
    transition: all 0.3s;
  }
}
</style>