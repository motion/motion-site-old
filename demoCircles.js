import { Spring } from 'react-motion'
import offset from 'mouse-event-offset'

view DemoCircles {
  @coords = []
  @hasScrolledTo = false

  this.componentDidMount = () => {
    targetY = util.docOffset(document.querySelector('circles')).top - 300

    @timeout = null
    on(window, 'scroll', () => {
      // debugger
      if (@timeout || @hasScrolledTo) return
      @timeout = setTimeout(() => {
        clearTimeout(@timeout)
        @timeout = null

        if (window.scrollY >= targetY) {
          @hasScrolledTo = true
          @coords.push({ x: 200, y: 200 })
        }

      }, 100)
    })
  }

  addCircle = e => @coords.push(offset(e))

  <circles id="circles" onClick={e => {
    console.log(offset(e))
    addCircle(e)
  }}>
    <Circle repeat={@coords} left={_x} top={_y} />
  </circles>
  <description>
    Try clicking around above to add circles
  </description>

  $circles = {
    height: 430,
    cursor: 'pointer'
  }

  $description = {
    textAlign: 'center',
    fontSize: 15,
    color: '#666'
  }
}

view Circle {
  c = () => Math.round(Math.random()*255)
  baseStyle = {
    background: `rgb(${c()}, ${c()}, ${c()})`,
    top: ^top, left: ^left,
    width: 80, height: 80,
    margin: [0, 0, 0, -40],
    borderRadius: 100,
    position: 'absolute'
  }

  style = scale => ({ ...baseStyle, transform: { scale } })

  <Spring defaultValue={{ val: 0 }} endValue={{ val: 1, config: [300, 10] }}>
    {i => <circle style={style(i.val)} />}
  </Spring>
}
