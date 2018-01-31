import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import Menu from 'components/Partials/Menu'
import Main from 'containers/Main'
import routes from 'config/routes'

var render = () => {
  return ReactDOM.render(
    <div>
      {false && <Menu/>}
      <Main>
        <Router history={hashHistory} routes={routes}/>
      </Main>
    </div>,
    document.getElementById('app')
  )
}

render()
