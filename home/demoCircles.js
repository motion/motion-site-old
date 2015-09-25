import { Spring } from 'react-motion'
import offset from 'mouse-event-offset'

view DemoCircles {
  let coords = []
  let hasScrolledTo = false

  on(view, 'mount', () => {
    const circles = document.querySelector('circles')
    const targetY = util.docOffset(circles).top + 400

    let timeout = null

    on(window, 'scroll', () => {
      // debugger
      if (timeout || hasScrolledTo) return
      timeout = setTimeout(() => {
        clearTimeout(timeout)
        timeout = null

        if (window.scrollY + window.innerHeight >= targetY) {
          hasScrolledTo = true
          coords = coords.concat({ x: 200, y: 200 })
        }

      }, 100)
    })
  })

  window.abc = view

  const addCircle = e => coords = coords.concat(offset(e))

  <circles id="circles" onClick={e => {
    console.log(offset(e))
    addCircle(e)
  }}>
    <Circle repeat={coords} left={_.x} top={_.y} />
  </circles>
  <test>
    {console.log('should render')}
  </test>
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
    opacity: 0.8,
    fontWeight: 'bold'
  }
}

view Circle {
  const c = () => Math.round(Math.random()*255)
  const baseStyle = {
    background: `rgb(${c()}, ${c()}, ${c()})`,
    top: ^top, left: ^left,
    width: 80, height: 80,
    margin: [0, 0, 0, -40],
    borderRadius: 100,
    position: 'absolute'
  }

  const style = scale => ({ ...baseStyle, transform: { scale } })

  <Spring defaultValue={{ val: 0 }} endValue={{ val: 1, config: [300, 10] }}>
    {i => <circle style={style(i.val)} />}
  </Spring>
}
