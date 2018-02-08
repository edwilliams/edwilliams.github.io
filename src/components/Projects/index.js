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

        <div className="mbxl">
          <div className="container-small grid col-2">

            <Item img={projects['passivliving-app'].logo}
              title={projects["passivliving-app"].title}
              subTitle={projects["passivliving-app"].subTitle}
              desc={projects["passivliving-app"].desc}
              url="passivliving-app"/>
            <Item img={projects['jaguar-land-rover'].logo}
              title={projects["jaguar-land-rover"].title}
              subTitle={projects["jaguar-land-rover"].subTitle}
              desc={projects["jaguar-land-rover"].desc}
              url="jaguar-land-rover"/>
            <Item img={projects['good-energy'].logo}
              title={projects["good-energy"].title}
              subTitle={projects["good-energy"].subTitle}
              desc={projects["good-energy"].desc}
              url="good-energy"/>
            <Item img={projects['rosie-lee-2016'].logo}
              title={projects["rosie-lee-2016"].title}
              subTitle={projects["rosie-lee-2016"].subTitle}
              desc={projects["rosie-lee-2016"].desc}
              url="rosie-lee-2016"/>
            <Item img={projects['vue-playbook'].logo}
              title={projects["vue-playbook"].title}
              subTitle={projects["vue-playbook"].subTitle}
              desc={projects["vue-playbook"].desc}
              url="vue-playbook"/>

          </div>
        </div>

        <Footer/>

      </article>
    )

  }

})

export default Home