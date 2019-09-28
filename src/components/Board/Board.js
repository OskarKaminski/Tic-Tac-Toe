import React from 'react'

import Box from '../Box/Box'
import { Board, BoardWrapper, GameArea } from './Board.styles'
import game from '../../stores/Game.store'

const BoardComponent = () => (
    <GameArea>
        <BoardWrapper>
            <Board>
                {
                    game.boxes.map(({ sign, key }) => (
                        <Box key={key} sign={sign}></Box>
                    ))
                }
            </Board>
        </BoardWrapper>
    </GameArea>
)

export default BoardComponent