import React from 'react'
import { saveAs, createName } from './utils'
import PDFmake from './PDFmake'
import DD from './DD'

import Header from '../../components/Partials/Header'

class CV extends React.Component {

  componentDidMount() {

    const pdfDocGenerator = PDFmake(DD)

    pdfDocGenerator.getDataUrl((dataUrl) => {
      const iframe = document.createElement('iframe')
      iframe.src = dataUrl
      this.container.appendChild(iframe)
    })

  }

  render() {
    return (
      <div ref={el => { this.container = el }}>

        <style>{`
          iframe {
            position: absolute;
            width: calc(100% - 30px);
            height: calc(100% - 30px);
            top: 74px;
            left: 15px;
          }
        `}</style>

        <Header>Ed Williams - CV</Header>

      </div>
    )
  }

}

export default CV
