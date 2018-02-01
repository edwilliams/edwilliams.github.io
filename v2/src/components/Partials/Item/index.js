import React from 'react'
import createReactClass from 'create-react-class'

var Item = createReactClass({
  render() {

    var { img, title, url, firm, year, desc } = this.props

    img = '../img/1024x768.png'

    return (
      <div className="mbm" onClick={() => { window.location.hash = `#/${url}` }}>

        <img className="mbs" src={img}/>

        <div className="phs">
          <h3 className="mbm underline">{title}</h3>
          <h4 className="mbs">{firm} - {year}</h4>
          <p className="mbl">{desc} <span>→</span></p>
        </div>

        {false && <p>I rebuilt a core piece of functionality of the Jaguar Landrover e-learning system, based on new designs, and worked closely with other developers into integrate this with their existing bespoke .NET platform. The Ajax-centric UI (inc K​nockout) was fed by a controller API which I worked closely with the .NET developers to create</p>}

      </div>
    )

  }
})

export default Item
