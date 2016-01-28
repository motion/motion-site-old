import { style, color, routes, font, device } from '../constants'

view Welcome {
  <welcome>
    <span class="wow">Frontend, without the framework</span>
    <span>An easy, smart way to build apps</span>
  </welcome>

  $welcome = {
    fontSize: 28,
    color: 'rgba(0,0,0,0.7)',
    lineHeight: 1.75,
    margin: [0, 'auto'],
    padding: [10, 10, 45],
    textAlign: 'center',
    maxWidth: 750,
    zIndex: 100,
    fontFamily: font.title,

    [device.small]: {
      fontSize: 20,
      padding: [0, 30]
    }
  }

  $gradient = style.textGradient

  $wow = {
    fontSize: 34,
    color: color.brand2,
    lineHeight: 1.4,
    marginBottom: 4
  }
}
