import React from 'react'
import Projects from './projects'

import projects from 'projects'

class ProjectsContainer extends React.Component {
  render() {
    return <Projects {...this.props} projects={projects} />
  }
}

export default ProjectsContainer
