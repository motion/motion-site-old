import { style, color, routes, font, device } from '../constants'

view Demo {
  prop onStart = Motion.noop

  let isPlaying = false

  view.pause()

  const dim = {
    width: 1920 * .75,
    height: 1080 * .75
  }

  on.props(() => {
    if (view.props.play && !isPlaying) {
      isPlaying = true
      view.element('video').play()
      view.element().style.transform = `translateY(-300px) scale(1)`
      onStart()
    }
  })

  <mask>
    <video muted preload loop>
      <source src="https://d2p1e9awn3tn6.cloudfront.net/3LiSUD9TiF.webm" />
    </video>
  </mask>

  $ = {
    width: '105%',
    marginLeft: '-2.5%',
    height: dim.height - 40,
    marginBottom: -300,
    position: 'relative',
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    boxShadow: '0 10px 60px rgba(0,0,0,0.25)',
    overflow: 'hidden',
    transition: "all ease 500ms",
    zIndex: 1000,

    transform: {
      scale: 0.9
    }
  }

  $mask = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    WebkitMaskImage: `url(/assets/images/browsermask.svg)`
  }

  $video = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: -18,
    maxWidth: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  }
}

view Home.Head {
  let play = false

  function start() {
    play = true
  }

  <Contain>
    <Stars num={25} />
    <banner class={{ hide: play }}>
      <h1><b>Great applications</b>, faster than ever before</h1>
      <IntroText light>
        Motion brings together Javascript and React<br />
        into one insanely smart environment
      </IntroText>
      <Watch onClick={start}>Watch the demo</Watch>
    </banner>
    <Demo play={play} />
  </Contain>
  <selfShadow />

  $ = {
    background: style.gradient,
    color: '#fff',
    flexFlow: 'column',
    overflow: 'hidden',
    position: 'relative',
    height: Math.min(window.innerHeight, 820),
    minHeight: 700,
    textShadow: '0 1px 1px rgba(0,0,0,0.25)',
    padding: [50, 0, 0],

    [device.small]: {
      padding: [200, 0, 0]
    }
  }

    $Contain = {
      [device.small]: {
        maxWidth: '80%'
      }
    }

    $selfShadow = {
      position: 'absolute',
      bottom: -1,
      left: 0,
      right: 0,
      boxShadow: '0 0 15px rgba(0,0,0,0.8)',
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
      margin: 'auto',
      textAlign: 'center',
      padding: [0, '10%'],
      zIndex: 1000,
      width: '100%',
      fontWeight: 600,
      flexWrap: 'no-wrap',
      transition: 'all ease-in 300ms'
    }

      $hide = {
        opacity: 0
      }

    $h1 = {
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: -1,
      textShadow: '0 1px 1px rgba(0,0,0,0.2)',
      margin: [0, 'auto', 14],
      lineHeight: 1.3,

      [device.small]: {
        fontSize: 32
      }
    }

    $IntroText = {
      color: 'rgba(255,255,255,0.9)',
      margin: 'auto',
      padding: [0, 110],

      [device.small]: {
        display: 'none'
      }
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


view Watch {
  <button yield />

  $button = {
    margin: [18, 'auto', -10],
    padding: [3, 12],
    lineHeight: '1.5em',
    color: color.brand1,
    background: 'rgba(255,255,255,1)',
    borderRadius: 5,
    border: 'none',
    outline: 'none',
    fontWeight: 600,
    fontSize: 14,
    transition: 'all ease-in 200ms',

    hover: {
      boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
      transform: {
        scale: 1.05
      }
    }
  }
}