<template>
  <div class="record">
    <ph-icon :name="icon" size="28"></ph-icon>
    <ph-form>
      <ph-form-item
        v-for="(item, index) in records"
        v-bind:key="index"
        :name="item.name"
        :content="item.content"
        :type="item.type"
        :icon1="item.icon1"
        :icon2="item.icon2"
      >
      </ph-form-item>
    </ph-form>
    <ph-icon name="plus" class="add" size="22" @click="toggleDialog"></ph-icon>
    <ph-dialog
      :showDialog="showDialog"
      :closeFn="toggleDialog"
      :confirmFn="confirm"
      ></ph-dialog>
  </div>
</template>
<script>
export default {
  name: 'ph-record',
  props: {
    icon: {
      type: String,
      default: 'file-text'
    },
    data: Array,
    editRecordFn: Function
  },
  data() {
    return {
      showDialog: false,
      records: this.data
    }
  },
  watch: {
    data(newVal, oldVal) {
      this.records = newVal
    }
  },
  methods: {
    toggleDialog() {
      this.showDialog = !this.showDialog
    },
    confirm($event, data) {
      if (data.name && data.content) {
        this.$store.dispatch('insertItem', data).then(() => {
          this.toggleDialog()
          this.editRecordFn(data)
        })
      }
    },
  }
}
</script>
<style lang="less">
@import url('../styles/theme.less');

.record {
  overflow: auto;
  padding: 12px 14px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 450px;

  & > .icon {
    width: 32px;
    height: 32px;
    padding: 0;
    margin-bottom: 12px;
    &.add {
      border: @border;
      border-radius: @borderRadius;
      float: right;
    }
  }
}
</style>

