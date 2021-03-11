import React from 'react'
import About from 'components/About'

import data from 'data.js'

class AboutContainer extends React.Component {
  render() {
    return <About {...data} />
  }
}

export default AboutContainer
