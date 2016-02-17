import { style, color, routes, font, device } from '../constants'

view Home.CaseStudy {
  <Feature col>
    <Title>Case Study</Title>
    <img src="/assets/images/quixey.png" />
    <Row>
      <Col>
        <IntroText>
          Quixey starting using Motion in late 2015 as an early adopter to drive their main internal dashboard.
        </IntroText>

        <IntroText>
          Within two months it had spread through word of mouth to two more teams within the company for their own projects.
        </IntroText>
      </Col>

      <Col>
        <Text>
          Now, they are building their flagship Screens app on Motion Native and have already
          surpassed their current apps, which took 3 months, in a single week.
        </Text>

        <img class="avatar" src="/assets/images/liron.jpg" />
        <IntroText center>
          "Game changer" - Liron Shapira
        </IntroText>
      </Col>
    </Row>
  </Feature>

  $Col = {
    width: '50%',
    padding: [0, 40]
  }

  $img = {
    display: 'block',
    width: 'auto',
    height: 40,
    margin: [0, 'auto', 30]
  }

  $avatar = {
    borderRadius: 100,
    width: 100,
    height: 100
  }
}
