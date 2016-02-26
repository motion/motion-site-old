import { style, color, routes, font, device } from '../constants'

export const Home.Intro = () => $(
  <Feature col>
    <Row centered>
      <Col class="content">
        <Title>Start in seconds, not days</Title>
        <IntroText>
          No configuration. No boilerplate.<br />
          An ultra-modern React stack.
        </IntroText>
        <Text dim>
          Motion is a sensible and open stack<br />
          with tools that are always improving.
        </Text>
      </Col>
      <Col class="example">
        <Editor right lines={7}
          source={`
          $ npm install -g motion
          $ motion new project
          $ cd project
          $ motion

                        ⇢  localhost:4000
        `} />
      </Col>
    </Row>
  </Feature>

  Feature: {
    maxWidth: 800,
    width: '100%',
    margin: [0, 'auto', -40],
    border: 'none'
  }

  Editor: {
    minWidth: 320,
    width: '60%',

    [device.small]: {
      margin: 'auto'
    }
  }

  content: {
    paddingRight: 40,
    justifyContent: 'center',

    [device.small]: {
      alignItems: 'center',
      margin: [-50, 'auto', 20],
      padding: [0, 20, 30],
      textAlign: 'center',
      width: '90%'
    }
  }

  Col: {
    width: '50%'
  }

  pre: {
    color: '#fff',
    padding: [3, 10],
    lineHeight: 1.5
  }

  img: {
    width: 425,
    margin: [0, -300, 0, 0]
  }
}
