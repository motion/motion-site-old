import chroma from 'chroma-js'

if (window.location.search == '?demo')
  window.location = 'https://www.youtube.com/watch?t=1&v=VNfkk6lH0gg'

if (window.location.search == '?slack')
  window.location = 'https://flint-slack.herokuapp.com/'

const router = Flint.router

const routes = {}
routes.home = '/'
routes.examples = '/examples'
routes.docs = '/docs'
routes.community = '/community'
routes.spark = '/spark'
routes.start = '/start'
routes.roadmap = '/roadmap'

const color = chroma || function(){}
color.alt = '#fdfdfa'
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
font.title = '"Bitter", Slab, Georgia, serif'
font.sansSerif = '"Open Sans", "San Francisco", Helvetica, Arial, sans-serif'
font.monoSpace = '"Fira Code", Menlo, Meslo, Inconsolata, Source Code Pro, monospace'

const device = {}
device.small = '@media (max-width: 850px)'

const style = {}
style.link = {
  color: color.blue,
  cursor: 'pointer',
  textDecoration: 'none',
  borderBottom: '1px dotted #ddd',
  display: 'inline',
  padding: 0,

  ':hover': { color: color.brand }
}
style.textGradient = {
  background: `-webkit-linear-gradient(left, ${color.brand1}, ${color.brand2})`,
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

window.style = style
window.font = font
window.routes = routes
window.router = router
window.device = device
window.color = color
window.util = util

window.gradient = (a, b) => `linear-gradient(${a}, ${b})`
