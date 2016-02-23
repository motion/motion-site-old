import { style, color, routes, font, device } from './constants'

view Header {
  prop nobg

  <wrap>
    <Contain maxWidth={890}>
      <Logo small />
      <Nav large />
      <Social tiny noSlack />
    </Contain>
  </wrap>

  $ = {
    padding: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,

    [device.small]: {
      marginBottom: -150,
      boxShadow: 'none',
      position: 'relative'
    }
  }

  $wrap = {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: nobg ? 'rgba(0,0,0,0.05)' : style.gradient,
    boxShadow: nobg ? 'transparent' : '0 0 4px rgba(0,0,0,0.25)',
    transition: 'all ease-in 300ms',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $Nav = {
    flexGrow: 1,
    marginLeft: 10,
    marginTop: -3
  }

  $Social = {
    justifyContent: 'flex-end'
  }

  $Logo = {
    [device.small]: {
      marginTop: 15
    }
  }
}

const routeProps = path => ({
  href: path,
  onClick: Motion.router.link(path),
  className: { active: Motion.router.isActive(path) }
})

view Nav {
  const items = [
    { label: 'Start', route: '/start' },
    { label: 'Docs', route: routes.docs + '/intro' },
    { label: 'Examples', route: '/learn' },
    // { label: 'Migrate', route: '/transition' },
  ]

  <a repeat={items} {...routeProps(_.route)}>{_.label}</a>

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
    color: 'rgba(255,255,255,0.8)',
    textShadow: '0 1px 1px rgba(0,0,0,0.15)',
    fontWeight: 300,
    borderBottom: 'none',
    fontSize: 16,
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


function showInstall(e) {
  if (Motion.router.isActive(routes.home))
    util.linkScroll(e)
  else
    Motion.router.go(routes.home)
}

view Logo {
  <img root onClick={Motion.router.link(routes.home)} src="/assets/images/motion-small.png" />

  const width = 256
  const height = 61
  const multiplier = view.props.small ? .33333 : .28

  $img = {
    width: Math.round(width * multiplier),
    height: Math.round(height * multiplier),
    margin: 'auto',
    cursor: 'pointer',

    [device.small]: {
      alignSelf: 'center'
    }
  }
}

let finished = false
let already = false

view Desc {
  prop already, start

  const betweenPhrase = 3000
  const typeSpeed = 130
  let started = start
  let how = ''
  let phrases = ['faster', 'creatively', 'with ease']
  let phrasePos = 0
  let charPos = 0

  on.mount(run)
  on.unmount(stop)
  on.props(() => {
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
