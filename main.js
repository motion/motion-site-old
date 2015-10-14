import chroma from 'chroma-js'

if (window.location.search == '?demo')
  window.location = 'https://www.youtube.com/watch?t=1&v=VNfkk6lH0gg'

view Main {
  <Home />

  $ = {
    color: color.text,
    fontSize: 18,
    fontFamily: font.sansSerif,
    lineHeight: '2rem',
    overflow: 'hidden',
    background: color.bg,
    position: 'relative',
  }
}

const routes = {}
routes.home = '/'
routes.faq = '/faq'

const color = chroma || function(){}
color.brand = '#eb522d'
color.brand1 = '#E86C3D'
color.brand2 = '#DB415E'
color.green = '#259630'
color.blue = 'rgb(48, 111, 207)'
color.darkred = color(color.brand)//.darken(0.3)
color.bg = '#fff'
color.text = '#444'
color.strip = '#fff'

const font = {}
font.sansSerif = 'Lato, Helvetica, sans-serif'
font.monoSpace = 'Hack, Source Code Pro, Inconsolata, monospace'

const device = {}
device.small = '@media (max-width: 850px)'

const style = {}
style.link = {
  color: color.blue,
  textDecoration: 'none',
  borderBottom: '1px dotted #ddd',
  padding: 0,

  ':hover': { color: color.brand }
}
style.textGradient = {
  background: `-webkit-linear-gradient(left,
    ${color(color.brand1).darken(0.6)},
    ${color(color.brand2).darken(0.6)})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

const util = {}

// to keep isomorphism for now, should be handled by flint
if (typeof window != 'undefined') {
  util.docOffset = require('document-offset')
  util.scroll = require('scroll')
}

util.linkScroll = e => {
  const el = document.querySelector(e.currentTarget.getAttribute('href'))
  util.scroll.top(document.body, el.getBoundingClientRect().top - 50)
  e.preventDefault()
}

export default { style, font, routes, device, color, util }