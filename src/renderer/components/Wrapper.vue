<template>
  <div class="wrapper">
    <header>
      <div class="logo">
        <div class="avatar">
          <ph-logo></ph-logo>
        </div>
        <div class="title">Passhub</div>
      </div>
      <ph-search></ph-search>
    </header>
    <ph-menu>
      <ph-menu-item
        :index="index"
        :activeIndex="activeIndex"
        @click="handleMenuItem"
        v-for="(item, index) in data"
        v-bind:key="index"
      >
        <ph-icon :name="item.icon"></ph-icon>
        <router-link :to="item.path">{{item.name}}</router-link>
      </ph-menu-item>
      <ph-menu-item>
        <ph-icon name="plus"></ph-icon>Add
      </ph-menu-item>
    </ph-menu>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import phSearch from './Search.vue'

export default {
  name: "wrapper",
  components: { phSearch },
  data() {
    return {
      data: [
        { path: `project/1`, name: 'All', icon: 'clock'},
        { path: `project/2`, name: 'Accounts', icon: 'plus'},
        { path: `project/3`, name: 'Games', icon: 'clock'}
      ],
      activeIndex: 1
    }
  },
  methods: {
    handleMenuItem($event, index) {
      this.activeIndex = index
    }
  }
};
</script>
<style lang="less">
@import url('../styles/theme.less');

.wrapper {
  height: 100%;
  header {
    display: flex;

    & > .logo {
      height: 56px;
      width: 200px;
      background-color: @grey3;
      border-right: @border;
      padding: 12px;
      .avatar {
        width: 32px;
        height: 32px;
        float: left;
        svg {
          width: 32px;
          height: 32px;
        }
      }
      .title {
        font-size:22px;
        font-weight:400;
        line-height: 1.5;
        margin-left: 8px;
        color: @textColor;
        float: left;
      }
    }

    .search {
      padding: 12px;
    }
  }
  .content {
    width: 250px;
    border-right: @border;
    border-top: @border;
    position: absolute;
    left: 200px;
    top: 56px;
    bottom: 0;
  }
}
</style>
