import { style, color } from './constants'

const sanitize = str => str ? str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '-') : ''

export const Title = () => $(
  prop center
  prop light
  prop big
  prop children

  <Text
    root
    yield
    id={sanitize(children)}
    class={{ light, big }}
    tagName="h2"
  />

  : {
    fontWeight: 400,
    fontSize: 25,
    margin: [18, 0, 8],
    textAlign: center ? `center` : `auto`,
    color: 'rgba(0,0,0,0.8)'
  }

  light: {
    color: '#fff'
  }

  big: {
    fontSize: 30,
    color: color.brand1
  }
}

export const Title2 = () => $(
  <Title root yield />

  Title: {
    fontSize: 20,
    color: color.brand1,
  }
}

export const SubTitle = () => $(
  <Title tagName="h3" root yield />

  : {
    color: color(color.brand).darken(1).rgba(),
    marginTop: 15,
    fontSize: 18,
    fontWeight: 400
  }
}

export const IntroText = () => $(
  prop center
  prop small
  prop light
  prop children

  <Text root class={{ small }} tagName="h2">
    {children}
  </Text>

  : {
    fontSize: 22,
    lineHeight: '1.95rem',
    textAlign: center ? `center` : `auto`,
    color: light ? 'auto' : 'rgba(0,0,0,0.65)',
    marginBottom: 15,
    marginTop: 0,
    fontWeight: 300
  }

  small: {
    color: '#333',
    fontWeight: 400,
    fontSize: 16
  }
}

class IntroText extends Component {
  render() {
    let { small } = this.props

    return [
      <Text class={{ small }} {...this.props} tagName="h2" />,

      {
        root: {
          fontSize: 22,
          lineHeight: '1.95rem',
          textAlign: center ? `center` : `auto`,
          color: light ? 'auto' : 'rgba(0,0,0,0.65)',
          marginBottom: 15,
          marginTop: 0,
          fontWeight: 300
        },

        small: {
          color: '#333',
          fontWeight: 400,
          fontSize: 16
        }
      }
    ]
  }
}

export const Text = () => $(
  prop light, dim, small, children
  prop tagName = 'p'
  prop center

  <text tagName={tagName} class={{ small, light, dim, center }}>
    {children}
  </text>

  : {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '1.6rem'
  }

  light: {
    color: `rgba(255,255,255,0.9)`
  }

  small: {
    fontSize: 14,
    lineHeight: '1.55rem',
    color: `rgba(0,0,0,0.45)`,
  }

  dim: {
    color: `rgba(0,0,0,0.45)`,
  }

  center: {
    textAlign: 'center'
  }
}
