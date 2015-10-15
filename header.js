view HeaderAlt {
  <wrap>
    <Logo small />
    <Nav />
    <Social tiny />
  </wrap>

  $ = {
    borderBottom: '1px solid #ddd',
    padding: [5, 0]
  }

  $wrap = {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    margin: [0, 'auto'],
  }

  $Nav = {
    flexGrow: 1,
    justifyContent: 'center'
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
    inStyle={{
      maxWidth: 300,
      marginRight: 90,

      [device.small]: {
        marginRight: 0
      }
    }}
    out={
      <head>
        <Logo />
        <Desc start={^start} />
        <Social />
      </head>
    }
    in={
      <wrap>
        <Editor right
          lines={7}
          id="headeriframe"
          onLoad={() => {
            start = true
            triggerEvent('headeriframe', 'start')
          }}
          src="/assets/examples/example.html" />
          <Tag name="Demo" right />
      </wrap>
    }
  />

  $ = {
    position: 'relative',
    overflow: 'hidden',
    padding: [75, 0, 40],
    minWidth: 800,
    margin: [0, 'auto'],

    [device.small]: {
      minWidth: 'auto'
    }
  }

  $Logo = {
    margin: [0, 0, 20]
  }

  $Contain = {
    margin: [0, 'auto'],

    [device.small]: {
      minWidth: 'auto',
      background: 'none'
    }
  }

  $Nav = {
    position: 'absolute',
    top: 20,
    right: 20,

    [device.small] : {
      position: 'relative',
      top: 0,
      right: 0,
      margin: [-50, 'auto', 0]
    }
  }

  $Editor = {
    marginLeft: 30,

    [device.small]: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
}

view Nav {
  const go = url =>
    () => hist.pushState({}, url)

  <a if={window.location.pathname != '/'} onClick={go('/')}>Home</a>
  <a target="_blank" href="http://flintdev.gitbooks.io/flint/content/">Docs</a>
  <a href="#install" onClick={util.linkScroll}>Install</a>
  <a onClick={go('/examples')}>Examples</a>

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
    fontSize: 16,
    fontWeight: 500,
    padding: [0, 12],
    cursor: 'pointer'
  }]
}

view Logo {
  <img src="/assets/images/flintlogo20.png" />
  <Tag name="Logo" />

  $ = {
    flexShrink: 0,

    [device.small]: {
      marginTop: 30
    }
  }

  const width = 1019
  const height = 282
  const multiplier = ^small ? .11 : .25

  $img = {
    width: Math.round(width * multiplier),
    height: Math.round(height * multiplier),
    margin: [0, 'auto']
  }
}

view Desc {
  let started = ^start

  let how = ''
  let phrases = ['faster', 'creatively', 'with ease']
  const betweenPhrase = 3000
  const typeSpeed = 130
  let phrasePos = 0
  let charPos = 0

  on('props', () => {
    if (^start && !started) {
      started = true
      run()
    }
  })

  const run = () => {
    if (started)
      setTimeout(step, 1000)
  }

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

  <desc>Web apps, {^withExample ? how : 'creatively'}</desc>

  $desc = {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 300,
    lineHeight: '1.6rem',
    padding: [0, 0, 17],
    margin: [0, 'auto'],
    display: 'block',
    color: '#777'
  }
}