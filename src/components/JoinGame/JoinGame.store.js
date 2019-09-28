import { observable } from "mobx"

import game from '../../stores/Game.store'

class JoinGame {
  @observable name = ''

  updateName = (name) => {
    this.name = name
  }

  addPlayer = () => {
    game.addPlayer(this.name)
    this.name = ''
  }
}

export default new JoinGame()