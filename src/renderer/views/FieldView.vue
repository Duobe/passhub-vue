<template>
  <div class="field-view">
    <ph-field-addition></ph-field-addition>
    <ph-input-container>
      <ph-icon :name="entry.icon"></ph-icon>
      <ph-input :value="entry.title" @input="onEditEntryTitle"></ph-input>
    </ph-input-container>
    <ph-input-container>
      <ph-input :value="entry.description" @input="onEditEntryDesc"></ph-input>
    </ph-input-container>
    <div class="ph-field-list">
      <ph-field-item v-for="(item, index) in fields" :item="item" :key="index"></ph-field-item>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['entry', 'fields'])
  },
  methods: {
    onEditEntryTitle(value) {
      if (value === '' || value.trim === this.entry.title) return

      this.$store.dispatch('updateEntryTitle', {
        id: this.entry.id,
        title: value,
        groupId: this.entry.groupId
      })
    },
    onEditEntryDesc(value) {
      if (value === '' || value.trim === this.entry.description) return

      this.$store.dispatch('updateEntryDesc', {
        id: this.entry.id,
        description: value,
        groupId: this.entry.groupId
      })
    }
  },
  mounted() {
    this.$store.dispatch('fetchAllField', this.$route.params.entryId)
  }
}
</script>

<style lang='less' scoped>
@import url('../styles/theme.less');
.field-view {
  height: 100%;
  padding: 12px 0;
  .ph-field-list {
    padding: 10px 14px 55px;
  }
  & > .ph-input-container {
    border: none;
    margin-bottom: 12px;
    padding: 0 12px;
    .ph-input {
      border-color: @white;
      &:focus {
        border-color: @grey2;
      }
    }
  }
}
</style>
