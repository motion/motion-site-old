import { style, color, routes, font, device } from '../constants'

view Home.Platform {
  let hoverIndex = false

  let sections = () => ([
    {
      title: 'Editor',
      description: <p>
        <Attr alt="Updates your app with each character, avoids writing to file system.">As you type updates</Attr><br />
        <Attr alt="While you Focus, Motion avoids file watchers & streams updates at fast as they happen.">Move numbers and colors</Attr>
      </p>
    },
    {
      title: 'Browser',
      description: <p>
        <Attr alt="When combined with Live updates, smart reloads allow a faster, simpler way to program.">Smart Hot Reloads</Attr> retain child state.<br />
        <Attr alt="Errors are recovered from automatically, displayed in your browser, and your app won't flicker or break."> Helpful errors</Attr> inline without breaking.<br />
        <Attr alt="Right click on any part of your app and jump to the appropriate view in your editor."> Jump to editor</Attr>.
      </p>
    },
    {
      title: 'Compiler',
      description: <p>
        <Attr alt="Static style changes don't even reload Javascript for insane performance.">Static CSS extraction</Attr> with inline styles.<br />
        <Attr alt="Motion scans your code as you type, installs any found npm packages & injects them into your app: no state lost."> Automatic npm installs</Attr> without losing state.
      </p>
    },
  ])

  <Feature odd col>
    <Title>An open & extensible platform</Title>
    <IntroText class="sub">Motions unites your tools in smart ways</IntroText>
    <Row class="small2">
      <Col centered class="diagram">
        <Diagram hoverIndex={hoverIndex} />
      </Col>
      <Col class="sections">
        <section repeat={sections()}>
          <IntroText small>{_.title}</IntroText>
          {_.description}
        </section>
      </Col>
    </Row>
  </Feature>

  $sub = {
    [device.small]: {
      textAlign: 'center',
      marginBottom: 20
    }
  }

  $small2 = {
    width: '95%',
    margin: [30, 0, 0],

    [device.small]: {
      margin: [20, 0],
      flexFlow: 'column',
    }
  }

  $sections = {
    marginRight: 60,
    width: '20%'
  }

  $diagram = {
    margin: [0, -40, 0, 60]
  }

  $section = {
    padding: [5, 15],
    cursor: 'pointer',
    borderRadius: 3,

    hover: {
      background: 'rgba(0,0,0,0.05)'
    },

    [device.small]: {
      marginTop: 20,
    }
  }

  $IntroText = {
    margin: [0, 0, 0]
  }

  $Diagram = {
    margin: [60, 'auto', 0],

    [device.small]: {
      margin: [0, 'auto'],
      height: 'auto'
    }
  }

  $Title = {
    [device.small]: {
      textAlign: 'center'
    }
  }
}


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
  <line class="across" />
  <line class="slantl" />
  <line class="slantr" />
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
    width: 330,
    height: 240,
    margin: 'auto'
  }

  const roundSize = 230

  $round = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    width: roundSize,
    height: roundSize,
    margin: [-(roundSize / 2), 0, 0, -(roundSize / 2)],
    border: '10px solid rgba(255,255,255,1)',
    zIndex: 0,
    background: 'rgba(0,0,0,0.02)',
    borderRadius: 10000,

    [device.small]: {
      display: 'none'
    }
  }

  $section = {
    alignItems: 'center',
    padding: [0, 25],
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

  $line = {
    height: 3,
    width: lineSize,
    position: 'absolute',
    background: '#eee',
    zIndex: 0,

    [device.small]: {
      display: 'none'
    }
  }

  $across = {
    top: iconSize / 2 + 15,
    left: '50%',
    marginLeft: -lineSize / 2
  }

  const slantPos = iconSize + 30

  $slantl = {
    top: slantPos,
    left: '55%',
    margin: [15, 0, 0, -slantPos],
    width: slantPos,
    transform: {
      rotate: `52deg`
    }
  }

  $slantr = {
    top: slantPos,
    right: '55%',
    margin: [15, -slantPos, 0, 0],
    width: slantPos,
    transform: {
      rotate: `-52deg`
    }
  }
}
