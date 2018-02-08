import React from 'react'
import createReactClass from 'create-react-class'

import Project from 'components/Project'

export default createReactClass({

  render() {

    return (
      <Project {...this.props}/>
    )
  }

})


