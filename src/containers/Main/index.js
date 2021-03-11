import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { mergeDeepRight } from 'ramda'

import Home from 'containers/home'
import About from 'containers/about'
import Projects from 'containers/projects'
import Project from 'containers/project'
import CV from 'containers/cv'

const ProjectsSwitch = () => (
  <Switch>
    <Route exact path="/projects" component={Projects} />
    <Route path="/projects/:id" component={Project} />
  </Switch>
)

class MainContainer extends React.Component {
  componentWillUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main id="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectsSwitch} />
          <Route path="/about" component={About} />
          <Route path="/cv" component={CV} />
        </Switch>
      </main>
    )
  }
}

export default MainContainer
