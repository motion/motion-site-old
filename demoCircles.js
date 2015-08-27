view DemoCircles {
  @num = 0

  <input type="range" sync={@num} />
  <Circle repeat={@num} />

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
