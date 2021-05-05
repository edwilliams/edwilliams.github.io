import React from 'react'
// import Header from 'components/header'
import Footer from 'components/footer'

const style = () => `
@media screen and (max-width: 600px) {
  .about {
    flex-direction: column-reverse;
    display: flex;
  }
}

.about-img {
  padding: 0 20px 0 0;
}
@media screen and (max-width: 600px) {
  .about-img {
    padding: 20px 0 0 0;
  }
}
`

class About extends React.Component {
  render() {
    return (
      <article>
        <div className="container-large">{/* <Header>About Me</Header> */}</div>

        <style>{style()}</style>

        <div className="about container-small grid dsktp-2 mob-1">
          <div className="pam">
            <h3 className="mbm">Contract Software Engineer</h3>

            {this.props.about.map((line, i) => (
              <p key={i} className="mbs">
                {line}
              </p>
            ))}

            <p className="mbs">---</p>

            <a href="mailto:edwilliamsdevelopment@gmail.com">{this.props.email}</a>

            {/* <p className="mtl">
              To download a copy of my CV, <a href="#/CV">please click here</a>.
            </p> */}
          </div>

          <img className="about-img mbs" src="img/ed.png" />
        </div>
        <Footer />
      </article>
    )
  }
}

export default About
