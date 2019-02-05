<template>
  <div class="ph-create-input" v-if="canCreate">
    <ph-input-container>
      <ph-icon :name="icon" class="icon"></ph-icon>
      <ph-input @keyup.native="onGroupCreate" v-model.trim="title" v-focus class="solid"></ph-input>
    </ph-input-container>
  </div>
  <div class="ph-group-add" @click="onClick" v-else>
    <ph-icon name="plus"></ph-icon>
    <span>Add</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      title: '',
      canCreate: false,
      icon: 'inbox'
    }
  },
  computed: mapState({
    group: state => state.group
  }),
  methods: {
    onOutside(event) {
      if (
        event.target.closest('.ph-create-input') ||
        event.target.closest('.ph-group-add')
      )
        return
      if (this.canCreate) {
        this.title = ''
        this.canCreate = false
      }
    },
    onClick() {
      this.canCreate = true
    },
    onGroupCreate() {
      if (this.title.length <= 0 || event.key !== 'Enter') return

      this.$store.dispatch('createGroup', {
        title: this.title,
        icon: this.icon
      })
      this.canCreate = false
      this.title = ''
      if (this.group) {
        this.$router.push({ name: 'entry', params: { groupId: this.group && this.group.id } })
      }
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
<style lang="less" scoped>
@import url('../../styles/theme.less');
.ph-create-input {
  padding: 4px;
  transition: all 0.3s;
  .icon {
    padding: 8px;
  }
  .solid {
    padding-left: 0;
  }
}
.ph-group-add {
  height: 42px;
  padding-left: 2px;
  display: flex;
  align-items: center;
  user-select: none;
  transition: all 0.3s;
  color: @textColor;
  &:hover {
    background-color: @grey2;
  }
}
</style>
