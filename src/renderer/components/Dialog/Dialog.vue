<template>
  <div class="dialog" v-if="show">
    <div class="mask" @click="close"></div>
    <div class="dialog-content">
      <ph-icon :name="icon" size="36"></ph-icon>
      <div class="inputs">
        <ph-input-container>
          <ph-input v-model="name" :placeholder="placeholder1"></ph-input>
        </ph-input-container>
        <ph-input-container>
          <ph-input v-model="content" :placeholder="placeholder2"></ph-input>
        </ph-input-container>
      </div>
      <div class="buttons">
        <ph-button @click="close" class="button-md">cancel</ph-button>
        <ph-button class="solid button-md" @click="confirm">sure</ph-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ph-dialog',
  props: {
    icon: {
      type: String,
      default: 'file-text'
    },
    placeholder1: String,
    placeholder2: String,
    showDialog: {
      type: Boolean,
      default: false
    },
    closeFn: Function,
    confirmFn: Function
  },
  data() {
    return {
      name: '',
      content: '',
      show: false
    }
  },
  watch: {
    showDialog(oldVal, newVal) {
      this.show = !this.show;
    }
  },
  methods: {
    close($event) {
      this.$emit('click', $event)
      this.closeFn($event)
    },
    confirm($event) {
      this.$emit('click', $event)
      this.confirmFn($event, { name: this.name, content: this.content, icon: this.icon })
    }
  }
}
</script>
<style lang="less">
@import url('../../styles/theme.less');

.dialog {
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all .3s;
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(244, 244, 244, 0.9);
  }
  &-content {
    position: relative;
    box-shadow: 0px 2px 12px rgba(0,0,0,0.1);
    width: 280px;
    height: 160px;
    padding: 12px;
    border: @border;
    border-radius: @borderRadius;
    background-color: @white;

    .buttons {
      position: absolute;
      bottom: 12px;
      right: 12px;
    }
    .icon {
      width: 36px;
      height: 36px;
      padding: 2px;
      display: inline-block;
    }
    .inputs {
      position: absolute;
      top: 12px;
      left: 60px;
      right: 12px;

      .input-container {
        width: 100%;
        margin-bottom: 8px;
      }
    }
  }
}
</style>

