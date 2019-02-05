import { Input, InputContainer } from './Input'
import { Menu, MenuItem } from './Menu'
import Button from './Button'
import Icon from './Icon'
import Logo from './Logo'
import GroupItem from './GroupItem'
import EntryItem from './EntryItem'
import FieldItem from './FieldItem'
import GroupAddition from './GroupAddition'
import FieldAddition from './FieldAddition'

const components = {}

components.install = Vue => {
  Vue.component('ph-input', Input)
  Vue.component('ph-input-container', InputContainer)
  Vue.component('ph-button', Button)
  Vue.component('ph-icon', Icon)
  Vue.component('ph-logo', Logo)
  Vue.component('ph-menu', Menu)
  Vue.component('ph-menu-item', MenuItem)
  Vue.component('ph-group-item', GroupItem)
  Vue.component('ph-entry-item', EntryItem)
  Vue.component('ph-field-item', FieldItem)
  Vue.component('ph-group-addition', GroupAddition)
  Vue.component('ph-field-addition', FieldAddition)
}

export default components
