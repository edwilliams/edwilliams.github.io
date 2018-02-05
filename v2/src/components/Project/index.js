import React from 'react'
import createReactClass from 'create-react-class'
import { Link } from 'react-router-dom'
import Header from '../Partials/Header'

var Single = createReactClass({
  render() {
    return (
      <article>
        <h1>ID: {this.props.match.params.id}</h1>
        <Link to='/projects'>Back</Link>
      </article>
    )

  }
})

export default Single
