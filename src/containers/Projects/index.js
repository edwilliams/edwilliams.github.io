import React from 'react'
import Projects from 'components/Projects'

class ProjectsContainer extends React.Component {
  render() {
    return (
      <Projects {...this.props}/>
    )
  }
}

export default ProjectsContainer
