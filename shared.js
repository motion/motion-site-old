
view Contain {
  <contain id={^id}>
    <content>
      <Title if={^title}>{^title}</Title>
      {^children}
    </content>
  </contain>

  const topPad = ^padTop ? 60 : (^strip ? 40 : 0)
  const padding = ^pad ? [topPad, '15%'] : [topPad, 0]

  $ = {
    background: ^bg || (^strip ? color.strip : 'transparent'),
    maxWidth: ^maxWidth || 1050,
    width: '100%',
    color: ^color || 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
    flexShrink: 0,
    margin: [^strip ? 30 : 0, 'auto'],
    padding,
    position: 'relative',
    zIndex: 10,
    transform: { rotate: (^strip && !^noTwist) ? '-1.2deg' : 0 }
  }

  $content = {
    transform: { rotate: (^strip && !^noTwist) ? '1.2deg' : 0 },
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
    flexShrink: 0,
  }

  $.end = {
    top: 'auto',
    bottom: -20,
    left: -100,
  }
}

view Title {
  <h2 yield />
  $ = false

  $h2 = [style.textGradient, {
    fontSize: 22,
    margin: [10, 'auto', 20],
    padding: 10,
    fontStyle: 'italic',
    textAlign: 'center'
  }]
}

view Footer {
  <Contain pad strip maxWidth="auto" id="footer">
    <content>
      <Nav />

      <br />

      <p>
        Flint is just getting started,
        we'd love your feedback!
      </p>
    </content>
  </Contain>

  $ = {
    margin: [0, 0, -40],
    textAlign: 'center',
    fontSize: 16
  }

  $content = {
    margin: [80, 0]
  }

  $p = {
    fontWeight: 'bold'
  }
}
view Social {
  <sub>
    <a target="_blank" href="http://github.com/flintjs">
      <IconGithub />
    </a>
    <a target="_blank" href="https://twitter.com/flint_js">
      <IconTwitter />
    </a>
  </sub>

  $a = ^tiny ?  {
    margin: [-2, 5, -20],
    transform: {
      scale: 0.75
    }
  } : {
    margin: [0, 20]
  }

  $sub = {
    flexFlow: 'row',
    textAlign: 'center',
    fontSize: 16,
    margin: [-5, 'auto'],
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  }
}
