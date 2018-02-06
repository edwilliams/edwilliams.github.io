import React from 'react'
import createReactClass from 'create-react-class'

var Item = createReactClass({
  render() {

    var { img, title, url, firm, year, desc } = this.props

    return (
      <div className="mbm" onClick={() => { window.location.hash = `#/projects/${url}` }}>

        <div className="center">
          <img className="mbs" src={img}/>
        </div>

        { false && <div className="phm">
          <h3 className="mbm underline">{title}</h3>
          <h4 className="mbs">{firm} - {year}</h4>
          <p className="mbl">{desc} <span>→</span></p>
        </div>}

      </div>
    )

  }
})

export default Item
