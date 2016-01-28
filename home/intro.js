import { style, color, routes, font, device } from '../constants'

let already = false

view Home.Intro {
  let start = already || false

  function triggerEvent(id, name) {
    let event = document.createEvent('CustomEvent')
    event.initCustomEvent(name, true, true, null)
    let frame = document.getElementById(id)
    let frameWin = frame.contentDocument || frame.contentWindow.document
    frameWin.body.dispatchEvent(event)
  }

  <Feature col>
    <Row>
      <Col class="content">
        <Title>Start in seconds, not days</Title>
        <IntroText>
          No configuration. No boilerplate.<br />
          An ultra-modern React stack is just the start.
        </IntroText>
        <Text>
          Flint is a sensible and open stack that
          brings joy to frontend development.
        </Text>
      </Col>
      <Col class="example">
      <Editor right
        lines={7}
        source={`
          $ flint new project
          $ cd project
          $ flint
            ⇢  http://localhost:4000
        `} />
      </Col>
    </Row>
  </Feature>

  $Feature = {
    maxWidth: 920,
    margin: 'auto'
  }

  $Editor = {
    minWidth: 320,
    width: '60%',

    [device.small]: {
      margin: 'auto'
    }
  }

  $content = {
    width: '40%',
    paddingRight: 40,
    justifyContent: 'center',

    [device.small]: {
      padding: [0, 0, 30],
      width: '100%'
    }
  }

  $img = {
    width: 425,
    margin: [0, -300, 0, 0]
  }
}
