import chroma from 'chroma-js'

const router = Motion.router

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
color.brand = '#cc3838'
color.brand1 = '#775da8'
color.brand2 = '#0e1571'
color.green = '#259630'
color.blue = 'rgb(48, 111, 207)'
color.darkred = color(color.brand)//.darken(0.3)
color.bg = '#fff'
color.strip = '#fff'

const font = {}
font.title = '"Bitter", Slab, Georgia, serif'
font.sansSerif = '"Source Sans Pro", "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif'
font.monoSpace = 'Source Code Pro, Menlo, Meslo, Inconsolata, monospace'

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

const light = c => color(c).alpha(0.9).css()
const dark = c => color(c).darken(1).alpha(0.9).css()

style.gradient = `linear-gradient(-30deg, ${color.brand1}, ${color.brand2})`

const util = {}

// to keep isomorphism for now, should be handled by motion
if (typeof window != 'undefined') {
  util.docOffset = require('document-offset')
  util.scroll = require('scroll')
}

util.linkScroll = e => {
  const el = document.querySelector(e.currentTarget.getAttribute('href'))
  util.scroll.top(document.body, el.getBoundingClientRect().top - 50)
  e.preventDefault()
}

const gradient = (a, b) => `linear-gradient(${a}, ${b})`

export default {
  style,
  font,
  routes,
  router,
  device,
  color,
  util,
  gradient
}