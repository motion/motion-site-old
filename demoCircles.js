import { Spring } from 'react-motion'

view DemoCircles {
  @circles = [[100,100]]

  addCircle = (x,y) => @circles.push([x,y])
  left = x => x - this.refs.circles.getDOMNode().getBoundingClientRect().left
  top = y => y - this.refs.circles.getDOMNode().getBoundingClientRect().top

  <circles ref="circles" onClick={e => addCircle(left(e.clientX), top(e.clientY))}>
    <Circle repeat={@circles} pos={_} key={`${_[0]}${_[1]}`} />
  </circles>

  $circles = {
    width: 800,
    height: 800
  }
}

view Circle {
  c = () => Math.round(Math.random()*255)
  background = `rgb(${c()}, ${c()}, ${c()})`
  size = ^size || 20

  circle = size => ({
    borderRadius: 100,
    background,
    position: 'absolute',
    top: ^pos[1], left: ^pos[0],
    width: size, height: size,
    margin: [-size/2, 0, 0, -size/2]
  })

  <Spring defaultValue={0} endValue={100}>
    {i => <circle style={circle(i)} />}
  </Spring>

  $ = false
}
