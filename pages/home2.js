view Home.Head {
  <stripe />

  <HeaderAlt />

  <Row contain class="mid">
    <Col center class="text">
      <UI.Title>Make development great again</UI.Title>
      <UI.SubTitle>
        Flint is a rethinking of modern development.
      </UI.SubTitle>

      <Text>
        We've brought together React, Babel, routing, and incredible hot reloads into a simple stack.
      </Text>

      <Text>
        It brings the concept of the view to JS,
        with amazing tools that connect your browser,
        editor and compiler.
      </Text>
    </Col>
    <Col>
      <DemoVideo />
    </Col>
  </Row>

  $ = {
    background: `linear-gradient(-30deg, #a62061, #e0644a, #ffc240)`,
    color: '#fff',
    justifyContent: 'flex-end',
    flexFlow: 'column',
    overflow: 'hidden',
  }

  $mid = {
    padding: [40, 0]
  }

  $text = {
    marginRight: 40
  }

  $stripe = {
    display: 'none',
    background: [0,0,0,0.1],
    width: 1000,
    height: 2000,
    position: 'absolute',
    left: '20%',
    top: -300,
    transform: {
      rotate: `40deg`
    }
  }
}

view Home2 {
  <Home.Head />
  <Home.Modern />
  <Home.Connected />
  <Home.Apps />
  <Home.Syntax />
  <Home.Errors />
  <Contain>
    <Row>
      <Home.Install />
      <Home.State />
    </Row>
  </Contain>
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
    width: '33%'
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
        <UI.Title>State of the art</UI.Title>
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

view Home.Errors {
  <Feature col>
    <UI.Title>Amazing Errors</UI.Title>
    <UI.SubTitle>Flint recovers gracefully from errors and shows you exactly what you need.</UI.SubTitle>
    <img src="/assets/images/errors.png" />
  </Feature>

  $img = {
    maxWidth: '100%'
  }
}

view Home.Install {
  <Feature>
    <Col>
      <UI.Title>Automatic NPM Installs</UI.Title>
      <UI.SubTitle>As you type, Flint installs npm packages, and injects them into your running app without losing state.</UI.SubTitle>
      <video width="320" height="240" autoplay="autoplay" loop>
        <source src="assets/video/install.webm" type="video/webm" />
        <source src="assets/video/install.ogg" type="video/ogg" />
        <source src="assets/video/install.mp4" type="video/mp4" />
      </video>
    </Col>
  </Feature>
}

view Home.State {
  <Feature>
    <Col>
      <UI.Title>State Inspector</UI.Title>
      <UI.SubTitle>Easy, pinable, simple state inspector.</UI.SubTitle>
    </Col>
    <video width="320" height="240" autoplay="autoplay" loop>
      <source src="assets/video/state.mp4" type="video/mp4" />
    </video>
  </Feature>
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
    <Performance />
  </Feature>
}




view Feature {
  prop center
  prop col
  prop odd

  <Contain yield />

  $ = {
    padding: [70, 50],
    textAlign: center ? `center` : `left`,
    flexFlow: col ? `column` : `row`,
    borderBottom: [1, 'solid', '#eee'],
    background: odd ? `#fcfcfc` : `auto`
  }
}

view UI.Title {
  prop center

  <h2 root yield />

  $ = {
    fontWeight: 200,
    fontSize: 28,
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
  <p root yield />

  $ = {
    color: `rgba(0,0,0,0.5)`,
    fontWeight: 300,
    fontSize: 15,
    lineHeight: '1.6rem'
  }
}