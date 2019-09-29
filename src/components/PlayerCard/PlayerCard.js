import React from 'react'
import { observer } from 'mobx-react'

import { Card } from './PlayerCard.styles'
import game from '../../stores/Game.store'

const PlayerCardComponent = observer(({ player }) => (
    <Card highlighted={player.key === game.currentPlayerIndex}>
        {
            player ?
                <p>Name: {player.name} ({player.sign})</p> :
                <p>Unassigned</p>
        }
    </Card>
))

export default PlayerCardComponent