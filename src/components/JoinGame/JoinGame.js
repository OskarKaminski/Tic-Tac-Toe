import React from 'react'
import { observer } from 'mobx-react'

import joinGameStore from './JoinGame.store'
import game from '../../stores/Game.store'

const addPlayer = (e) => {
    e.preventDefault()
    joinGameStore.addPlayer()
}

const JoinGameComponent = observer(() => {

    // const [name, setName] = useState('')
    //
    // const addPlayer = (e) => {
    //     e.preventDefault()
    //     game.addPlayer(name, e)
    //     setName('')
    // }

    return (
        <div>
            <label>
                Name: <input type="text" value={joinGameStore.name}
                             onChange={(e) => joinGameStore.updateName(e.target.value)}/>
            </label>
            <button onClick={addPlayer}>Add player</button>
            <div>
                Players: {JSON.stringify(game.players)}
            </div>
        </div>
    )
})

export default JoinGameComponent