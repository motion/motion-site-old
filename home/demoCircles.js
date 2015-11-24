import { Motion, spring } from 'react-motion'
import offset from 'mouse-event-offset'

view DemoCircles {
  <Example flip inPage
    inStyle={{ width: 240 }}
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
      import { spring, Motion } from 'react-motion'

      view Circle {
        let c = () => Math.round(Math.random()*255)
        let background = [c(), c(), c()]
        let style = scale => ({ transform: { scale } })

        <Motion defaultStyle={{ x: 0 }}
          style={{ x: spring(1, [300, 10]) }}>
          {i =>
            <circle style={style(i.x)} />
          }
        </Motion>

        $circle = {
          background,
          position: 'absolute',
          top: view.props.top,
          left: view.props.left,
          width: 80, height: 80
          borderRadius: 100
        }
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

  on.scroll(() => {
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

  on.mount(() => {
    const targetY = util.docOffset(view.refs.circles).top + 400
    onScrollTo(targetY, () => coords.push([200, 200]))
  })

  function addCircle (e) {
    coords.push(offset(e))
  }

  <circles ref="circles" onClick={addCircle}>
    <Circle repeat={coords} left={_[0]} top={_[1]} />
    <desc>
      Try clicking around to add circles
    </desc>
  </circles>

  $circles = {
    height: 430,
    padding: [0, 40],
    cursor: 'pointer'
  }

  $desc = {
    textAlign: 'center',
    fontSize: 15,
    opacity: 0.8,
    pointerEvents: 'none',
    userSelect: 'none',
  }
}

view Circle {
  const c = () => Math.round(Math.random()*255)
  const background = [c(), c(), c()]

  <Motion
    defaultStyle={{scale: 0}}
    style={{scale: spring(1, [300, 10])}}>{({ scale }) =>
      <circle style={{ transform: { scale }}} />
  }</Motion>

  $circle = {
    background,
    top: view.props.top,
    left: view.props.left,
    width: 80,
    height: 80,
    margin: [0, 0, 0, -40],
    borderRadius: 100,
    position: 'absolute',
    translate3d: '0,0,0'
  }
}
