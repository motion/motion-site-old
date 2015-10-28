view Blur {
  const size = ^size || 500

  $ = {
    width: size,
    height: size,
    background: ^bg || '#fdfdfd',
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
    maxWidth: ^maxWidth || 1050,
    minWidth: ^minWidth || 0,
    width: '100%',
    color: ^color || 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
    margin: [^strip ? 30 : 0, 'auto'],
    padding,
    position: 'relative',
    zIndex: 10,
    transform: { rotate: ^strip ? '-1.2deg' : 0 },

    [device.small]: {
      minWidth: 0
    }
  }

  $content = [{
    transform: {
      rotate: ^straight ? '1.2deg' : 0
    },
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
  }, ^contentStyle]

  $.end = {
    top: 'auto',
    bottom: -20,
    left: -100,
  }
}

view Social {
  <a target="_blank" href="http://github.com/flintjs/flint">
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

view Body {
  <body yield />
}