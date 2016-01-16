view HeaderAlt {
  prop nobg

  <wrap>
    <Contain>
      <Logo small />
      <Nav large />
      <Social tiny noSlack />
    </Contain>
  </wrap>

  $ = {
    padding: [5, 0],
    width: '100%',
    zIndex: 100,
    boxShadow: [0, 0, 5, 'rgba(0,0,0,0.1)'],
    background: nobg ? 'none' : style.gradient,

    [device.small]: {
      position: 'relative',
      marginBottom: -50
    }
  }

  $wrap = {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $Logo = {
    margin: [5, 0, 0],

    [device.small]: {
      padding: [10, 0]
    }
  }

  $Nav = {
    flexGrow: 1,
    marginLeft: 20,
    marginTop: -3
  }

  $Social = {
    justifyContent: 'flex-end'
  }
}

let already = false

view Header {
  let start = already || false

  function triggerEvent(id, name) {
    let event = document.createEvent('CustomEvent')
    event.initCustomEvent(name, true, true, null)
    let frame = document.getElementById(id)
    let frameWin = frame.contentDocument || frame.contentWindow.document
    frameWin.body.dispatchEvent(event)
  }

  <Contain maxWidth={750}>
    <Nav />
    <Example
      flipVertical
      inStyle={instyle}
      outStyle={{ width: 280 }}
      in={
        <Editor right
          lines={6}
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
      }
    />
  </Contain>

  $ = {
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
    padding: [70, 10, 0],
    margin: [0, 0],
    minWidth: 700,
    flexFlow: 'row',

    [device.small]: {
      flexFlow: 'column',
      minWidth: 0,
      padding: [80, 0, 30],
    }
  }

  $Logo = {
    margin: [10, 0]
  }

  $head = {
    display: 'block',
    margin: [-5, '-25%', 0, 0],
    width: 400,
    textAlign: 'center',

    [device.small]: {
      margin: 'auto'
    }
  }

  $Nav = {
    position: 'absolute',
    top: -45,
    right: 82,

    [device.small] : {
      justifyContent: 'center',
      position: 'relative',
      top: -20,
      right: 0,
      margin: [-50, 'auto', 0]
    }
  }

  $Editor = {
    minWidth: 250,
    width: '60%',

    [device.small]: {
      margin: 'auto'
    }
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
    { children: 'Examples', ...routeProps(routes.examples + '/intro')  },
    { children: 'Install', href: '#install', onClick: showInstall  },
  ]

  <a repeat={links} {..._} />

  $ = {
    userSelect: 'none',
    margin: [0, 'auto'],
    flexFlow: 'row',
    zIndex: 100,

    [device.small]: {
      marginBottom: 0
    }
  }

  const bordered = {
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10
  }

  $a = {
    color: 'rgba(255,255,255,0.8)',
    textShadow: '0 1px 1px rgba(0,0,0,0.2)',
    fontWeight: 300,
    borderBottom: 'none',
    fontSize: 13,
    padding: [0, 12],
    cursor: 'pointer',
    textDecoration: 'none',

    hover: {
      color: color.brand,
      ...bordered
    }
  }

  $active = {
    fontWeight: 800,
    color: '#fff'
  }
}

view Logo {
  <img root onClick={router.link(routes.home)} src="/assets/images/flintlogowhite.png" />

  const width = 1400
  const height = 387
  const multiplier = view.props.small ? .08 : .14

  $img = {
    display: 'inline-block',
    width: Math.round(width * multiplier),
    height: Math.round(height * multiplier),
    margin: [0, 'auto'],
    cursor: 'pointer'
  }
}

let finished = false

view Desc {
  const betweenPhrase = 3000
  const typeSpeed = 130
  let started = view.props.start
  let how = ''
  let phrases = ['faster', 'creatively', 'with ease']
  let phrasePos = 0
  let charPos = 0

  on.mount(run)
  on.unmount(stop)
  on.props(({ already, start }) => {
    if (already && finished) {
      how = phrases[2]
      return
    }

    if (start && !started) {
      started = true
      run()
    }
  })

  function run() {
    if (started) setTimeout(step, 1000)
  }

  function stop() {
    finished = true
  }

  function step() {
    if (phrasePos == phrases.length)
      return stop()

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
    fontSize: 18,
    fontWeight: 300,
    lineHeight: '1.6rem',
    padding: [0, 0, 18],
    margin: [0, 'auto'],
    display: 'block',
    color: '#fff'
  }
}
