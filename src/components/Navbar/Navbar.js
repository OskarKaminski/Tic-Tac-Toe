import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import appStore from '../../stores/App.store'
import { Nav, List, ListItem, LoggedInfo } from './Navbar.styles'

const NavbarComponent = observer(() => (
    <Nav>
        <List>
            <ListItem>
                <Link to="/">Game</Link>
            </ListItem>
        </List>
        <LoggedInfo>
            {
                appStore.userName ?
                    <span>Logged as: {appStore.userName}</span> :
                    <span><Link to="/Login">Login</Link></span>
            }

        </LoggedInfo>
    </Nav>
))

export default NavbarComponent