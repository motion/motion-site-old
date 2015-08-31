import { Spring } from 'react-motion'

view DemoCircles {
  @num = 0

  <input type="range" sync={@num} />
  <circles repeat={[1,2,3]}>
    {_}
  </circles>
  <circles repeat={100}>
    hello
  </circles>
  <circles>
    <Spring defaultValue={0} endValue={100}>
      {i => <div style={{margin: i, background: 'red', width: 20, height: 20}} />}
    </Spring>
  </circles>

  $ = {
    flexFlow: 'row',
    margin: 'auto',
    width: 300
  }
}

view Circle {
  c = () => Math.round(Math.random()*255)

  <circle />

  $ = {
    borderRadius: 100,
    width: ^size || 200,
    height: ^size || 200,
    flexShrink: 0,
    margin: ['auto', -40],
    opacity: 0.5,

    background: `rgb(${c()}, ${c()}, ${c()})`
  }
}
