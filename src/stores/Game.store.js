import { observable, computed } from "mobx"

const numberOfPlayers = 2

class Game {
  signs = ['O', 'X']
  @observable players = []
  @observable currentPlayerIndex = -1

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

  @computed get currentPlayer(){
    return this.players[this.currentPlayerIndex]
  }

  start = () => {
    this.currentPlayerIndex = Math.floor(Math.random() * numberOfPlayers)
  }

  addPlayer = (name) => {
    // For this reason we are using method instead of direct push from the component
    if(this.players.length >= 2) return

    this.players.push({
      name,
      key: this.players.length,
      sign: this.signs[this.players.length]
    })
  }

  // TDD
  nextPlayer = () => {
    // Talk about YAGNI
    this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 0 : 1
  }

  selectBox = (selectedKey) => {
    const field = this.fields.find((field) => field.key === selectedKey)
    field.player = this.currentPlayerIndex
    this.nextPlayer()
  }
}

export default new Game()