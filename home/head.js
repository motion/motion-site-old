import { style, color, routes, font, device } from '../constants'

view Demo {
  <mask>
    <BackgroundVideo />
  </mask>

  $ = {
    width: '110%',
    marginLeft: '-5%',
    height: 420,
    position: 'relative',
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    boxShadow: '0 10px 60px rgba(0,0,0,0.25)',
    overflow: 'hidden',
  }

  $mask = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    WebkitMaskImage: `url(/assets/images/browsermask.svg)`
  }

  $BackgroundVideo = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: -18,
    maxWidth: '100%',
  }
}

view Home.Head {
  <Contain>
    <Stars num={25} />
    <banner>
      <h1>Great applications, faster than ever before</h1>
      <IntroText light>
        Motion is an environment that brings React
        into one cohesive, insanely smart package.
      </IntroText>
      <Button if={false}><lt>Watch the video now</lt> Coming soon!</Button>
    </banner>
    <Demo />
  </Contain>
  <selfShadow />

  $ = {
    background: style.gradient,
    color: '#fff',
    flexFlow: 'column',
    overflow: 'hidden',
    position: 'relative',
    height: Math.min(window.innerHeight, 820),
    textShadow: '0 1px 1px rgba(0,0,0,0.25)',
    padding: [50, 0, 0]
  }

    $selfShadow = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      boxShadow: '0 0 15px rgba(0,0,0,0.5)',
      zIndex: 10000000,
      height: 1,
      background: '#fff'
    }

    $Button = {
      margin: [25, 0, 0],
      transition: 'all linear 200ms',
      hover: { transform: { scale: 1.1 } }
    }

    $lt = {
      textDecoration: 'line-through',
      opacity: 0.5,
    }

    $banner = {
      margin: ['auto', 'auto'],
      textAlign: 'center',
      padding: [0, '10%'],
      zIndex: 1000,
      fontWeight: 600
    }

    $h1 = {
      fontSize: 34,
      fontWeight: 300,
      letterSpacing: -1,
      textShadow: '0 1px 1px rgba(0,0,0,0.2)',
      margin: [0, 'auto', 20],
      lineHeight: 1.3,
    }

    $IntroText = {
      color: 'rgba(255,255,255,0.9)',
      margin: 'auto',
      padding: [0, 110]
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
