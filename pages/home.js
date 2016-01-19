view Home {
  <Home.Head />
  <Home.Install />
  <Home.Modern />
  <Home.Platform />
  <Home.Syntax />
  // <Home.Tools />
  <Home.Apps />
  <Home.Community />
  // <Home.Triple />
  <Home.Features />
  <Footer />

  $ = { width: '100%' }
}

view Button {
  <button yield />

  $ = {
    color: '#fff',
    textShadow: '0 1px 0 rgba(0,0,0,0.2)',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    background: color.brand1,
    border: 'none',
    borderBottom: [2, 'solid', color(color.brand1).darken(1).hex()],
    borderRadius: 5,
    fontSize: 18,
    padding: [8, 28],
    alignItems: 'center'
  }
}

view Home.Head {
  <Header nobg />
  <vid>
    <banner>
      <h1>Build great applications faster than ever before</h1>
      <Button><lt>Watch the video now</lt> Coming soon!</Button>
      <svg if={false} viewBox="0 0 510 510">
        <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M204,369.75v-229.5L357,255 L204,369.75z"/>
      </svg>
    </banner>
    <top class="bg" />
    <top class="bg2" />
    <top class="bg4" />
    <BackgroundVideo />
  </vid>

  $ = {
    background: style.gradient,
    color: '#fff',
    flexFlow: 'column',
    overflow: 'hidden',
    position: 'relative',
    minHeight: Math.min(window.innerHeight, 680),
    textShadow: '0 1px 1px rgba(0,0,0,0.35)'
  }

  $Button = {
    margin: [25, 'auto', 0],
    transition: 'all linear 200ms',

    hover: {
      transform: {
        scale: 1.1
      }
    }
  }

  $lt = {
    textDecoration: 'line-through',
    opacity: 0.5,
  }

  $vid = {
    flexGrow: 1,
    padding: 20,
  }

  $banner = {
    margin: 'auto',
    zIndex: 1000,
    fontWeight: 600
  }

  $h1 = {
    fontSize: 34,
    letterSpacing: -1,
    textShadow: '0 2px 1px rgba(0,0,0,0.2)',
    margin: [20, 'auto', 0],
    lineHeight: 1.3,
    textAlign: 'center'
  }

  $svg = {
    fill: '#fff',
    width: 75,
    height: 75,
    margin: [20, 'auto', -20],
    boxShadow: [255,255,255, 10,0.2],
    opacity: 0.5,

    hover: {
      opacity: 1
    }
  }

  $top = {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 50,
    left: 0,
    zIndex: 2,
    backdropFilter: 'blur(10px)',

    [device.small]: {
      display: 'none'
    }
  }

  $bg2 = {
    background: style.gradient,
    opacity: 0.8
  }

  $bg4 = {
    background: `linear-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0,0.25))`,
    zIndex: 1,
    height: '100%'
  }

  $BackgroundVideo = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    opacity: 0.2,
    transform: {
      scale: 1.2,
    }
  }

  $lead = {
    fontSize: 38,
    lineHeight: '3.0rem',
    fontWeight: 700
  }

  $mid = {
    padding: [20, 0],
    position: 'relative',
    zIndex: 10
  }

  $text = {
    marginRight: 40
  }
}

view BackgroundVideo {
  <video root muted preload autoplay loop>
    <source src="https://d2p1e9awn3tn6.cloudfront.net/3LiSUD9TiF.webm" />
  </video>

  $ = {
    ':before': {
      display: 'block',
      content: ' ',
      position: 'absolute',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'red'
    }
  }
}


view Home.Triple {
  <Feature odd center col>
    <Title>Triple section</Title>
    <IntroText>A platform to make all your tools talk</IntroText>

    <Row class="diagrams">
      <Col>
        <Icon.Browser />
        <IntroText class="sub">Browser</IntroText>

      </Col>
      <Col>
        <Icon.Flint />
        <IntroText class="sub">Compiler</IntroText>

      </Col>
      <Col>
        <Icon.Editor />
        <IntroText class="sub">Editor</IntroText>

      </Col>
    </Row>
  </Feature>

  $diagrams = {
    padding: [20, 90, 0]
  }

  $Col = {
    padding: [0, 25],
    width: '33%',
    alignItems: 'center'
  }

  $sub = {
    margin: [10, 0, 0]
  }
}


view Home.Platform {
  let sections = () => ([
    {
      title: 'Editor',
      description: <Text small>
        Websockets enable <Attr alt="Updates your app with each character, avoids writing to file system.">as-you-type updates</Attr> with Atom.&nbsp;
        <Attr alt="While you Focus, Flint avoids file watchers & streams updates at fast as they happen.">Drag numbers and colors</Attr> to instantly see results.
      </Text>
    },
    {
      title: 'Browser',
      description: <Text small>
        <Attr alt="When combined with Live updates, smart reloads allow a faster, simpler way to program.">Smarter hot reloads</Attr> refresh instantly & retain child state.
        <Attr alt="Errors are recovered from automatically, displayed in your browser, and your app won't flicker or break."> Helpful</Attr> errors from compiler.
        <Attr alt="Right click on any part of your app and jump to the appropriate view in your editor."> Jump to editor</Attr> just by right clicking.
      </Text>
    },
    {
      title: 'Compiler',
      description: <Text small>
        <Attr alt="Static style changes don't even reload Javascript for insane performance.">Static CSS extraction</Attr> gives amazing performance.
        <Attr alt="Flint scans your code as you type, installs any found npm packages & injects them into your app: no state lost."> Automatic npm installs</Attr> to totally avoid touching the command line.
      </Text>
    },
  ])

  <Feature odd col>
    <Title>An open & extensible platform</Title>
    <IntroText class="sub">We unite your tools enabling <em>entirely new ways of programming</em></IntroText>

    <Row class="small2">
      <Col centered>
        <Diagram />
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
    width: '80%',
    margin: [30, 0, -100],

    [device.small]: {
      margin: [20, 0],
      flexFlow: 'column',
    }
  }

  $sections = {
    width: 400,
    margin: 'auto'
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
}


view Diagram {
  let hover = false

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
    <Icon.Flint class="icon" highlight={hover == 2} />
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

  let sidePull = 0

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



let already = false

view Home.Modern {
  let start = already || false

  function triggerEvent(id, name) {
    let event = document.createEvent('CustomEvent')
    event.initCustomEvent(name, true, true, null)
    let frame = document.getElementById(id)
    let frameWin = frame.contentDocument || frame.contentWindow.document
    frameWin.body.dispatchEvent(event)
  }

  <Feature>
    <Row centered>
      <Col grow={2} class="content">
        <Title>Start in seconds, not days</Title>
        <IntroText>
          No configuration. No boilerplate.<br />
          An ultra-modern React stack is just the start.
        </IntroText>

        <Text small>
          Flint is an <b>extensible</b> and <b>sensible</b> stack designed to let you be more productive and creative.
        </Text>
      </Col>
      <Col class="example">
        <Editor right
          lines={7}
          id="headeriframe"
          onLoad={() => {
          if (already) {
          triggerEvent('headeriframe', 'end')
          return
          }
          start = true
          already = true
          triggerEvent('headeriframe', 'start')
          }}
        iframe={`/assets/examples/example.html`} />
      </Col>
    </Row>
  </Feature>

  $Feature = {
    maxWidth: 920,
    margin: 'auto'
  }

  $Editor = {
    minWidth: 320,
    width: '60%',

    [device.small]: {
      margin: 'auto'
    }
  }

  $content = {
    width: '40%',
    paddingRight: 40,
    justifyContent: 'center',

    [device.small]: {
      padding: [0, 0, 30],
      width: '100%'
    }
  }

  $img = {
    width: 425,
    margin: [0, -300, 0, 0]
  }
}

view Home.Apps {
  <Feature>
    <Row reverse>
      <Col class="example">
        <a href="https://emotipost.com" target="_blank"><img src="/assets/images/emoti.png" /></a>
      </Col>

      <Col class="content">
        <Title>Ready for Production</Title>
        <IntroText>
          Flint is in use at large companies and for small projects. We're gathering some quotes and
          examples for this section.
        </IntroText>

        <Text>
          <Link href="https://emotipost.com" target="_blank">Emotipost</Link> was built by an early adopter in just two weeks.
        </Text>
      </Col>
    </Row>
  </Feature>

  $Feature = {
    overflow: 'hidden'
  }

  $Row = {
    flexFlow: 'row',
    margin: [0, 0, -20]
  }

  $example = {
    margin: [0, 0, -130]
  }

  $content = {
    padding: [30, 50, 30, 20],
    width: '20%',
    justifyContent: 'center'
  }

  $p = {
    fontSize: 18,
    color: '#999',
    width: 500
  }

  $img = {
    width: 425,
    margin: [0, -300, 0, 0]
  }
}

view Home.Syntax {
  let demo = 'DemoCounter'

  <Feature col>
    <Title>Views in Javascript</Title>
    <IntroText>Learn all of Flint in minutes:</IntroText>

    <Row class="nav" center>
      <Sel active={demo} name="DemoCounter" onClick={_ => demo = _}>Counter</Sel>
      <Sel active={demo} name="DemoVenn" onClick={_ => demo = _}>Styling</Sel>
      <Sel active={demo} name="DemoCircles" onClick={_ => demo = _}>Animation</Sel>
    </Row>

    <Row class="demos">
      <Col>
        {view.el(demo, { className: 'example' })}
      </Col>
    </Row>
  </Feature>

  $Col = {
    padding: [30, 0]
  }

  $nav = {
    margin: [-8, 'auto', 10],
    padding: [3, 0],

    [device.small]: {
      margin: 'auto',
    }
  }

  $side = {
    maxWidth: 200
  }

  $demos = {
    maxWidth: 900
  }

  $example = {
    width: '100%'
  }
}

view Sel {
  prop onClick, name, active, children

  <a root onClick={() => onClick(name)}>
    {children}
  </a>

  const isActive = () => active == name
  $ = [
    {
      fontSize: 14,
      padding: [3, 12],
      margin: [0, 2]
    },

    onClick && {
      color: isActive() ? '#333' : '#999',
      cursor: 'pointer',
      border: '1px solid transparent',
      borderColor: isActive() ? '#eee' : 'transparent',
      borderRadius: 100,

      hover: {
        borderColor: `rgba(0,0,0,0.1)`
      }
    }
  ]
}

view Home.Tools {
  <Feature bg={`linear-gradient(${color.brand2} 60%, ${color(color.brand2).darken(0.3).hex()})`} col>
    <Title light center>
      Seamless development with powerful tools
    </Title>

    <img src="/assets/images/tools.png" />
  </Feature>

  $img = {
    width: '100%',
    margin: [0, 'auto', -40]
  }
}

view Home.Community {
  <Feature>
    <inner>
      <Col class="content">
        <Title>Powered by Open</Title>
        <IntroText>
        Flint is and runs on open source. We keep a public roadmap, make decisions with the community on Github, and sponsor open source on Patreon.
        </IntroText>

        <Text>
        Join our community on Slack today and read our code of conduct.
        </Text>

        <cloud>
          <a href="http://facebook.github.io/react" target="_blank"><img src="/assets/images/logos/react.svg" /></a>
          <a href="http://npmjs.com" target="_blank"><img src="/assets/images/logos/npm.svg" /></a>
          <a href="http://babeljs.io" target="_blank"><img src="/assets/images/logos/babel.svg" /></a>
          <a href="https://webpack.github.io/" target="_blank"><img src="/assets/images/logos/webpack.svg" /></a>
          <a href="http://gulpjs.com/" target="_blank"><img src="/assets/images/logos/gulp.svg" /></a>
          <a href="https://github.com/postcss/autoprefixer" target="_blank"><img src="/assets/images/logos/autoprefixr.svg" /></a>
          <a href="http://projects.formidablelabs.com/radium/" target="_blank"><img src="/assets/images/logos/radium.png" /></a>
        </cloud>
      </Col>

      <Col class="example">
        <Slack />
      </Col>
    </inner>
  </Feature>

  $Feature = {
    overflow: 'hidden'
  }

  $inner = {
    flexFlow: 'row',
  }

  $content = {
    padding: [20, 50, 0, 20],
    width: '50%',
    justifyContent: 'center'
  }

  $cloud = {
    flexFlow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: [20, 'auto', 0]
  }

  const size  = 50

  $img = {
    width: size,
    maxHeight: size,
    margin: [0, 5, 20],
    filter: 'grayscale(100%) opacity(50%)',
    transition: 'all ease-in 400ms',
    hover: { filter: 'grayscale(0%) opacity(100%)' },
    alignSelf: 'center'
  }

  $a = {
    alignSelf: 'center'
  }
}

view Home.Features {
  <Feature col>
    <Title center>Everything you need to be productive today</Title>
    <IntroText center>Start in seconds, be more creative & deploy today</IntroText>
    <Features />
  </Feature>
  $Feature = { border: 'none', paddingBottom: 0 }
}




view Feature {
  prop bg, center, col, odd, slim, dark, reverse, children

  <Contain>{children}</Contain>

  const padheight = slim ? 0 : 75

  $ = {
    padding: [padheight - 30, 50, padheight],
    textAlign: center ? `center` : `left`,
    alignItems: 'center',
    flexFlow: col ? `column` : reverse ? `row-reverse` : `row`,
    borderBottom: dark ? [10, 'solid', '#eee'] : [1, 'solid', '#eee'],
    borderTop: dark ? [10, 'solid', '#eee'] : 'none',
    color: dark ? `#fff` : `auto`,
    background: bg ? bg : dark ? `linear-gradient(130deg, #3f3f95 70%, #333360)` : odd ? `#fcfcfc` : `auto`,

    [device.small]: {
      padding: [30, 30]
    }
  }
}