view Blur {
  const size = view.props.size || 500

  $ = {
    width: size,
    height: size,
    background: view.props.bg || '#fdfdfd',
    filter: `blur(${view.props.blur || (size / 15)}px)`,
    borderRadius: size,
    position: 'absolute',
    zIndex: 0,
    top: view.props.top || 0,
    left: view.props.left || 0,
    transform: `translate3d(0, 0, 0)`,
  }
}

view Contain {
  <contain id={view.props.id}>
    <content class={{ straight: view.props.straight }}>
      <Title if={view.props.title}>{view.props.title}</Title>
      {view.props.children}
    </content>
  </contain>

  const topPad = view.props.padTop ? 60 : (view.props.strip ? 40 : 0)
  const padding = view.props.pad ? [topPad, '15%'] : [topPad, 0]

  $ = {
    background: view.props.bg || (view.props.strip ? color.strip : 'transparent'),
    maxWidth: view.props.maxWidth || 1050,
    minWidth: view.props.minWidth || 0,
    width: '100%',
    color: view.props.color || 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
    margin: [view.props.strip ? 30 : 0, 'auto'],
    padding,
    position: 'relative',
    zIndex: 10,
    transform: { rotate: view.props.strip ? '-1.2deg' : 0 },

    [device.small]: {
      minWidth: 0
    }
  }

  $content = [{
    transform: {
      rotate: view.props.straight ? '1.2deg' : 0
    },
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
  }, view.props.contentStyle]

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

  $a = view.props.tiny ?  {
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