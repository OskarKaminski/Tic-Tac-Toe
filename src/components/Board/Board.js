import React from 'react'
import { observer } from 'mobx-react'

import Box from '../Box/Box'
import { Board, BoardWrapper, GameArea } from './Board.styles'
import game from '../../stores/Game.store'

const BoardComponent = observer(() => (
    <GameArea>
        <BoardWrapper>
            <Board>
                {
                    game.boxes.map(({ sign, key }) => (
                        <Box key={key} sign={sign} onAction={() => game.selectBox(key)}></Box>
                    ))
                }
            </Board>
        </BoardWrapper>
    </GameArea>
))

export default BoardComponent