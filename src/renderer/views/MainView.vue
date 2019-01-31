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
          @click="onGroupSelect"
          @contextmenu="onContextMenu"
        ></ph-group-item>
        <ph-group-addition></ph-group-addition>
      </div>
    </div>
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'main-view',
  computed: mapState({
    groups: state => state.groups,
    group: state => state.group
  }),
  methods: {
    onGroupSelect(group, event) {
      if (event.type === "contextmenu") return

      this.$store.commit('SELECT_GROUP', group)
      this.$router.push({ name: 'entry', params: { groupId: group.id } })
    },
    onContextMenu(group) {}
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
      }
    }
    .group-list {
      flex: 1;
      background-color: @grey3;
    }
  }
  .container {
    flex: 1;
  }
}
</style>
