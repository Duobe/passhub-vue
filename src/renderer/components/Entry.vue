<template>
  <div class="entry">
    <ph-list-item
      v-for="(item, index) in entries"
      :key="index"
      :icon="item.icon"
      :title="item.title"
      :description="item.description"
    ></ph-list-item>
  </div>
</template>
<script>
import phListItem from "./ListItem"

export default {
  name: "entry",
  components: {
    phListItem
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
       this.fetchData()
    }
  },
  methods: {
    fetchData() {
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
    this.fetchData()
  }
}
</script>