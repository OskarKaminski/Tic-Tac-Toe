import React from "react"
import { observer } from "mobx-react"

import Board from './components/Board/Board'
import JoinGame from './components/JoinGame/JoinGame'
import PlayerCard from './components/PlayerCard/PlayerCard'
import { Main } from './App.styles'
import game from './stores/Game.store'

const App = observer(() => (
    <>
        <JoinGame/>
        <br/>
        <Main>
            <PlayerCard player={game.players.length > 0 && game.players[0]}/>
            <Board/>
            <PlayerCard player={game.players.length > 1 && game.players[1]}/>
        </Main>
    </>
))

export default App