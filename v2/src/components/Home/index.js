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

        <div className="container">

          <Item img={projects['passivliving-app'].imageMain} url="passivliving-app"/>

          <div className="grid col-2">
            <Item img={projects['jaguar-land-rover'].imageMain} url="jaguar-land-rover"/>
            <Item img={projects['good-energy'].imageMain} url="good-energy"/>
            <Item img={projects['rosie-lee-2016'].imageMain} url="rosie-lee-2016"/>
            <Item img={projects['vue-playbook'].imageMain} url="vue-playbook"/>
          </div>

        </div>

        <Footer/>

      </article>
    )

  }

})

export default Home
