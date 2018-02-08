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

        <div className="grid col-2">

          <div className="pam">

            <h3 className="mbm">As a Developer, I...</h3>

            <ul className="pls">
              <li className="mbs">- build Web App, Progressive Web Apps and API's</li>
              <li className="mbs">- have years of experience writing Apps with React and Redux</li>
              <li className="mbs">- write isomorphic JavaScript for both the client and server</li>
              <li className="mbs">- deploy Apps to App Store / Google Play using Cordova</li>
              <li className="mbs">- prefer styling Apps with JavaScript but have years of SASS experience</li>
              <li className="mbs">- scope projects for small enterprises and multinationals (Nike, Vue, et al)</li>
              <li className="mbs">- have built many robust and scalable API's with PHP</li>
              <li className="mbs">- communicate with all stakeholders and clients alike</li>
              <li className="mbs">- can deliver quality code under pressure and on time</li>
              <li className="mbs">- provide effective mentoring to junior developers</li>
              <li className="mbs">- work in teams and solo / remotely</li>
            </ul>

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
