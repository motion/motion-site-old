let already = false

view Home.Modern {
  let start = already || false

  const onLoad = () => {
    if (already) {
      triggerEvent('headeriframe', 'end')
      return
    }
    start = true
    already = true
    triggerEvent('headeriframe', 'start')
  }

  <Feature>
    <Row centered>
      <Col grow={2} class="content">
        <Title>Start in seconds, not days</Title>
        <IntroText>
          No configuration. No boilerplate.<br />
          An ultra-modern React stack is just the start.
        </IntroText>

        <Text small>
          Motion is an <b>extensible</b> and <b>sensible</b> stack designed to let you be more productive and creative.
        </Text>
      </Col>
      <Col class="example">
        <Editor right
          lines={7}
          id="headeriframe"
          onLoad={onLoad}
        iframe={`/assets/examples/example.html`} />
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

function triggerEvent(id, name) {
  let event = document.createEvent('CustomEvent')
  event.initCustomEvent(name, true, true, null)
  let frame = document.getElementById(id)
  let frameWin = frame.contentDocument || frame.contentWindow.document
  frameWin.body.dispatchEvent(event)
}