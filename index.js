import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Main from 'containers/Main'

var render = () => {
  return ReactDOM.render(
    <div>
      <HashRouter>
        <Main/>
      </HashRouter>
    </div>,
    document.getElementById('app')
  )
}

render()
