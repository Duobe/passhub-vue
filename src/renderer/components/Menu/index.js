import Menu from './Menu.vue'
import MenuItem from './MenuItem.vue'

export default function install (Vue) {
  Vue.component('ph-menu', Menu)
  Vue.component('ph-menu-item', MenuItem)
}
