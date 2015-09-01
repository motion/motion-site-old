import { Spring } from 'react-motion'

view DemoCircles {
  @circles = [[100,100]]

  addCircle = (x,y) => @circles.push([x,y])
  left = x => x - this.refs.circles.getDOMNode().getBoundingClientRect().left
  top = y => y - this.refs.circles.getDOMNode().getBoundingClientRect().top

  <circles ref="circles" onClick={e => addCircle(left(e.clientX), top(e.clientY))}>
    <Circle repeat={@circles} pos={_} nokey />
  </circles>

  $circles = { width: 800, height: 800 }
}

view Circle {
  c = () => Math.round(Math.random()*255)
  background = `rgb(${c()}, ${c()}, ${c()})`
  size = ^size || 20

  <Spring defaultValue={{ val: 0 }} endValue={{ val: 100, config: [500,10] }}>
    {i => (
      <circle style={{
        borderRadius: 100,
        background,
        position: 'absolute',
        top: ^pos[1], left: ^pos[0],
        width: i.val, height: i.val,
        margin: [-i.val/2, 0, 0, -i.val/2]
      }} />
    )}
  </Spring>

  $ = false
}
