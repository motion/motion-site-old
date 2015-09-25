import { Spring } from 'react-motion'
import offset from 'mouse-event-offset'

const onScrollTo = (targetY, cb) => {
  let timeout = null
  let hasScrolledTo = false

  on(window, 'scroll', () => {
    if (timeout || hasScrolledTo) return
    timeout = setTimeout(() => {
      clearTimeout(timeout)
      timeout = null

      if (window.scrollY + window.innerHeight >= targetY) {
        hasScrolledTo = true
        cb();
      }
    }, 100)
  })
}

view DemoCircles {
  let coords = []

  on(view, 'mount', () => {
    const targetY = util.docOffset(view.refs.circles).top + 400

    onScrollTo(targetY, () => {
      coords = coords.concat({ x: 200, y: 200 })
    })
  })

  const addCircle = e => coords = coords.concat(offset(e))

  <circles ref="circles" onClick={addCircle}>
    <Circle repeat={coords} left={_.x} top={_.y} />
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
