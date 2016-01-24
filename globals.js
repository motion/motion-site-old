import chroma from 'chroma-js'

if (window.location.search == '?demo')
  window.location = 'https://www.youtube.com/watch?t=1&v=VNfkk6lH0gg'

if (window.location.search == '?slack')
  window.location = 'https://flint-slack.herokuapp.com/'

const router = Flint.router

const routes = {}
routes.home = '/'
routes.use = '/use'
routes.examples = '/examples'
routes.docs = '/docs'
routes.community = '/community'
routes.spark = '/spark'
routes.start = '/start'
routes.roadmap = '/roadmap'
routes.transition = '/transition'

const color = chroma || function(){}
color.alt = '#fdfdfa'
color.brand = '#18c7de'
color.brand1 = '#de166a'
color.brand2 = '#1cb5df'
color.green = '#259630'
color.blue = 'rgb(48, 111, 207)'
color.darkred = color(color.brand)//.darken(0.3)
color.bg = '#fff'
color.strip = '#fff'

const font = {}
font.title = '"Bitter", Slab, Georgia, serif'
font.sansSerif = '"Source Sans Pro", "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif'
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

const light = c => `rgba(${color(c).alpha(0.9).rgba()})`

style.gradient = `linear-gradient(-30deg, ${color.brand1}, ${color.brand2})`

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
