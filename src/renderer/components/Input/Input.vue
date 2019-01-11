<template>
  <input
    class="input"
    :type="type"
    :name="name"
    :value="value"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :min="min"
    :max="max"
    :readonly="readonly"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @keydown.up="onInput"
    @keydown.down="onInput"
  >
</template>

<script>
import common from "./common";

let getClosestVueParent = ($parent, cssClass) => {
  if (!$parent || !$parent.$el) return false

  if ($parent._uid === 0) return false

  if ($parent.$el.classList.contains(cssClass)) return $parent

  return getClosestVueParent($parent.$parent, cssClass)
}

export default {
  name: "my-input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    readonly: Boolean
  },
  mixins: [common],
  mounted() {
    this.$nextTick(() => {
      this.parentContainer = getClosestVueParent(
        this.$parent,
        "input-container"
      )

      if (!this.parentContainer) {
        this.$destroy()

        throw new Error("You should wrap the my-input in a my-input-container")
      }

      this.parentContainer.inputInstance = this
      this.setParentDisabled()
      this.setParentRequired()
      this.setParentPlaceholder()
      this.handleMaxLength()
      this.updateValues()
    })
  }
}
</script>
<style lang="less" src="./input.less"></style>
