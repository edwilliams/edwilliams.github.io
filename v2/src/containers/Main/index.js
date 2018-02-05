import React from 'react'
import createReactClass from 'create-react-class'
import { Switch, Route } from 'react-router-dom'
import { mergeDeepRight } from 'ramda'

import Home from 'containers/Home'
import About from 'containers/About'
import Project from 'containers/Project'

var Projects = () => (
  <Switch>
    <Route exact path='/projects' component={Home}/>
    <Route path='/projects/:id' component={Project}/>
  </Switch>
)

var MainComponent = createReactClass({
  render() {
    return (
      <main id="main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/about' component={About}/>
        </Switch>
      </main>
    )
  }
})

export default MainComponent
