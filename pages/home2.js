view Home2 {
  <Contain>
    <section>
      <head>
        <h1>A coherent way to build modern apps</h1>
      </head>
    </section>

    <section>
      <h2>State of the art</h2>
      <p>Your ideal React stack, made better.</p>

      <ul>
        <li>A finely tuned React stack</li>
        <li>Comes with routing</li>
        <li>All the bells and performance</li>
        <li>Amazingly powerful style helpers</li>
        <li>Static style extraction</li>
      </ul>
    </section>

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
  </Contain>

  $head = {
    color: 'red',
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