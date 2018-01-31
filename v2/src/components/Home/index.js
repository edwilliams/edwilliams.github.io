import React from 'react'
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'
import { mergeDeepRight } from 'ramda'

var About = createReactClass({

  componentDidMount() {},

  componentWillUnmount() {},

  render() {

    var css = ( this.props.css ) ? mergeDeepRight(CSS, this.props.css) : CSS

    return (
      <article style={css.container}></article>
    )

  }

})

// About.propTypes = {
//   inCordova: PropTypes.bool,
//   version: PropTypes.string,
//   username: PropTypes.string,
//   serverUrl: PropTypes.string,
//   hubId: PropTypes.number,
//   onChangeScreen: PropTypes.func,
//   onClickTerms: PropTypes.func,
//   onClickPrivacy: PropTypes.func,
// }

export default About
