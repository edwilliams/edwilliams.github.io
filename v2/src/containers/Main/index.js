import React from 'react'
import createReactClass from 'create-react-class'
import CSS from './css'
import { mergeDeepRight } from 'ramda'

var MainComponent = createReactClass({

  getInitialState() {
    return {

    }
  },

  componentWillMount() {

  },

  render() {

    var css = ( this.props.css ) ? mergeDeepRight(CSS, this.props.css) : CSS

    return (
      <main id="main">
        {this.props.children}
      </main>
    )
  }

})

export default MainComponent
