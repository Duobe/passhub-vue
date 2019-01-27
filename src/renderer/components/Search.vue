<template>
  <div class="search">
    <ph-input-container>
      <ph-icon name="search"></ph-icon>
      <ph-input class="solid" v-model="keyword" autocomplete="new-keyword"></ph-input>
    </ph-input-container>
    <ph-icon name="plus" class="plus" @click="toggleDialog"></ph-icon>
    <ph-dialog
      :showDialog="showDialog"
      :closeFn="toggleDialog"
      :confirmFn="confirm"
      placeholder1="please enter title"
      placeholder2="please enter description"
      ></ph-dialog>
  </div>
</template>
<script>
export default {
  name: 'ph-search',
  props: {
    groupId: String
  },
  data() {
    return {
      keyword: '',
      showDialog: false
    }
  },
  watch: {
    keyword(newVal, oldVal) {
      this.$store.commit('filter', newVal)
    }
  },
  methods: {
    toggleDialog() {
      this.showDialog = !this.showDialog
    },
    confirm($event, data) {
      if (data.name && data.content && this.groupId) {
        this.$store.dispatch('createEntry', {
          groupId: this.groupId,
          icon: data.icon,
          title: data.name,
          description: data.content
        }).then(() => {
          this.toggleDialog()
          this.$store.commit('afterInsertEntry')
        })
      }
    }
  }
}
</script>
<style lang="less">
@import url('../styles/theme.less');

.search {
  display: flex;
  .plus {
    margin-left: 10px;
  }
  .input {
    padding: 0 8px 0 0;
    &-container {
      border: none;
      width: 180px;
      float: left;
      margin-right: 8px;
      background-color: @grey3;
    }
  }

  & > .icon {
    width: 32px;
    float: right;
    background-color: @inputColor;
    border-radius: @borderRadius;
    svg {
      stroke: @black;
    }
  }
}
</style>
