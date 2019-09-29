import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from './pages/Login/Login'
import Game from './pages/Game/Game'
import NavBar from './components/Navbar/Navbar'

const App = () => (
    <Router>
        <div>
            <NavBar />

            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Game />
                </Route>
            </Switch>
        </div>
    </Router>
)

export default App