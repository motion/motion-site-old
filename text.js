import { style, color } from '../constants'

const sanitize = str => str ? str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '-') : ''

view Title {
  prop center
  prop light
  prop big

  <Text
    root
    yield
    id={sanitize(view.props.children)}
    class={{ light, big }}
    tagName="h2"
  />

  $ = {
    fontWeight: 400,
    fontSize: 30,
    margin: [20, 0, 10],
    textAlign: center ? `center` : `auto`,
    color: 'rgba(0,0,0,0.7)'
  }

  $light = {
    color: '#fff'
  }

  $big = {
    fontSize: 32,
    color: color.brand1
  }
}

view Title2 {
  <Title root yield />

  $Title = {
    fontSize: 24,
    color: 'rgba(0,0,0,0.6)',
  }
}

view SubTitle {
  <Title tagName="h3" root yield />

  $ = {
    color: color(color.brand).darken(1).rgba(),
    marginTop: 15,
    fontSize: 20,
  }
}

view IntroText {
  prop center
  prop small
  prop light
  prop children

  <Text root class={{ small }} tagName="h2">
    {children}
  </Text>

  $ = {
    fontSize: 22,
    lineHeight: '2rem',
    textAlign: center ? `center` : `auto`,
    color: light ? 'auto' : 'rgba(0,0,0,0.65)',
    marginBottom: 10,
    fontWeight: 300
  }

  $small = {
    color: '#333',
    fontWeight: 400,
    fontSize: 16
  }
}

view Text {
  prop light
  prop dim
  prop small

  <text tagName="p" root yield class={{ small, light, dim }} />

  $ = {
    fontWeight: 400,
    fontSize: 17,
    lineHeight: '1.65rem'
  }

  $light = {
    color: `rgba(255,255,255,0.9)`
  }

  $small = {
    fontSize: 16,
    lineHeight: '1.55rem',
    color: `rgba(0,0,0,0.45)`,
  }

  $dim = {
    color: `rgba(0,0,0,0.45)`,
  }
}