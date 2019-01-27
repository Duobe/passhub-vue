<template>
  <div class="content">
    <div class="entry">
      <ph-search :groupId="$route.params.groupId"></ph-search>
      <ph-entry-item
        v-for="(item, index) in entries"
        @click="onEntryClick"
        :active="{active: currentEntry.id === item.id}"
        :key="index"
        :data="item"
      ></ph-entry-item>
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
import phListItem from "../components/ListItem"
import phSearch from "../components/Search"

export default {
  name: "entry",
  components: {
    phListItem,
    phSearch
  },
  data() {
    return {
      sourceEntries: [],
      entries: []
    }
  },
  watch: {
    '$store.state.entryKeyword': function (newVal, oldVal) {
      if (newVal === '') this.entries = this.sourceEntries
      this.entries = this.sourceEntries.filter(entry => entry.title.indexOf(newVal) >= 0)
    },
    '$store.state.isInserted': function () {
      this.fetchEntries()
    }
  },
  methods: {
    onEntryClick(data) {
      this.$router.push({
        name: 'field',
        params: {
          entryId: data.id,
          groupId: data.groupId
        }
      })
    },
    fetchEntries() {
      const groupId = this.$route.params.groupId

      if (!groupId) return

      this.$store
        .dispatch('getEntriesByGid', groupId)
        .then(entries => {
          this.entries = this.sourceEntries = entries
        }
      )
    }
  },
  mounted() {
    this.fetchEntries()
  }
}
</script>
<style lang="less">
@import url('../styles/theme.less');
.content {
  display: flex;
}
.entry {
  width: 250px;
  border-right: @border;
  .search {
    padding: 12px 14px;
  }
}
</style>