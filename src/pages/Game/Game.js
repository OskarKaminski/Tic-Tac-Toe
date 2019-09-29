import React from 'react'
import { observer } from 'mobx-react'

import PlayerCard from '../../components/PlayerCard/PlayerCard'
import game from '../../stores/Game.store'
import Board from '../../components/Board/Board'
import { Main } from './Game.styles'

const GamePage = observer(() => (
    <Main>
        <PlayerCard player={game.players.length > 0 && game.players[0]}/>
        <Board/>
        <PlayerCard player={game.players.length > 1 && game.players[1]}/>
    </Main>
))

export default GamePage