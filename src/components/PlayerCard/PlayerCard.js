import React from 'react'

const PlayerCardComponent = ({ player }) => (
    <>
        {
            player ?
                <p>Name: {player.name}</p> :
                <p>Unassigned</p>
        }

    </>
)

export default PlayerCardComponent