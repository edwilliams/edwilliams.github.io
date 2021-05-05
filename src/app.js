import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './containers/home'
import About from './containers/about'
import Projects from './containers/projects'
import Project from './containers/project'
import CV from './containers/cv'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:id" component={Project} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cv" component={CV} />
      </Switch>
    </Router>
  )
}

export default App
