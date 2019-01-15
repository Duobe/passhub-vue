import Form from './Form.vue'
import FormItem from './FormItem.vue'

export default function install (Vue) {
  Vue.component('ph-form', Form)
  Vue.component('ph-form-item', FormItem)
}
