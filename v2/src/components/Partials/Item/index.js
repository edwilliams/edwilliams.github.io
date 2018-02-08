import React from 'react'
import createReactClass from 'create-react-class'

var Item = createReactClass({
  render() {

    var { img, title, url, subTitle } = this.props

    return (
      <div className="mbxl" onClick={() => { window.location.hash = `#/projects/${url}` }}>

        <div className="center">
          <img className="mbs" src={img}/>
        </div>

        <div className="phm">
          <h3 className="mbm underline">{title}</h3>
          <h4 className="mbxl">{subTitle}</h4>
          <hr/>
        </div>

      </div>
    )

  }
})

export default Item
