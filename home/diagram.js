import { style, color, routes, font, device } from '../constants'

view Diagram {
  prop hoverIndex

  let hover = false

  on.props(() => {
    hover = typeof hoverIndex != 'undefined' ? hoverIndex : hover
  })

  function sectionHover(i) {
    return {
      onMouseEnter: () => hover = i,
      onMouseLeave: () => hover = false
    }
  }

  <round />
  <section {...sectionHover(1)} class="side">
    <Icon.Browser class="icon" highlight={hover == 1} />
  </section>
  <section {...sectionHover(2)} class="point">
    <Icon.Motion class="icon" highlight={hover == 2} />
  </section>
  <section {...sectionHover(3)} class="side right">
    <Icon.Editor class="icon" highlight={hover == 3} />
  </section>

  $ = {
    flexFlow: 'row',
    alignItems: 'space-around',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1000,
    margin: 'auto'
  }

  const roundSize = 200

  $round = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    width: roundSize,
    height: roundSize,
    margin: [-(roundSize / 2), 0, 0, -(roundSize / 2)],
    zIndex: 0,
    background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.02))',
    borderRadius: 10000,

    [device.small]: {
      display: 'none'
    }
  }

  $section = {
    alignItems: 'center',
    padding: [0, 22],
    maxWidth: 400,
    alignSelf: 'flex-start',
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',

    [device.small]: {
      margin: 'auto',
      width: '100%',
      flexFlow: 'row'
    }
  }

  $icon = {
    transition: 'all ease-in 200ms',
    transform: { scale: 0.95 },

    hover: {
      transform: { scale: 1 }
    }
  }

  let sidePull = -20

  $side = {
    flexFlow: 'row-reverse',
    padding: [0],
    margin: [15, sidePull, 0, 0],
    textAlign: 'right'
  }

  $right = {
    flexFlow: 'row',
    margin: [15, 0, 0, sidePull],
    textAlign: 'left',
  }

  const lineSize = 200
  const iconSize = 100

  $point = {
    margin: [iconSize + 40, -30, 0]
  }
}
