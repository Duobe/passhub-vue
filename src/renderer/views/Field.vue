<template>
  <div class="field">
    <ph-field-item :data="initField"></ph-field-item>
  </div>
</template>
<script>
import phFieldItem from '../components/FieldItem'
export default {
  name: "field",
  components: {
    phFieldItem
  },
  data() {
    return {
      fields: [],
      initField: {
        title: '',
        value: '',
      }
    };
  },
  methods: {
    fetchFields() {
      const entryId = this.$route.params.entryId

      if (!entryId) return

      this.$store.dispatch("getFieldsByEid", entryId).then(result => {
        this.fields = result
      })
    },
  },
  mounted() {
    this.fetchFields()
  }
}
</script>