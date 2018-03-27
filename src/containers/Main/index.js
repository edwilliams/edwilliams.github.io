import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { mergeDeepRight } from 'ramda'

import Home from 'containers/Home'
import About from 'containers/About'
import Projects from 'containers/Projects'
import Project from 'containers/Project'

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

var CV = () => {
  // return <iframe width="1" height="1" frameBorder="0" src="test.txt"></iframe>
  function saveAs(uri, filename) {
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
          document.body.appendChild(link); // Firefox requires the link to be in the body
          link.download = filename;
          link.href = uri;
          link.click();
          document.body.removeChild(link); // remove the link when done
      } else {
          location.replace(uri);
      }
  }
  var padLeft = int => ( int > 9 ) ? int.toString() : `0${int}`
  var d = new Date()
  var DD = padLeft(d.getDate())
  var MM = padLeft(d.getMonth() + 1)
  var YY = d.getFullYear()
  saveAs('CV.pdf', `cv-ed-williams-${YY}-${MM}-${DD}`)
  return <p></p>
}

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
