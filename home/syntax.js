import { style, color, routes, font, device } from '../constants'

view Home.Syntax {
  let demo = 'DemoCounter'

  <Feature col>
    <Title>Views in Javascript</Title>
    <IntroText>Learn all of Flint in minutes:</IntroText>

    <Row class="nav" center>
      <Sel active={demo} name="DemoCounter" onClick={_ => demo = _}>Counter</Sel>
      <Sel active={demo} name="DemoVenn" onClick={_ => demo = _}>Styling</Sel>
      <Sel active={demo} name="DemoCircles" onClick={_ => demo = _}>Animation</Sel>
    </Row>

    <Row class="demos">
      <Col>
        {view.el(demo, { className: 'example' })}
      </Col>
    </Row>
  </Feature>

  $Col = {
    padding: [30, 0]
  }

  $nav = {
    margin: [-8, 'auto', 10],
    padding: [3, 0],

    [device.small]: {
      margin: 'auto',
    }
  }

  $side = {
    maxWidth: 200
  }

  $demos = {
    maxWidth: 900
  }

  $example = {
    width: '100%'
  }
}
