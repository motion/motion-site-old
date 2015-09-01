import { Spring } from 'react-motion'

view DemoCircles {
  @num = 0

  <input type="range" sync={@num} />
  <Circles num={@num} />
}

view Circles {
  range = i => Array.apply(i,Array(+i)).map((_, i) => i)

  <Circle repeat={range(^num)} />

  $ = { flexFlow: 'row' }
}

view Circle {
  c = () => Math.round(Math.random()*255)
  bg = `rgb(${c()}, ${c()}, ${c()})`

  circle = () => ({
    borderRadius: 100,
    width: ^size || 20,
    height: ^size || 20,
    flexShrink: 0,
    margin: ['auto', 0],
    background: bg
  })

  <Spring defaultValue={0} endValue={5}>
    {i => <circle style={[circle(), { marginLeft: i }]} />}
  </Spring>

  $ = false
}
