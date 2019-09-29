import React from 'react'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import loginStore from './Login.store'

const login = (redirect) => {
    loginStore.login()
    redirect('/')
}

const LoginPage = withRouter(observer(({ history }) => (
    <div>
        <label>
            Name: <input type="text" value={loginStore.name}
                         onChange={(e) => loginStore.updateName(e.target.value)}/>
        </label>
        <button onClick={() => login(history.push)}>Login</button>
    </div>
)))

export default LoginPage