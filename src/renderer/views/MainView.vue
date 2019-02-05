<template>
  <div class="main-view">
    <div class="sidebar">
      <div class="header">
        <ph-logo class="logo"></ph-logo>
        <div class="title">Passhub</div>
      </div>
      <div class="group-list">
        <ph-group-item
          v-for="(item, index) in groups"
          :item="item"
          :key="index"
          :class="{active: item.id === (group && group.id)}"
          :editable="(item.id === (group && group.id)) && editable"
          @click="onGroupSelect"
          @contextmenu="onContextMenu"
          @keyup="onUpdateGroup"
          @blur="onBlur"
        ></ph-group-item>
        <ph-group-addition></ph-group-addition>
      </div>
    </div>
    <ph-menu class="ph-main-menu" v-if="visible" :style="{ top: top + 'px'}">
      <ph-menu-item icon="trash-2" title="Delete" @click="onSetting('del')"></ph-menu-item>
      <ph-menu-item icon="edit" title="Edit" @click="onSetting('edit')"></ph-menu-item>
    </ph-menu>
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'main-view',
  data() {
    return {
      visible: false,
      editable: false,
      top: 0
    }
  },
  computed: {
    ...mapState(['groups', 'group'])
  },
  methods: {
    onBlur() {
      this.visible = false
      this.editable = false
    },
    onSetting(type) {
      if (type === 'edit') {
        this.editable = true
        this.visible = false
      } else {
        this.$store.dispatch('deleteGroup', this.group.id)
        this.visible = false
        this.editable = false
      }
    },
    onUpdateGroup(group, event) {
      const title = event.target.value
      if (!title || title === group.title) return
      this.$store.dispatch('updateGroup', {
        groupId: this.group.id,
        title
      })
      this.visible = false
      this.editable = false
    },
    onGroupSelect(group, event) {
      if (event.type === 'contextmenu') return
      if (this.visible) this.visible = false
      if (this.editable) this.editable = false

      this.$store.commit('SELECT_GROUP', group)
      this.$router.push({ name: 'entry', params: { groupId: group.id } })
    },
    onContextMenu(group, event) {
      this.visible = true
      this.top = event.clientY
      this.$store.commit('SELECT_GROUP', group)
    }
  },
  mounted() {
    this.$store.dispatch('fetchAllGroup')
  }
}
</script>
<style lang="less" scoped>
@import url('../styles/theme.less');
.main-view {
  display: flex;
  height: 100%;
  .sidebar {
    width: 200px;
    border-right: @border;
    display: flex;
    flex-direction: column;
    .header {
      width: 199px;
      height: 56px;
      padding: 12px 14px;
      background-color: @grey3;
      display: flex;
      align-items: center;
      .logo {
        width: 32px;
        height: 32px;
      }
      .title {
        flex: 1;
        margin-left: 8px;
        font-size: 22px;
        font-weight: 400;
        color: @textColor;
        user-select: none;
      }
    }
    .group-list {
      overflow: auto;
      flex: 1;
      background-color: @grey3;
    }
  }
  .ph-main-menu {
    position: fixed;
    left: 75px;
    top: 0;
    background-color: @white;
    transition: all 0.3s;
  }
  .container {
    flex: 1;
  }
}
</style>
