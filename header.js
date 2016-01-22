view Header {
  prop nobg

  <wrap>
    <Contain maxWidth={880}>
      <Logo small />
      <Nav large />
      <Social tiny noSlack />
    </Contain>
  </wrap>

  $ = {
    padding: [2, 0],
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: nobg ? 'rgba(0,0,0,0.1)' : style.gradient,
    boxShadow: '0 0 4px rgba(0,0,0,0.25)',

    [device.small]: {
      position: 'relative',
      marginBottom: -50
    }
  }

  $wrap = {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    [device.small]: {
      flexFlow: 'column'
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

  <a repeat={[
    { children: 'Start', ...routeProps(routes.start)  },
    { children: 'Docs', ...routeProps(routes.docs + '/intro')  },
    { children: 'Examples', ...routeProps(routes.examples + '/intro')  },
  ]} {..._} />

  $ = {
    userSelect: 'none',
    margin: [0, 'auto'],
    flexFlow: 'row',
    zIndex: 100,

    [device.small]: {
      marginBottom: 0,
      margin: [10, 'auto', 0]
    }
  }

  $a = {
    border: '1px solid transparent',
    color: 'rgba(255,255,255,0.85)',
    textShadow: '0 1px 1px rgba(0,0,0,0.35)',
    fontWeight: 300,
    borderBottom: 'none',
    fontSize: 15,
    padding: [0, 10],
    cursor: 'pointer',
    textDecoration: 'none',

    hover: {
      color: 'rgba(255,255,255,1)',
    }
  }

  $active = {
    fontWeight: 600,
    color: '#fff'
  }
}

view Logo {
  <img root onClick={router.link(routes.home)} src="/assets/images/flintlogo.png" />

  const width = 700
  const height = 198
  const multiplier = view.props.small ? .14 : .28

  $img = {
    width: Math.round(width * multiplier),
    // height: Math.round(height * multiplier),
    margin: 'auto',
    cursor: 'pointer',

    [device.small]: {
      alignSelf: 'center'
    }
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
