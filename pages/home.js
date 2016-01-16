view Home {
  <Home.Head />
  <Home.Modern />
  <Home.Connected />
  <Home.Apps />
  <Home.Syntax />
  <Home.Tools />
  <Home.Community />
  <Home.Features />
  <Footer />

  $h2 = {
    textAlign: 'center',
    margin: 0
  }

  $section = {
    textAlign: 'center',
    padding: [20, 0, 0],
    borderBottom: [1, 'solid', '#ddd']
  }

  $p = {
    padding: 20,
    paddingBottom: 0
  }

  $ul = {
    margin: 0,
    textAlign: 'left',
    display: 'flex',
    flexFlow: 'row'
  }

  $li = {
    display: 'flex',
    padding: 20,
    flexGrow: 1
  }
}

let rotateAnimation = Flint.keyframes({
  '100%': { transform: 'rotate(360deg)' }
}, 'pulse')

view Home.Head {
  <HeaderAlt nobg />

  <banner>
    Welcome to the fucking future
    <svg viewBox="0 0 510 510">
      <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M204,369.75v-229.5L357,255 L204,369.75z"/>
    </svg>
  </banner>
  $banner = {
    margin: 'auto',
    zIndex: 1000,
    fontSize: 30,
    fontWeight: 600
  }

  $svg = {
    fill: '#fff',
    width: 60,
    height: 60,
    margin: [20, 'auto', 0],
    boxShadow: [255,255,255, 10,0.2]
  }

  <fakebg />
  $fakebg = {
    background: style.lightGradient,
    position: 'absolute',
    top: 0,
    right: 0,
    height: 120,
    left: 0,
    zIndex: 1,
    opacity: 0.3
  }

  <BackgroundVideo />
  $BackgroundVideo = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    opacity: 0.5,
    transform: {
      scale: 1.2,
    }
  }

  $ = {
    background: style.gradient,
    color: '#fff',
    flexFlow: 'column',
    overflow: 'hidden',
    position: 'relative',
    minHeight: 700,
    textShadow: '0 1px 1px rgba(0,0,0,0.2)'
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
}

view Home.Connected {
  <Feature odd center col>
    <UI.Title>Connects your tools</UI.Title>
    <UI.SubTitle>A platform to make all your tools talk</UI.SubTitle>

    <Row class="diagrams">
      <Col>
        <Icon.Browser />
        <UI.SubTitle class="sub">Browser</UI.SubTitle>
        <Text>
          <Attr alt="When combined with Live updates, smart reloads allow a faster, simpler way to program.">Smart reloads</Attr> instantly refresh with state.
          Helpful & <Attr alt="Errors are recovered from automatically, displayed in your browser, and your app won't flicker or break.">safe</Attr> errors. <Attr alt="Right click on any part of your app and jump to the appropriate view in your editor.">Jump</Attr> to editor.
        </Text>
      </Col>
      <Col>
        <Icon.Flint />
        <UI.SubTitle class="sub">Compiler</UI.SubTitle>
        <Text>
          <Attr alt="Updates your app with each character, avoids writing to file system.">Live coding</Attr> with Atom.&nbsp;
          <Attr alt="While you Focus, Flint avoids file watchers & streams updates at fast as they happen.">Focus</Attr> mode lets you drag your numbers and colors.
        </Text>
      </Col>
      <Col>
        <Icon.Editor />
        <UI.SubTitle class="sub">Editor</UI.SubTitle>
        <Text>
          Flint's ES6 compiler <Attr alt="Parses your static styles. Injects them without reloading JS for super fast reloads.">statically extracts CSS</Attr> & automatically <Attr alt="Flint scans your code as you type, installs any found npm packages & injects them into your app: no refresh needed.">installs npm</Attr>.
        </Text>
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
        <UI.Title>Make America Great Again</UI.Title>
        <UI.SubTitle>
          An ultra modern React stack with everything you need to start in minutes and deploy today.
        </UI.SubTitle>

        <UI.SubTitle>
          Powerful and never before seen tools to make you and your team happy with development again.
        </UI.SubTitle>
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

  $Editor = {
    minWidth: 250,
    width: '60%',

    [device.small]: {
      margin: 'auto'
    }
  }

  $Feature = {
    borderBottom: [1, 'solid', '#eee'],
    overflow: 'hidden'
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

  <Feature col odd>
    <UI.Title center>Views in Javascript</UI.Title>
    <UI.SubTitle center>Learn in two minutes (TODO FIX FLINT.js BUGS HERE)</UI.SubTitle>
    <Row center>
      <Sel active={demo} name="DemoCounter" onClick={_ => demo = _}>Counter</Sel>
      <Sel active={demo} name="DemoVenn" onClick={_ => demo = _}>Styling</Sel>
      <Sel active={demo} name="DemoCircles" onClick={_ => demo = _}>Animation</Sel>
    </Row>

    <Row>
      <Col>
        {view.el(demo)}
      </Col>
    </Row>

  </Feature>

  $Col = {
    padding: [30, 0]
  }

  $side = {
    maxWidth: 200
  }
}

view Sel {
  prop onClick
  prop name

  <a
    root
    yield
    onClick={() => {
      debugger
      onClick(name)
    }}
  />

  $ = [
    {
      padding: 10,
    },

    view.props.onClick && {
      color: 'blue',
      cursor: 'pointer',

      hover: {
        background: `rgba(0,0,0,0.05)`
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
    margin: [80, 'auto', 20]
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
        <UI.Title>Powered by Community</UI.Title>
        <UI.SubTitle>
          We've been working with amazing Open Source contributors and projects since day 1.
        </UI.SubTitle>

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
    padding: [30, 50, 30, 20],
    width: '20%',
    justifyContent: 'center'
  }

  $cloud = {
    flexFlow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: [0, 'auto']
  }

  const size  = 40

  $img = {
    width: size,
    maxHeight: size,
    margin: [0, 20, 20],
    alignSelf: 'center'
  }

  $a = {
    alignSelf: 'center'
  }
}

view Home.Features {
  <Feature col>
    <UI.Title center>Everything you need</UI.Title>
    <Features />
  </Feature>
}




view Feature {
  prop center
  prop col
  prop odd
  prop slim
  prop dark

  <Contain yield />

  $ = {
    padding: [slim ? 15 : 60, 50],
    textAlign: center ? `center` : `left`,
    alignItems: 'center',
    flexFlow: col ? `column` : `row`,
    borderBottom: [1, 'solid', '#eee'],
    color: dark ? `#fff` : `auto`,
    background: dark ? `linear-gradient(#060646, #101038)` : odd ? `#fcfcfc` : `auto`
  }
}

view UI.Title {
  prop center
  prop large

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

  <Text root yield />

  $Text = {
    fontSize: 18,
    lineHeight: '1.9rem',
    textAlign: center ? `center` : `auto`
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