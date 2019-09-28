import React from "react"
import { observer } from "mobx-react"

import Board from './components/Board/Board'

@observer
export default class App extends React.Component {
    render() {
        return (
            <>
                <Board />
            </>
        );
    }
}
