<template>
  <ph-record :data="fieldArr" :editRecordFn="record"></ph-record>
</template>
<script>
import phRecord from './Record'

export default {
  name: 'field',
  components: {
    phRecord
  },
  data() {
    return {
      fieldArr: []
    }
  },
  methods: {
    record(data) {
      this.data.splice(3, 0, data)
    }
  },
  mounted() {
    const id = this.$route.params.groupId
  }
}
</script>