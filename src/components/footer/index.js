import React from 'react'

const style = () => `
  .footer {
    border-top: 1px solid #494C4E;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <style>{style()}</style>
        <div className="plm pvs">© Ed Williams. All rights reserved.</div>
      </footer>
    )
  }
}

export default Footer
