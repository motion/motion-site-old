import { Spring } from 'react-motion'
import offset from 'mouse-event-offset'

view DemoCircles {
  @coordinates = [{ x: 10, y: 10 }]

  addCircle = e => @coordinates.push(offset(e))

  <circles onClick={addCircle}>
    <Circle repeat={@coordinates} left={_x} top={_y} nokey />
  </circles>

  $circles = { height: 400 }
}

view Circle {
  c = () => Math.round(Math.random()*255)
  style = {
    background: `rgb(${c()}, ${c()}, ${c()})`,
    left: ^left,
    top: ^top,
    width: 40, height: 40,
    marginLeft: -20,
    borderRadius: 100,
    position: 'absolute'
  }

  <Spring defaultValue={{ val: 0 }} endValue={{ val: 1, config: [300, 10] }}>
    {i => <circle style={{ ...style, transform: `scale(${i.val})` }} />}
  </Spring>
}
