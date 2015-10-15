view Tag {
  <tag>
    {'<'}{^name}{' />'}
  </tag>

  const distance = ^outside ? -30 : 0
  const side = ^right ? 'right' : 'left'

  $tag = {
    flexFlow: 'row',
    fontSize: 12,
    opacity: 0.11,
    pointerEvents: 'none',
    position: 'absolute',
    top: distance,
    [side]: distance
  }
}

view Blur {
  const size = ^size || 500

  <blur />

  $ = {
    width: size,
    height: size,
    background: ^bg || '#f9f9f9',
    filter: `blur(${^blur || (size / 15)}px)`,
    borderRadius: size,
    position: 'absolute',
    zIndex: 0,
    top: ^top || 0,
    left: ^left || 0,
    transform: `translate3d(0, 0, 0)`,
  }
}

view Contain {
  <contain id={^id}>
    <content class={{ straight: ^straight }}>
      <Title if={^title}>{^title}</Title>
      {^children}
    </content>
  </contain>

  const topPad = ^padTop ? 60 : (^strip ? 40 : 0)
  const padding = ^pad ? [topPad, '15%'] : [topPad, 0]

  $ = {
    background: ^bg || (^strip ? color.strip : 'transparent'),
    maxWidth: ^maxWidth || 950,
    minWidth: ^minWidth || 0,
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
    transform: { rotate: ^strip ? '-1.2deg' : 0 },

    [device.small]: {
      minWidth: 0
    }
  }

  $content = {
    transform: {
      rotate: ^straight ? '1.2deg' : 0
    },
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
    fontSize: ^big ? 26 : 22,
    margin: [10, 'auto', 20],
    padding: 10,
    textAlign: 'center'
  }]
}

view Footer {
  <Contain>
    <content>
      <Nav />
      <br />
      <Social />
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
  <a target="_blank" href="http://github.com/flintjs">
    <IconGithub />
  </a>
  <a href="#slack" onClick={util.linkScroll}>
    <IconSlack />
  </a>
  <a target="_blank" href="https://twitter.com/flint_js">
    <IconTwitter />
  </a>

  $ = {
    height: 40,
    flexFlow: 'row',
    textAlign: 'center',
    fontSize: 16,
    margin: [5, 'auto', 0],
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  }

  $a = ^tiny ?  {
    margin: [0, 20],
    transform: {
      scale: 0.8
    }
  } : {
    margin: [0, 20, -10]
  }
}