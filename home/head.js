import { style, color, routes, font, device } from '../constants'

view Home.Head {
  <Contain>
    <banner>
      <h1>Build great applications faster than ever before</h1>
      <br />
      <IntroText light>
        Flint is an environment that combines the best from open source
        into one, cohesive, insanely smart package.
      </IntroText>
      <Button if={false}><lt>Watch the video now</lt> Coming soon!</Button>
      <svg if={false} viewBox="0 0 510 510">
        <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M204,369.75v-229.5L357,255 L204,369.75z"/>
      </svg>
    </banner>
    <browser>
      <BackgroundVideo />
    </browser>
  </Contain>

  $ = {
    background: style.gradient,
    color: '#fff',
    flexFlow: 'column',
    overflow: 'hidden',
    position: 'relative',
    minHeight: Math.max(Math.min(window.innerHeight - 80, 800), 400),
    textShadow: '0 1px 1px rgba(0,0,0,0.35)'
  }

  $Button = {
    margin: [25, 0, 0],
    transition: 'all linear 200ms',

    hover: {
      transform: {
        scale: 1.1
      }
    }
  }

  $lt = {
    textDecoration: 'line-through',
    opacity: 0.5,
  }

  $banner = {
    margin: ['auto', 0],
    zIndex: 1000,
    width: '40%',
    fontWeight: 600
  }

  $browser = {
    position: 'absolute',
    top: 70,
    bottom: 40,
    right: '-45%',
    width: '100%',
    borderRadius: 5,
    boxShadow: '0 10px 60px rgba(0,0,0,0.25)',
    overflow: 'hidden',
    background: '#fff'
  }

  $h1 = {
    fontSize: 34,
    fontWeight: 300,
    letterSpacing: -1,
    textShadow: '0 2px 1px rgba(0,0,0,0.2)',
    margin: [0, 'auto', 0],
    lineHeight: 1.3,
  }

  $svg = {
    fill: '#fff',
    width: 75,
    height: 75,
    margin: [20, 'auto', -20],
    boxShadow: [255,255,255, 10,0.2],
    opacity: 0.5,

    hover: {
      opacity: 1
    }
  }

  $BackgroundVideo = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: -23,
    maxHeight: '110%'
  }

  $lead = {
    fontSize: 38,
    lineHeight: '3.0rem',
    fontWeight: 700
  }

  $mid = {
    padding: [20, 0],
    position: 'relative',
    zIndex: 10
  }

  $text = {
    marginRight: 40
  }
}
