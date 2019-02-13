<template>
  <div class="group-view">
    <div class="entry-list">
      <div class="entry-search">
        <ph-input-container>
          <ph-icon name="search"/>
          <ph-input
            class="solid"
            autocomplete="new-keyword"
            :value="entryKeyword"
            @keyup.native="onEntrySearch"
          ></ph-input>
        </ph-input-container>
        <ph-icon name="plus" class="icon-plus" @click="onEntryCreate"/>
      </div>
      <div class="ph-entry-list">
        <ph-entry-item
          v-for="(item, index) in entryList"
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
  data() {
    return {
      top: 0
    }
  },
  computed: {
    ...mapState(['group', 'entry', 'entries', 'entryKeyword']),
    ...mapGetters(['filterEntries']),
    entryList() {
      if (this.entryKeyword !== '') return this.filterEntries
      return this.entries
    }
  },
  methods: {
    onEntryCreate() {
      this.$store.dispatch('createEntry', {
        title: randomString(5) + this.entries.length,
        icon: 'list',
        groupId: this.group.id,
        description: 'description' + randomString(3)
      })
      this.$router.push({
        name: 'field',
        params: { entryId: this.entry && this.entry.id }
      })
    },
    onEntrySearch(event) {
      const keyword = event.target.value
      this.$store.commit('SET_ENTRY_KEYWORD', keyword)
    },
    onEntrySelect(item, event) {
      if (event.type === 'contextmenu') return
      if ((item && item.id) === (this.entry && this.entry.id)) return
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
  .ph-entry-list {
    overflow: auto;
    flex: 1;
  }
  .entry-list {
    height: 100%;
    width: 250px;
    border-right: @border;
    display: flex;
    flex-direction: column;
    .entry-search {
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      .ph-input-container {
        height: 32px;
      }
      .icon-plus {
        background-color: @grey3;
      }
      .ph-input {
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
