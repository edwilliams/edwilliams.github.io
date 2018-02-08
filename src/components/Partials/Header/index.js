import React from 'react'
import createReactClass from 'create-react-class'

var Header = createReactClass({

  render() {

    var routes = {
      home: { name: 'Home', url: '' },
      about: { name: 'About', url: 'about' },
    }

    var x = ( window.location.hash === '#/' ) ? 'about' : 'home'

    return (
      <header className="header f_xl phm">
        <div className="prm ptm pbm" onClick={() => { window.location.hash = '#/' }}>{this.props.children}</div>
        {false && <img src="../img/hamburger.png" style={{ width: '40px' }}/>}
        <div className="header-inner">
          <p className="f_m" onClick={() => { window.location.hash = `#/${routes[x].url}` }}>{routes[x].name}</p>
          <p className="f_m">Social</p>
        </div>
      </header>
    )

  }
})

export default Header
