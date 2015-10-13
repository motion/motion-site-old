view Header {
  let startIntro = false

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
        <Desc start={startIntro} />
        <Social />
      </head>
    }
    in={
      <Editor right
        lines={7}
        id="headeriframe"
        onLoad={() => {
          startIntro = true
          triggerEvent('headeriframe', 'start')
        }}
        src="/assets/examples/example.html" />
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

  $Contain = {
    margin: [0, 'auto'],

    [device.small]: {
      minWidth: 'auto',
      background: 'none'
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

  $head = {
    marginRight: -20,
    [device.small]: { margin: 0 }
  }
}

view Nav {
  <a target="_blank" href="http://flintdev.gitbooks.io/flint/content/">Docs</a>
  <a href="#install" onClick={util.linkScroll}>Install</a>
  <a href="">Examples</a>
  <a if={false} target="_blank" href="http://github.com/flintjs"><IconSlack /></a>

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
  }]
}

view Logo {
  <img src="/assets/images/flintlogo20.png" />

  $ = {
    flexFlow: 'row',
    margin: [0, 'auto', -15],
    alignItems: 'center',
    justifyContent: 'center',

    [device.small]: {
      marginTop: 30
    }
  }

  $img = {
    width: Math.round(1019 * .25),
    height: Math.round(282 * .25),
    margin: [0, 'auto', 20]
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

  <desc>Web apps, {how}</desc>

  $desc = {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 300,
    lineHeight: '1.6rem',
    padding: [22, 0],
    margin: [0, 'auto'],
    display: 'block',
    color: '#777'
  }
}