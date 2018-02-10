import React from 'react'
import createReactClass from 'create-react-class'

var style = () => `
  .footer {
    border-top: 1px solid #494C4E;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`

var Footer = createReactClass({
  render() {
    return (
      <footer className="footer">
        <style>{style()}</style>
        <div className="plm pvs">© Ed Williams. All rights reserved.</div>
      </footer>
    )
  }
})

export default Footer
