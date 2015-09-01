import { Spring } from 'react-motion'

view DemoCircles {
  range = i => Array.apply(i,Array(i)).map((_, i) => i)

  @num = 2

  <title>Num circles: {@num}</title>
  <input type="range" onChange={e => @num = e.target.value} />
  <circles>
    <Circle repeat={range(@num)} />
  </circles>

  $ = {
    flexFlow: 'row',
    margin: 'auto',
    width: 300
  }

  $circles = {
    flexFlow: 'row'
  }
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
    opacity: 0.5,
    background: bg
  })

  <Spring defaultValue={0} endValue={10}>
    {i => <circle style={[circle(), { marginLeft: i }]} />}
  </Spring>

  $ = false
}
