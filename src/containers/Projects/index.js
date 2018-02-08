import React from 'react'
import createReactClass from 'create-react-class'

import Projects from 'components/Projects'

export default createReactClass({

  render() {

    return (
      <Projects {...this.props}/>
    )
  }

})


