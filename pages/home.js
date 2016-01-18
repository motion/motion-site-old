view Home {
  <Home.Head />
  <Home.Install />
  <Home.Modern />
  <Home.Platform />
  <Home.Syntax />
  <Home.Tools />
  <Home.Apps />
  <Home.Community />
  // <Home.Triple />
  <Home.Features />
  <Footer />
}

view Home.Head {
  <HeaderAlt nobg />
  <vid>
    <banner>
      <h1>A new, open way to build apps</h1>
      <svg viewBox="0 0 510 510">
        <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M204,369.75v-229.5L357,255 L204,369.75z"/>
      </svg>
    </banner>
    <top class="bg" />
    <top class="bg2" />
    <top class="bg3" />
    <top class="bg4" />
    <BackgroundVideo />
  </vid>

  $ = {
    background: style.gradient,
    color: '#fff',
    flexFlow: 'column',
    overflow: 'hidden',
    position: 'relative',
    minHeight: 680,
    textShadow: '0 1px 1px rgba(0,0,0,0.35)'
  }

  $vid = {
    flexGrow: 1
  }

  $banner = {
    margin: 'auto',
    zIndex: 1000,
    fontWeight: 600
  }

  $h1 = {
    fontSize: 33,
    textShadow: '0 2px 6px rgba(0,0,0,0.2)',
    margin: [10, 0]
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
    background: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    top: 0,
    right: 0,
    height: 55,
    left: 0,
    zIndex: 2,
    backdropFilter: 'blur(10px)'
  }

  $bg2 = {
    background: style.gradient,
    opacity: 0
  }

  $bg3 = {
    background: `linear-gradient(-10deg, rgba(0,0,0,0) 60%, rgba(250,100,100,1))`,
    zIndex: 1,
    height: '100%'
  }

  $bg4 = {
    background: `linear-gradient(rgba(0,0,0,0) 40%, rgba(0,0,0,0.45))`,
    zIndex: 1,
    height: '100%'
  }

  $BackgroundVideo = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    opacity: 0.4,
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
    <UI.Title>Triple section</UI.Title>
    <UI.SubTitle>A platform to make all your tools talk</UI.SubTitle>

    <Row class="diagrams">
      <Col>
        <Icon.Browser />
        <UI.SubTitle class="sub">Browser</UI.SubTitle>

      </Col>
      <Col>
        <Icon.Flint />
        <UI.SubTitle class="sub">Compiler</UI.SubTitle>

      </Col>
      <Col>
        <Icon.Editor />
        <UI.SubTitle class="sub">Editor</UI.SubTitle>

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
      title: 'Browser',
      description: <Text>
        <Attr alt="When combined with Live updates, smart reloads allow a faster, simpler way to program.">Smart reloads</Attr> instantly refresh with state.
        Helpful & <Attr alt="Errors are recovered from automatically, displayed in your browser, and your app won't flicker or break.">safe</Attr> errors. <Attr alt="Right click on any part of your app and jump to the appropriate view in your editor.">Jump</Attr> to editor.
      </Text>
    },
    {
      title: 'Editor',
      description: <Text>
        Flint's ES6 compiler <Attr alt="Parses your static styles. Injects them without reloading JS for super fast reloads.">statically extracts CSS</Attr> & automatically <Attr alt="Flint scans your code as you type, installs any found npm packages & injects them into your app: no refresh needed.">installs npm</Attr>.
      </Text>
    },
    {
      title: 'Compiler',
      description: <Text>
        <Attr alt="Updates your app with each character, avoids writing to file system.">Live coding</Attr> with Atom.&nbsp;
        <Attr alt="While you Focus, Flint avoids file watchers & streams updates at fast as they happen.">Focus</Attr> mode lets you drag your numbers and colors.
      </Text>
    },
  ])

  <Feature odd col>
    <UI.Title>Connects your tools</UI.Title>
    <UI.SubTitle>Flint connects your tools in smarter ways</UI.SubTitle>

    <Row class="small">
      <Col centered>
        <Diagram />
      </Col>

      <Col class="sections">
        <section repeat={sections()}>
          <UI.SubTitle small class="subtitle">{_.title}</UI.SubTitle>
          {_.description}
        </section>
      </Col>
    </Row>
  </Feature>

  $small = {
    width: '80%',
    padding: [10, 0, 0],
    marginBottom: -140
  }

  $sections = {
    width: 400,
  }

  $section = {
    padding: [5, 20],
    cursor: 'pointer',
    borderRadius: 3,

    hover: {
      background: 'rgba(0,0,0,0.05)'
    }
  }

  $subtitle = {
    margin: [0, 0, -10],
  }

  $Diagram = {
    margin: [45, 'auto', 0]
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
    margin: 'auto',

    [device.small]: {
      width: 'auto',
      flexFlow: 'column',
      alignItems: 'center'
    }
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
      padding: [0, 20],
      marginBottom: 30,
      flexFlow: 'row',
      textAlign: 'left'
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
        <UI.Title>A smart stack for apps</UI.Title>
        <UI.SubTitle>
          An <b>extensible</b> and <b>sensible</b> set of defaults for building apps in a whole new way.
        </UI.SubTitle>

        <Text>
        It's what you get when you design from the ground up for cohesion and plugability.
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
    margin: 'auto',
    border: 'none'
  }

  $Col = {
    padding: 0
  }

  $Editor = {
    minWidth: 320,
    width: '60%',

    [device.small]: {
      margin: 'auto'
    }
  }

  $content = {
    padding: [0, 50, 0, 20],
    width: '20%',
    justifyContent: 'center'
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
        <img src="/assets/images/emoti.png" />
      </Col>

      <Col class="content">
        <UI.Title>Build amazing apps</UI.Title>
        <UI.SubTitle>
          An ultra modern React stack with everything you need to start in minutes and deploy today.
        </UI.SubTitle>

        <UI.SubTitle>
          Powerful and never before seen tools to make you and your team happy with development again.
        </UI.SubTitle>
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
    <UI.Title>Views in Javascript</UI.Title>
    <Text>In just a few examples you can learn all of Flint</Text>
    <Row class="nav" center>
      <Sel active={demo} name="DemoCounter" onClick={_ => demo = _}>Counter</Sel>
      <Sel active={demo} name="DemoVenn" onClick={_ => demo = _}>Styling</Sel>
      <Sel active={demo} name="DemoCircles" onClick={_ => demo = _}>Animation</Sel>
    </Row>

    <Row class="demos">
      <Col>
        {view.el(demo)}
      </Col>
    </Row>
  </Feature>

  $Col = {
    padding: [30, 0]
  }

  $nav = {
    margin: [8, 'auto', -7],
    padding: [3, 0]
  }

  $side = {
    maxWidth: 200
  }

  $demos = {
    maxWidth: 900
  }
}

view Sel {
  prop onClick
  prop name
  prop active

  const isActive = () => active == name

  <a root yield
    onClick={() => {
      onClick(name)
    }}
  />

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
  <Feature dark col>
    <UI.Title large center>
      Tools that make you happy
    </UI.Title>

    <img src="/assets/images/tools.png" />
  </Feature>

  $img = {
    width: '100%',
    margin: [0, 'auto', -40]
  }
}

view Old {
  <Row>
    <Col>
      <title>Amazing Errors</title>
      <UI.SubTitle>Flint recovers gracefully from errors and shows you exactly what you need.</UI.SubTitle>
    </Col>
    <Col class="side">
      <img src="/assets/images/errors.png" />
    </Col>
  </Row>

  <Row>
    <Col>
    <title small>Automatic NPM Installs</title>
    <UI.SubTitle>As you type, Flint installs npm packages, and injects them into your running app without losing state.</UI.SubTitle>
    </Col>
    <Col class="side">
      <video width="320" height="240" autoplay="autoplay" loop>
        <source src="assets/video/install.webm" type="video/webm" />
        <source src="assets/video/install.ogg" type="video/ogg" />
        <source src="assets/video/install.mp4" type="video/mp4" />
      </video>
    </Col>
  </Row>

  <Row>
    <Col>
      <title>State Inspector</title>
      <UI.SubTitle>Easy, pinable, simple state inspector.</UI.SubTitle>
    </Col>
    <Col class="side">
      <video width="320" height="240" autoplay="autoplay" loop>
        <source src="assets/video/state.mp4" type="video/mp4" />
      </video>
    </Col>
  </Row>

  $img = {
    height: 354 / 2
  }

  $side = {
    width: 300,
    overflow: 'hidden'
  }

  $Row = {
    alignItems: 'center',
    borderBottom: '1px dotted #ddd',
    padding: [10, 10],
    width: '100%'
  }
}

view Home.Community {
  <Feature>
    <inner>
      <Col class="content">
        <UI.Title>Powered by Open</UI.Title>
        <UI.SubTitle>
        Flint is and runs on open source. We keep a public roadmap, make decisions with the community on Github, and sponsor open source on Patreon.
        </UI.SubTitle>

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
    <UI.Title center>Everything you need to deploy today</UI.Title>
    <UI.SubTitle center>Start in seconds, be more creative & deploy today</UI.SubTitle>
    <Features />
  </Feature>
  $Feature = { border: 'none', paddingBottom: 0 }
}




view Feature {
  prop center, col, odd, slim, dark, reverse

  <Contain yield />

  $ = {
    padding: [slim ? 15 : 65, 50],
    textAlign: center ? `center` : `left`,
    alignItems: 'center',
    flexFlow: col ? `column` : reverse ? `row-reverse` : `row`,
    borderBottom: dark ? [10, 'solid', '#eee'] : [1, 'solid', '#eee'],
    borderTop: dark ? [10, 'solid', '#eee'] : 'none',
    color: dark ? `#fff` : `auto`,
    background: dark ? `linear-gradient(130deg, #3f3f95 70%, #333360)` : odd ? `#fcfcfc` : `auto`
  }
}

view UI.Title {
  prop center, large

  <h2 root yield />

  $ = {
    fontWeight: 200,
    fontSize: large ? 32 : 28,
    margin: [0, 0, 13],
    textAlign: center ? `center` : `auto`
  }
}

view UI.SubTitle {
  prop center
  prop small

  <Text root yield class={{ small }} />

  $Text = {
    fontSize: small ? 14 : 18,
    lineHeight: '1.9rem',
    textAlign: center ? `center` : `auto`
  }

  $small = {
    textTransform: 'uppercase',
    color: '#333'
  }
}

view Text {
  prop light

  <p root yield />

  $ = {
    color: light ? `rgba(255,255,255,0.9)` : `rgba(0,0,0,0.5)`,
    fontWeight: 300,
    fontSize: 15,
    lineHeight: '1.6rem'
  }
}