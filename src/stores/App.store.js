import { observable } from "mobx";

class App {
  @observable userName = '';
}

export default new App()