import React from 'react'
import createReactClass from 'create-react-class'

var Header = createReactClass({

  handleClick() {
    var isHome = (window.location.hash == '#/')
    if ( isHome ) window.location.hash = '#/about'
    else window.location.hash = '#/'
  },

  render() {

    return (
      <div onClick={this.handleClick} className="phm" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <header className="prm ptm pbm">{this.props.children}</header>
        <img src="../img/hamburger.png" style={{ width: '40px' }}/>
      </div>
    )

  }
})

export default Header
