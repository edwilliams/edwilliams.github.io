import React from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Item from '../../components/item'

const style = () => `
.container-small {
  max-width: 1024px;
  margin: 0 auto;
}
@media screen and (max-width: 600px) {
  .container-small {
    padding: 0 15px;
  }
}
`

class Home extends React.Component {
  render() {
    const { projects } = this.props

    return (
      <article>
        <Header>Ed Williams</Header>

        <style>{style()}</style>

        <div className="mbxl">
          <div className="container-small grid dsktp-2 mob-1">
            {Object.keys(projects).map((key, i) => {
              const project = projects[key]
              return (
                <Item
                  key={i}
                  img={project.logo}
                  title={project.title}
                  subTitle={project.subTitle}
                  desc={project.desc}
                  url={key}
                />
              )
            })}
          </div>
        </div>

        <Footer />
      </article>
    )
  }
}

export default Home
