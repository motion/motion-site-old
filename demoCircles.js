import { Spring } from 'react-motion'

view DemoCircles {
  range = i => Array.apply(i,Array(i)).map((_, i) => i)

  @num = 0

  <title>Num circles: {@num}</title>
  <input type="range" sync={@num} />
  <circles>
    <Circle repeat={range(@num)} />
  </circles>

  $ = {
    flexFlow: 'row',
    margin: 'auto',
    width: 300
  }
}

view Circle {
  c = () => Math.round(Math.random()*255)
  circle = () => ({
    borderRadius: 100,
    width: ^size || 200,
    height: ^size || 200,
    flexShrink: 0,
    margin: ['auto', -40],
    opacity: 0.5,

    background: `rgb(${c()}, ${c()}, ${c()})`
  })

  <Spring defaultValue={0} endValue={100}>
    {i => <circle style={[circle(), { marginLeft: i }]} />}
  </Spring>

  $ = false
}
