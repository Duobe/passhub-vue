import Input from './Input'
import Button from './Button'
import Icon from './Icon'
import Form from './Form'
import Menu from './Menu'
import MenuItem from './Menu/MenuItem'
import Logo from './Logo'
import Dialog from './Dialog'

const myComponents = {
  Input,
  Button,
  Icon,
  Form,
  Menu,
  MenuItem,
  Logo,
  Dialog
}

myComponents.install = (Vue) => {
  for (let component in myComponents) {
    const componentInstaller = myComponents[component]

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller)
    }
  }
}

export default myComponents
