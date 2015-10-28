import { Motion, spring } from 'react-motion'
import offset from 'mouse-event-offset'

view DemoCircles {
  <Example flip inPage
    inStyle={{ flexGrow: 0, width: 400 }}
    in={
      <Editor left light
        lines={21}
        sources={[
          {
            title: 'Circles.js',
            source: `
      import offset from 'mouse-event-offset'

      view Circles {
        let coords = [[200, 200]]

        function addCircle(click) {
          coords.push(offset(click))
        }

        <circles onClick={addCircle}>
          <Circle repeat={coords}
            left={_[0]}
            top={_[1]}
          />
        </circles>

        $circles = { height: 400 }
      }
        `
          },
          {
            title: 'Circle.js',
            source: `
      view Circle {
        let c = () => Math.round(Math.random()*255)
        let base = {
          background: [c(), c(), c()],
          position: 'absolute',
          { top, left }: view.props,
          [ width, height ]: [80, 80]
          borderRadius: 100
        }

        let style = scale =>
          ({ ...base, transform: { scale } })

        <Motion
          defaultStyle={{x: 0}}
          style={{x: spring(1, [300, 10])}}>
            {s => <c style={style(s.x)} /> }
        </Motion>
      }
            `
           }
        ]} />
    }
    out={
      <Circles />
    } />
}

const onScrollTo = (targetY, cb) => {
  let timeout = null
  let hasScrolledTo = false

  on('scroll', () => {
    if (timeout || hasScrolledTo) return
    timeout = setTimeout(() => {
      clearTimeout(timeout)
      timeout = null

      if (window.scrollY + window.innerHeight >= targetY) {
        hasScrolledTo = true
        cb();
      }
    }, 100)
  })
}

view Circles {
  let coords = []

  on('mount', () => {
    const targetY = util.docOffset(view.refs.circles).top + 400
    onScrollTo(targetY, () =>
      coords = coords.concat({ x: 200, y: 200 }))
  })

  const addCircle = e => coords = coords.concat(offset(e))

  <circles ref="circles" onClick={addCircle}>
    <Circle repeat={coords} left={_.x} top={_.y} />
  </circles>
  <desc>
    Try clicking around above to add circles
  </desc>

  $circles = {
    height: 430,
    padding: [0, 40],
    cursor: 'pointer'
  }

  $desc = {
    textAlign: 'center',
    fontSize: 15,
    opacity: 0.8,
    fontWeight: 'bold'
  }
}

view Circle {
  const c = () => Math.round(Math.random()*255)
  const baseStyle = {
    background: [c(), c(), c()],
    top: view.props.top,
    left: view.props.left,
    width: 80,
    height: 80,
    margin: [0, 0, 0, -40],
    borderRadius: 100,
    position: 'absolute'
  }

  const style = scale => ({ ...baseStyle, transform: { scale, translate3d: '0,0,0' } })

  <Motion
    defaultStyle={{x: 0}}
    style={{x: spring(1, [300, 10])}}>
      {i => <c style={style(i.x)} /> }
  </Motion>
}
