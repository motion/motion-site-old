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
