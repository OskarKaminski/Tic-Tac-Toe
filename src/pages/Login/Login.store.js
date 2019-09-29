import { observable } from "mobx"
import appStore from '../../stores/App.store'

class Login {
  @observable name = ''

  updateName = (name) => {
    this.name = name
  }

  login = () => {
    appStore.userName = this.name
  }
}

export default new Login()