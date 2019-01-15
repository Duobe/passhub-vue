<template>
  <div class="search">
    <ph-input-container>
      <ph-icon name="search" @click="search"></ph-icon>
      <ph-input class="solid" v-model="keyword" @keyup.native="keyUp($event)" autocomplete="new-keyword"></ph-input>
    </ph-input-container>
    <ph-icon name="plus"></ph-icon>
  </div>
</template>
<script>
export default {
  name: "ph-search",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search () {
      this.keyword = this.keyword.toLowerCase().trim()

      if (this.keyword.length < 0) return

      this.isLoading = true

      this.$store.dispatch('project/search', { keyword: this.keyword }).then(() => {
        this.isLoading = false
        // this.$router.push({ name: 'project' })
      })
    },
    keyUp: function (event) {
      if (event.key === 'Enter') {
        this.search()
      }
    }
  }
}
</script>
<style lang="less">
@import url('../styles/theme.less');

.search {
  width: 250px;
  border-right: @border;
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
    background-color: @inputColor;
    width: 32px;
    float: right;
    border-radius: @borderRadius;
    svg {
      stroke: @black;
    }
  }
}
</style>
