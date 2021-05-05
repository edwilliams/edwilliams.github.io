import React from 'react'
import About from './about'

import data from 'config/data.js'

class AboutContainer extends React.Component {
  render() {
    return <About {...data} />
  }
}

export default AboutContainer
