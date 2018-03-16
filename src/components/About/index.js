import React from 'react'
import createReactClass from 'create-react-class'
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'

var About = createReactClass({

  componentDidMount() {},

  componentWillUnmount() {},

  render() {

    return (
      <article>

        <Header>About Me</Header>

        <div className="grid dsktp-2 mob-1">

          <div className="pam">

            <h3 className="mbm">As a Developer, I...</h3>

            <p className="mbs">As a developer, I have many years of commercial experience in building robust and scalable websites, Progressive Web Apps and API's. I write fullstack JavaScript and enjoy taking a project on from end-to-end. As a confident Linux user I am comfortable using the CLI and writing build scripts. As a UI developer I am completely au fait with SASS and have extensive experience with animations (CSS, SVG and WebGL). My experience with React and Cordova has enabled me to migrate projects to React Native, where I currently see an exciting future for native app development. I am a keen functional programmer and have a proactive approach to learning new skills / keeping skills up-to-date.</p>

            <p className="mbs">I am experienced in communicating with stakeholders and clients alike, whether consulting for small enterprises or scoping projects for multinationals (Jaguar Land Rover, Good Energy, Nike, VUE, et al). As a Kanban evangelist, I have brought Agile working to teams and believe in quick and direct communication with all colleagues and stakeholders. My work history (which also includes music and guitar teaching) has enabled me to effectively mentor junior developers and has given me a lifelong appreciation for what can be achieved by teamwork, as well as the ability to be effective both solo and remotely.</p>

            <p className="mtl"><a href="mailto:edwilliamsdevelopment@gmail.com">edwilliamsdevelopment@gmail.com</a></p>

          </div>

          <img className="prm mbs" src="img/ed.png"/>

        </div>

        <Footer/>

      </article>
    )

  }

})

export default About
