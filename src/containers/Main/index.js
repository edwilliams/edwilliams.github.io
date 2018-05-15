import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { mergeDeepRight } from 'ramda'

import Home from 'containers/Home'
import About from 'containers/About'
import Projects from 'containers/Projects'
import Project from 'containers/Project'
import CV from 'containers/CV'

var style = () => `
main {
  border: 8px solid #494C4E;
  min-height: 100%;
  width: 100%;
  position: absolute;
  padding-bottom: 40px;
}
`

var ProjectsSwitch = () => (
  <Switch>
    <Route exact path='/projects' component={Projects}/>
    <Route path='/projects/:id' component={Project}/>
  </Switch>
)

class MainContainer extends React.Component {
  render() {
    return (
      <main id="main">
        <style>{style()}</style>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={ProjectsSwitch}/>
          <Route path='/about' component={About}/>
          <Route path='/cv' component={CV}/>
        </Switch>
      </main>
    )
  }
}

export default MainContainer
