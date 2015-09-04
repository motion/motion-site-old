import { Spring } from 'react-motion'
import offset from 'mouse-event-offset'

view DemoCircles {
  @coords = [{ x: 200, y: 200 }]

  addCircle = e => @coords.push(offset(e))

  <circles onClick={addCircle}>
    <Circle repeat={@coords} left={_x} top={_y} />
  </circles>

  $circles = { height: 430 }
}

view Circle {
  c = () => Math.round(Math.random()*255)
  style = {
    background: `rgb(${c()}, ${c()}, ${c()})`,
    top: ^top, left: ^left,
    width: 80, height: 80,
    margin: [-20, 0, 0, -40],
    borderRadius: 100,
    position: 'absolute'
  }

  <Spring defaultValue={{ val: 0 }} endValue={{ val: 1, config: [300, 10] }}>
    {i => <circle style={{ ...style, transform: `scale(${i.val})` }} />}
  </Spring>
}
