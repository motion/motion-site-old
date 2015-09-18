import chroma from 'chroma-js'

r = {}
r.home = '/'
r.examples = '/examples'

Flint.addRoutes(r)

util = {}
// to keep isomorphism (for now, should be handled by flint in future)
if (typeof window != 'undefined') {
  util.docOffset = require('document-offset')
  util.scroll = require('scroll')
}

color = {}
color.brand = '#eb522d'
color.brand1 = '#E86C3D'
color.brand2 = '#DB415E'
color.darkred = chroma(color.brand).darken(0.3)
color.bg = '#eee'
color.text = '#444'
color.strip = '#fff'

font = {}
font.serif = 'Lato, Georgia, serif'
font.sansSerif = 'Helvetica Neue, Helvetica, Lato, Arial, sans-serif'
font.monoSpace = 'Hack, Source Code Pro, Inconsolata, monospace'

screen = {}
screen.small = '@media (max-width: 850px)'

style = {}
style.link = {
  color: '#888',
  textDecoration: 'none',
  borderBottom: '1px solid #ddd',
  ':hover': { color: color.brand }
}
style.textGradient = {
  background: `-webkit-linear-gradient(left,
    ${chroma(color.brand1).darken(0.6)},
    ${chroma(color.brand2).darken(0.6)})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

triggerEvent = (id, name)  => {
  event = document.createEvent('CustomEvent')
  event.initCustomEvent(name, true, true, null)
  frame = document.getElementById(id);
  frameWin = (frame.contentDocument || frame.contentWindow.document)
  frameWin.body.dispatchEvent(event)
}

view Main {
  <Home route="home" />
  <FAQ route="faq" />

  $ = {
    color: color.text,
    fontSize: 18,
    fontFamily: font.serif,
    lineHeight: '2rem',
    overflow: 'hidden',
    background: color.bg,
    position: 'relative',
  }
}


// shared views

view Contain {
  <contain id={^id}>
    <content>
      <Title if={^title}>{^title}</Title>
      {^children}
    </content>
  </contain>

  topPad = ^padTop ? 60 : (^strip ? 40 : 0)
  padding = ^pad ? [topPad, '15%'] : [topPad, 0]

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
    margin: [0, 5, -20],
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

icon = {
  width: 32,
  height: 32,
  transition: 'all ease-in 100ms',
  opacity: 0.5,
  filter: 'grayscale(1)',

  ':hover': {
    opacity: 1,
    filter: 'none'
  }
}
