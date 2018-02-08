import React from 'react'
import createReactClass from 'create-react-class'
import { mergeDeepRight } from 'ramda'

var Menu = createReactClass({

  render() {

    var css = ( this.props.css ) ? mergeDeepRight(CSS, this.props.css) : CSS

    return (
      <nav style={css.container}>
        nav
      </nav>
    )

  }

})

export default Menu

