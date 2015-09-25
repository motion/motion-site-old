import chroma from 'chroma-js'

view Main {
  <Home route={routes.home} />
  <FAQ if={false} route={routes.faq} />

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

const isBrowser = typeof window != 'undefined'

const routes = {}
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

const color = chroma;
color.brand = '#eb522d'
color.brand1 = '#E86C3D'
color.brand2 = '#DB415E'
color.darkred = color(color.brand).darken(0.3)
color.bg = '#eee'
color.text = '#444'
color.strip = '#fff'

const font = {}
font.serif = 'Lato, Georgia, serif'
font.sansSerif = 'Helvetica Neue, Helvetica, Lato, Arial, sans-serif'
font.monoSpace = 'Hack, Source Code Pro, Inconsolata, monospace'

const device = {}
device.small = '@media (max-width: 850px)'

const style = {}
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
  const frame = document.getElementById(id);
  const frameWin = (frame.contentDocument || frame.contentWindow.document)
  frameWin.body.dispatchEvent(event)
}

const util = {}
if (isBrowser) {
  // to keep isomorphism (for now, should be handled by flint in future)
  util.docOffset = require('document-offset')
  util.scroll = require('scroll')
}

export default {
  isBrowser, style, font, routes, device, color, util
}