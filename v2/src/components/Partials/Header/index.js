import React from 'react'
import createReactClass from 'create-react-class'

var Header = createReactClass({
  render() {

    return (
      <div className="phs" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <header className="pam">{this.props.children}</header>
        <img src="../img/hamburger.png" style={{ width: '40px' }}/>
      </div>
    )

  }
})

export default Header
