import React from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'

class Home extends React.Component {
  componentDidMount() {
    ;(function () {
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      var blobArray = []
      var xPos = 0
      var yPos = 0
      var triggered = false

      function config() {
        canvas.width = (window.innerWidth / 4) * 3
        canvas.height = (window.innerHeight / 4) * 3
      }

      function init() {
        config()
        events()
      }

      function events() {
        window.addEventListener(
          'mouseover',
          function (e) {
            if (triggered) return
            var animation = setInterval(function () {
              draw(xPos, yPos)
              triggered = true
            }, 30)
          },
          false
        )

        window.addEventListener(
          'mousemove',
          function (e) {
            xPos = e.x
            yPos = e.y
          },
          false
        )
      }

      // helpers
      function randomRange(min, max) {
        return Math.random() * (max - min) + min
      }

      function draw(xPos, yPos) {
        var blob = {
          x: xPos,
          y: yPos,
          xSpeed: randomRange(-10, 10),
          ySpeed: randomRange(-10, 10),
          size: 5
        }

        blobArray.push(blob)

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

        for (var i = blobArray.length - 1; i >= 0; i--) {
          blob = blobArray[i]

          ctx.fillStyle = '#F5C453'
          ctx.fillRect(blob.x, blob.y, blob.size, blob.size)

          blob.x = blob.x + blob.xSpeed
          blob.y = blob.y + blob.ySpeed

          blob.size = blob.size * 0.96
        }
      }

      init()
    })()
  }
  render() {
    return (
      <article>
        <Header>Ed Williams</Header>

        <canvas id="canvas" className="amm abs"></canvas>

        <div className="amm typo-center">
          <p className="mbs">{this.props.title}</p>
          <h3
            style={{ textDecoration: 'underline' }}
            onClick={() => {
              window.location.hash = '#/projects'
            }}
          >
            projects
          </h3>
        </div>

        <Footer />
      </article>
    )
  }
}

export default Home
