import chroma from 'chroma-js'

export const isBrowser = typeof window != 'undefined'
export const style = {}
export const font = {}
export const routes = {}
export const device = {}
export const color = chroma
export const util = {}

view Main {
  <Home route={routes.home} />
  <FAQ route={routes.faq} />

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

routes.home = '/'
routes.faq = '/faq'

// Address.routes(routes)

// Router.add(route)
// Router.go()

// Address.add(route)
// Address.current()
// Address.get('user')

// Route.set()
// Route.now()
// Route.parse()

color.brand = '#eb522d'
color.brand1 = '#E86C3D'
color.brand2 = '#DB415E'
color.darkred = color(color.brand).darken(0.3)
color.bg = '#eee'
color.text = '#444'
color.strip = '#fff'

font.serif = 'Lato, Georgia, serif'
font.sansSerif = 'Helvetica Neue, Helvetica, Lato, Arial, sans-serif'
font.monoSpace = 'Hack, Source Code Pro, Inconsolata, monospace'

device.small = '@media (max-width: 850px)'

style.link = {
  color: '#888',
  textDecoration: 'none',
  borderBottom: '1px solid #ddd',
  ':hover': { color: color.brand }
}
style.textGradient = {
  background: `-webkit-linear-gradient(left,
    ${color(color.brand1).darken(0.6)},
    ${color(color.brand2).darken(0.6)})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

export const triggerEvent = (id, name)  => {
  event = document.createEvent('CustomEvent')
  event.initCustomEvent(name, true, true, null)
  frame = document.getElementById(id);
  frameWin = (frame.contentDocument || frame.contentWindow.document)
  frameWin.body.dispatchEvent(event)
}

if (isBrowser) {
  // to keep isomorphism (for now, should be handled by flint in future)
  util.docOffset = require('document-offset')
  util.scroll = require('scroll')
}
