import { observable, computed } from "mobx";

class Game {
  @observable players = []

  @observable fields = new Array(9)
      .fill('')
      .map((value, index) => ({
        key: index,
        player: 1
      }))

  @computed get boxes(){
    return this.fields.map((field) => ({
      ...field,
      sign: this.players[field.player] && this.players[field.player].sign
    }))
  }
}

export default new Game()