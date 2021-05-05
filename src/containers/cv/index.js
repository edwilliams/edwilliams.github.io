import React from 'react'

// import Header from 'components/header'

class CV extends React.Component {
  render() {
    return (
      <div
        ref={el => {
          this.container = el
        }}
      >
        <style>{`
          iframe {
            position: absolute;
            width: calc(100% - 30px);
            height: calc(100% - 30px);
            top: 74px;
            left: 15px;
          }
        `}</style>

        {/* <Header>Ed Williams - CV</Header> */}

        <iframe src="cv-ed-williams.pdf"></iframe>
      </div>
    )
  }
}

export default CV
