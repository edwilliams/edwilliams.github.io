import React from 'react'
import createReactClass from 'create-react-class'
import { Link } from 'react-router-dom'
import Header from '../Partials/Header'

import projects from '../../projects'

var Single = createReactClass({
  render() {

    var content = projects[this.props.match.params.id]
    if ( !content ) return <p>404</p>

    var { imageMain, title, subTitle, location, description, imageSmall } = content

    return (
      <article>

        <Header>Ed Williams</Header>

        <div className="mbm">

          <div className="center">
            <img className="mbs" src={imageMain}/>
          </div>

          <div className="grid col-2 phm">
            <div>
              <h3 className="mbm underline">{title}</h3>
              <p className="">{subTitle}</p>
              <h4 className="mbs">{location}</h4>
              <p className="mbl">{description}</p>
              <Link to='/'>Back</Link>
            </div>
            <div className="center">
              <img className="mbs" src={imageSmall}/>
            </div>
          </div>

        </div>

      </article>
    )

  }
})

export default Single
