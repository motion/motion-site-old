view HeaderAlt {
  <wrap>
    <Logo small />
    <Nav />
    <Social tiny noSlack />
  </wrap>

  $ = {
    borderBottom: '1px solid #ddd',
    padding: [5, 0],
    width: '100%'
  }

  $wrap = {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    maxWidth: 870,
    margin: [0, 'auto'],

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $Logo = {
    [device.small]: {
      padding: [10, 0]
    }
  }

  $Nav = {
    flexGrow: 1,
    marginLeft: 20
  }

  $Social = {
    justifyContent: 'flex-end'
  }
}

view Header {
  let start = false

  const triggerEvent = (id, name)  => {
    event = document.createEvent('CustomEvent')
    event.initCustomEvent(name, true, true, null)
    const frame = document.getElementById(id);
    const frameWin = (frame.contentDocument || frame.contentWindow.document)
    frameWin.body.dispatchEvent(event)
  }

  <Nav />
  <Example
    flipVertical
    inStyle={instyle}
    out={
      <head>
        <Logo />
        <Desc start={start} />
        <Social />
      </head>
    }
    in={
      <Editor right
        lines={7}
        id="headeriframe"
        onLoad={() => {
          start = true
          triggerEvent('headeriframe', 'start')
        }}
        iframe="/assets/examples/example.html" />
    }
  />

  $ = {
    position: 'relative',
    overflow: 'hidden',
    padding: [80, 10],
    margin: [0, 0, 40],
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    minWidth: 700,
    flexFlow: 'row',
    background: 'rgba(252,252,246,0.57)',

    [device.small]: {
      flexFlow: 'column',
      minWidth: 0,
      padding: [80, 0, 0],
    }
  }

  $Logo = {
    margin: [10, 0, 20]
  }

  $head = {
    margin: [-10, '-25%', 0, 0],
    minWidth: 400,

    [device.small]: {
      margin: 0
    }
  }

  $Nav = {
    position: 'absolute',
    top: 25,
    right: '18%',

    [device.small] : {
      justifyContent: 'center',
      position: 'relative',
      top: -20,
      right: 0,
      margin: [-50, 'auto', 0]
    }
  }

  $Editor = {
    marginLeft: '5%',
    minWidth: 300,
    width: '70%'
  }

  const instyle = {
    [device.small]: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
}

view Nav {
  function showInstall(e) {
    if (router.isActive(routes.home))
      util.linkScroll(e)
    else
      router.go(routes.home)
  }

  const routeProps = path => ({
    onClick: router.link(path),
    className: { active: router.isActive(path) }
  })

  const links = [
    { children: 'Docs', ...routeProps(routes.docs + '/intro')  },
    { children: 'Examples', ...routeProps(routes.examples + '/mult')  },
    { children: 'Install', href: '#install', onClick: showInstall  },
  ]

  <a repeat={links} {..._} />

  $ = {
    margin: [0, 'auto'],
    flexFlow: 'row',
    zIndex: 100,
    fontWeight: 300,

    [device.small]: {
      marginBottom: 0
    }
  }

  $a = [style.link, {
    color: '#888',
    borderBottom: 'none',
    fontSize: 15,
    fontWeight: 500,
    padding: [0, 12],
    cursor: 'pointer'
  }]

  $.active = {
    fontWeight: 600,
    color: '#000'
  }
}

view Logo {
  <img onClick={router.link(routes.home)} src="/assets/images/flintlogo20.png" />

  $ = {
    flexShrink: 0
  }

  const width = 1019
  const height = 282
  const multiplier = view.props.small ? .11 : .24

  $img = {
    width: Math.round(width * multiplier),
    height: Math.round(height * multiplier),
    margin: [0, 'auto'],
    cursor: 'pointer'
  }
}

view Desc {
  let started = view.props.start

  let how = ''
  let phrases = ['faster', 'creatively', 'with ease']
  const betweenPhrase = 3000
  const typeSpeed = 130
  let phrasePos = 0
  let charPos = 0

  on.props(() => {
    if (view.props.start && !started) {
      started = true
      run()
    }
  })

  const run = () => started && setTimeout(step, 1000)

  run()

  const step = () => {
    if (phrasePos == phrases.length) return

    // if typed to end of word
    if (charPos === phrases[phrasePos].length) {
      charPos = -1
      phrasePos += 1
      setTimeout(step, betweenPhrase)
    }
    // if typing word
    else {
      charPos += 1
      how = phrases[phrasePos].slice(0, charPos)
      setTimeout(step, typeSpeed)
    }
  }

  <desc>Web apps, {how}</desc>

  $desc = {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 300,
    lineHeight: '1.6rem',
    padding: [5, 0, 20],
    margin: [0, 'auto'],
    display: 'block',
    color: 'rgba(0,0,0,0.6)'
  }
}