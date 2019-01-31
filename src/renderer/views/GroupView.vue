<template>
  <div class="group-view">
    <div class="entry-list">
      <div class="entry-search">
        <ph-input-container>
          <ph-icon name="search"/>
          <ph-input
            class="solid"
            autocomplete="new-keyword"
            v-model.trim="entryKeyword"
            @keyup="onEntrySearch"
          ></ph-input>
        </ph-input-container>
        <ph-icon name="plus" class="icon-plus" @click="onEntryCreate"/>
      </div>
      <div class="ph-entry-list">
        <ph-entry-item
          v-for="(item, index) in entries"
          :item="item"
          :key="index"
          :class="{active: item.id === (entry && entry.id)}"
          @click="onEntrySelect"
          @contextmenu="onContextMenu"
        ></ph-entry-item>
      </div>
    </div>
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import * as randomString from 'crypto-random-string'
export default {
  computed: mapState({
    group: state => state.group,
    entryKeyword: state => state.entryKeyword,
    entries: state => {
      if (state.entryKeyword !== '') return this.filterEntries
      return state.entries
    },
    entry: state => state.entry,
    ...mapGetters(['filterEntries'])
  }),
  methods: {
    onEntryCreate() {
      this.$store.dispatch('createEntry', {
        title: randomString(5) + this.entries.length,
        icon: 'list',
        groupId: this.group.id,
        description: 'description' + randomString(3)
      })
    },
    onEntrySearch() {
      this.$store.commit('SET_ENTRY_KEYWORD', this.keyword)
    },
    onEntrySelect(item, event) {
      if (event.type === 'contextmenu') return
      if (this.keyword) this.keyword = ''

      this.$store.commit('SELECT_ENTRY', item)
      this.$router.push({ name: 'field', params: { entryId: item.id } })
    },
    onContextMenu(entry) {}
  },
  mounted() {
    this.$store.dispatch('fetchAllEntry', this.$route.params.groupId)
  }
}
</script>

<style lang='less' scoped>
@import url('../styles/theme.less');
.group-view {
  display: flex;
  height: 100%;
  .entry-list {
    height: 100%;
    width: 250px;
    border-right: @border;
    display: flex;
    flex-direction: column;
    .entry-search {
      display: flex;
      margin: 12px 14px;
      .icon-plus {
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
    .entry-menu {
      flex: 1;
    }
  }
  .container {
    flex: 1;
  }
}
</style>
