import { style, color } from '../constants'

view Feature {
  prop pad, bg, center, col, odd, slim, dark, reverse, children, stars, narrow

  <Stars if={stars} num={50} />
  <Contain maxWidth={narrow ? 850 : 1000}>{children}</Contain>

  const padheight = pad ? 120 : slim ? 0 : 90

  $ = {
    padding: [padheight - 30, 20, padheight],
    textAlign: center ? `center` : `left`,
    alignItems: 'center',
    borderBottom: dark ? 'none' : [1, 'solid', '#eee'],
    borderTop: dark ? 'none' : 'none',
    color: dark ? `#fff` : `auto`,
    background: bg ? bg : dark ? `linear-gradient(10deg, ${color.brand1}, ${color.brand2})` : odd ? `#fcfcfc` : `auto`,
    position: 'relative'
  }

  $Contain = {
    flexFlow: col ? `column` : reverse ? `row-reverse` : `row`,
    margin: 'auto'
  }
}

view Stars {
  view.pause()

  <star repeat={view.props.num} />

  $star = {
    position: 'absolute',
    top: Math.random() * (_index + 100),
    left: Math.random() * (_index + 1000),
    opacity: Math.random() / 1,
    boxShadow: '0 0 10px 1px rgba(255,255,255,0.24)',
    width: 1,
    height: 1,
    background: '#fff',
    zIndex: 10,
  }
}