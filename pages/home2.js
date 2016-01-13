view Home2 {
  <head>
    <h1>A coherent way to build modern apps</h1>
  </head>

  <Art />
  <Connected />

  <section>
    <h2>Amazing tools without the boilerplate</h2>

    <ul>
      <li>Amazing extensible pre-configured build system</li>
      <li>Start to deploy in seconds</li>
      <li>Dramatically easier interface to React</li>
      <li>State inspector</li>
      <li>Error recovery</li>
    </ul>
  </section>

  <section>
    <h2>Powered by community</h2>
    <p>Runs on React, Babel, NPM, Webpack, Gulp, Radium, Autoprefixer, and more.</p>
  </section>

  <section>
    <h2>Flexible yet sensible</h2>
    <p>Use any React component, full featured by default but open and configurable.</p>
  </section>

  <section>
    <h2>Amazing features</h2>
    <p>
      The fastest and smartest hot reloads, interactive state inspector, full error recovery,
      Atom integration with as-you-type updates.
    </p>
  </section>

  <section>
    <h2>Used in production</h2>
    <p>
      In use by fortune 500 companies.
    </p>
  </section>

  <section>
    <h2>:)</h2>
    <p>
      Made with  by
    </p>
  </section>

  $head = {
    background: `linear-gradient(20deg, #d659b5, #f0800e)`,
    color: '#fff',
    height: 500,
    padding: [50, 20],
    textAlign: 'center'
  }

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

view Connected {
  <Feature center>
    <Home.Title>Connects your tools</Home.Title>
    <Home.Sub>Flint's compiler communicates between browser and editor to enable new developer powers</Home.Sub>

    <Row>
      <Col>
        <Icon.Browser />
        <Home.Sub>Something</Home.Sub>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Col>
      <Col>
        <Icon.Editor />
        <Home.Sub>Something</Home.Sub>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Col>
      <Col>
        <Icon.Flint />
        <Home.Sub>Something</Home.Sub>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Col>
    </Row>

  </Feature>

  $Col = {
    padding: 30
  }
}

view Art {
  <Feature>
    <Home.Title>State of the art</Home.Title>
    <p>
      An ultra modern React stack with everything you need to start in minutes and deploy today.
    </p>

    <p>
      Powerful and never before seen tools to make you and your team happy with development again.
    </p>
  </Feature>

  $p = {
    fontSize: 18,
    color: '#999',
    width: 500
  }
}

view Feature {
  <Contain yield />

  $ = {
    padding: 50,
    textAlign: view.props.center ? 'center' : 'left'
  }
}

view Home.Title {
  <h2 root yield />

  $ = {
    fontWeight: 200,
    fontSize: 30
  }
}

view Home.Sub {
  $ = {
    opacity: 0.4,
    fontWeight: 300,
    fontSize: 18
  }
}