import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Partials/Header'

import projects from '../../projects'

class Single extends React.Component {

  render() {

    const content = projects[this.props.match.params.id]
    if ( !content ) return <p>404</p>

    const { imageMain, images, title, subTitle, desc, notes, vid } = content

    const maxWidth = ( imageMain.frame === 'iphone' ) ? 320 : 768

    return (
      <article>

        <Header>Ed Williams</Header>

        <div className="mbm">

          <div className="center">
            <img className="mbs" style={{ maxWidth: `${maxWidth}px` }} src={imageMain.url}/>
          </div>

          <div className="grid dsktp-2 mob-1 phm">

            <div>
              <h3 className="mbm underline">{title}</h3>
              <p className="mbm">{subTitle}</p>
              <p className="mbm">{desc}</p>

              {notes && <div>
                <p className="mbm">Below are some notable functions of the role:</p>
                {notes.map((note, i) => <p key={i} className="mbs">- {note}</p>)}
              </div>}

              <Link className="mtl" to='/projects'>Back</Link>
            </div>

            {images && <img className="mbs" src={images[0]}/>}

            {vid && <video style={{ width: '100%' }} controls>
              <source src={vid} type="video/mp4"/>
            </video>}

          </div>

        </div>

      </article>
    )

  }

}

export default Single
