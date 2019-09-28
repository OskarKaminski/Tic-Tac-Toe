import { observable, computed } from "mobx"

class Game {
  signs = ['O', 'X']
  @observable players = []

  @observable fields = new Array(9)
      .fill('')
      .map((value, index) => ({
        key: index,
        player: -1
      }))

  @computed get boxes(){
    return this.fields.map((field) => ({
      ...field,
      sign: this.players[field.player] && this.players[field.player].sign
    }))
  }

  addPlayer = (name) => {
    // For this reason we are using method instead of direct push from the component
    if(this.players.length >= 2) return

    this.players.push({
      name,
      sign: this.signs[this.players.length]
    })
  }
}

export default new Game()