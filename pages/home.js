import { style, color, routes, font, device } from '../constants'

view Home {
  <Home.Head />
  <Home.Install />
  <Home.Intro />
  <Home.Platform />
  <Home.Syntax />
  //<Home.Tools />
  <Home.Production />
  <Home.Community />
  // <Home.Triple />
  <Home.Features />
  <Footer />
}

view Home.Head {
  <vid>
    <banner>
      <h1>Build great applications faster than ever before</h1>
      <Button><lt>Watch the video now</lt> Coming soon!</Button>
      <svg if={false} viewBox="0 0 510 510">
        <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M204,369.75v-229.5L357,255 L204,369.75z"/>
      </svg>
    </banner>
    <top class="bg" />
    <top class="bg4" />
    <BackgroundVideo />
  </vid>

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
    margin: [25, 'auto', 0],
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

  $vid = {
    flexGrow: 1,
    padding: 20,
  }

  $banner = {
    margin: 'auto',
    zIndex: 1000,
    fontWeight: 600
  }

  $h1 = {
    fontSize: 34,
    letterSpacing: -1,
    textShadow: '0 2px 1px rgba(0,0,0,0.2)',
    margin: [20, 'auto', 0],
    lineHeight: 1.3,
    textAlign: 'center'
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

  $top = {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 50,
    left: 0,
    zIndex: 2,
    backdropFilter: 'blur(10px)',

    [device.small]: {
      display: 'none'
    }
  }

  $bg4 = {
    background: `linear-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0,0))`,
    zIndex: 1,
    height: '100%'
  }

  $BackgroundVideo = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
    opacity: 0.15
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

view Home.Triple {
  <Feature odd center col>
    <Title>Triple section</Title>
    <IntroText>A platform to make all your tools talk</IntroText>

    <Row class="diagrams">
      <Col>
        <Icon.Browser />
        <IntroText class="sub">Browser</IntroText>

      </Col>
      <Col>
        <Icon.Flint />
        <IntroText class="sub">Compiler</IntroText>

      </Col>
      <Col>
        <Icon.Editor />
        <IntroText class="sub">Editor</IntroText>

      </Col>
    </Row>
  </Feature>

  $diagrams = {
    padding: [20, 90, 0]
  }

  $Col = {
    padding: [0, 25],
    width: '33%',
    alignItems: 'center'
  }

  $sub = {
    margin: [10, 0, 0]
  }
}
