import Input from './Input.vue'
import InputContainer from './InputContainer.vue'

export default function install (Vue) {
  Vue.component('my-input', Input)
  Vue.component('my-input-container', InputContainer)
}
