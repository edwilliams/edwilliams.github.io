import React from 'react'
import createReactClass from 'create-react-class'

import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import Item from '../Partials/Item'

var Home = createReactClass({

  componentDidMount() {},

  componentWillUnmount() {},

  render() {

    return (
      <article>

        <Header>Ed Williams</Header>

        <Item
          img="../img/passiv/iphone.jpg"
          title="PassivLiving App"
          url="passivliving-app"
          firm="Passiv Systems"
          year="2017 / 2018"
          desc="iOS / Android App for Smart Energy company"/>
        <div className="grid col-2">
          <Item
            img="../img/jlr/macbook.jpg"
            title="Jaguar Land Rover"
            url="jaguar-land-rover"
            firm="Virtual Forge"
            year="2016"
            desc="A propriety and internationally utilized Learning platform for members of the iconic Jaguar Land Rover"/>
          <Item
            img="../img/good-energy/macbook.jpg"
            title="Good Energy"
            url="good-energy"
            firm="Dare West"
            year="2016"
            desc="Website for ethical renewable electricity company Good Energy's following a rebranding by leading Bristol design agency Dare West"/>
          <Item
            img="../img/rosielee/macbook.jpg"
            title="Rosie Lee 2016"
            url="rosie-lee-2016"
            firm="Rosie Lee"
            year="2016"
            desc="Website for leading London design agency Rosie Lee"/>
          <Item
            img="../img/vue/macbook.jpg"
            title="VUE Playbook"
            url="vue-playbook"
            firm="VUE"
            year="2015"
            desc="Cutting edge ​CSS animation​ presentation tool. Built o​ffline-first​ and engineered on top of Impress. I then built a custom CMS for stakeholders to make changes to the slides."/>
        </div>
        {/* * /}
        <Item
          img="../img/vue/macbook.jpg"
          title="VUE Media Pack"
          firm="VUE"
          year="2016"
          desc="..."/>
        <Item
          img="../img/rosielee/sacai.jpg"
          title="NikeLab Sacai Digital LookBook"
          firm="Nike"
          year="2015"
          desc="Experimental 'LookBook' for Nike's NikeLab customers"/>
        {/* */}
        <Footer/>
      </article>
    )

  }

})

export default Home
