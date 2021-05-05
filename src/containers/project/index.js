import React from 'react'
import Project from './project'

class ProjectContainer extends React.Component {
  render() {
    return <Project {...this.props} />
  }
}

export default ProjectContainer
