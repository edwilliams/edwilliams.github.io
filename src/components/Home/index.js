import React from 'react'

import Header from '../Partials/Header'
import Footer from '../Partials/Footer'

class Home extends React.Component {

  render() {

    return (
      <article>

        <Header>Ed Williams</Header>

        <iframe src="/sites/shooting-stars/" className="full-screen"></iframe>

        <div className="amm typo-center">

          <p className="mbs">{this.props.title}</p>
          <h3 style={{ textDecoration: 'underline' }} onClick={() => { window.location.hash = '#/projects' }}>projects</h3>

        </div>

        <Footer/>

      </article>
    )

  }

}

export default Home
