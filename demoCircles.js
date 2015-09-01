import { Spring } from 'react-motion'

view DemoCircles {
  @num = 0

  <input type="range" sync={@num} />
  <Circles num={@num} />
}

view Circles {
  @circles = [[0,0], [100,100]]

  addCircle = (x,y) => @circles = [[x,y]]
  left = x => x - this.refs.circles.getDOMNode().getBoundingClientRect().left
  top = y => y - this.refs.circles.getDOMNode().getBoundingClientRect().top

  <circles ref="circles" onClick={e => addCircle(left(e.clientX), top(e.clientY))}>
    <Circle repeat={@circles} pos={_} />
  </circles>

  $ = {
    width: 500,
    height: 500
  }
}

view Circle {
  c = () => Math.round(Math.random()*255)
  bg = `rgb(${c()}, ${c()}, ${c()})`

  console.log(^pos)

  circle = () => ({
    borderRadius: 100,
    width: ^size || 20,
    height: ^size || 20,
    flexShrink: 0,
    background: bg,
    position: 'absolute',
    top: ^pos[0],
    left: ^pos[1]
  })

  <Spring defaultValue={0} endValue={5}>
    {i => <circle style={[circle(), { marginLeft: i }]} />}
  </Spring>

  $ = false
}
