import React from 'react'
import createReactClass from 'create-react-class'

import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import Item from '../Partials/Item'

import projects from '../../projects'

var Home = createReactClass({
  render() {

    return (
      <article>

        <Header>Ed Williams</Header>

        <div className="amm typo-center">

          <p className="mbs">Wiltshire based JavaScript engineer, specialising in React / Redux</p>
          <h3 onClick={() => { window.location.hash = '#/projects' }}>projects</h3>

        </div>

        <Footer/>

      </article>
    )

  }

})

export default Home
