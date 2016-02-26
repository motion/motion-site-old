import { style, color, routes, font, device } from '../constants'

export const Home.CaseStudy = () => $(
  <Feature col>
    <Title>Case Study</Title>
    <a class="img" href="https://www.quixey.com/" target="_blank"><img src="/assets/images/quixey.png" /></a>
    <Row>
      <Col>
        <IntroText>
          Quixey started using Motion in July 2015 to drive their internal tools.
        </IntroText>

        <IntroText>
          Within two months it had spread through word of mouth to several teams within the company to multiple teams.
        </IntroText>

        <IntroText>
          Now, they are using the Motion Native Beta to build their flagship web and iOS Screens app.
        </IntroText>
      </Col>

      <Col>
        <img class="avatar" src="/assets/images/liron.jpg" />
        <IntroText center>
          "We made an early bet that's already paid off amazingly using Motion."
          <br />
        </IntroText>
        <IntroText style={{ alignSelf: 'flex-end' }}>- Liron Shapira, Founder</IntroText>
      </Col>
    </Row>
  </Feature>

  Col: {
    width: '50%',
    padding: [0, 40]
  }

  img: {
    display: 'block',
    width: 'auto',
    height: 40,
    margin: [0, 'auto', 30]
  }

  avatar: {
    borderRadius: 100,
    width: 100,
    height: 100
  }
}

export const Home.CaseSmall = () => $(
  <Title center>Community Projects</Title>
  <items>
    <Feature class="item" col>
      <Row>
        <Title>Teevox</Title>
        <a href="http://teevox.com">Teevox.com</a>
      </Row>
      <IntroText>
        Watch multiple live game streams simultaneously
      </IntroText>
    </Feature>
    <Feature class="item" col>
      <Row>
        <Title>Emotipost</Title>
        <a href="http://emotipost.com">Emotipost.com</a>
      </Row>
      <IntroText>
        Send a card they will remember
      </IntroText>
    </Feature>
    <Feature class="item" col>
      <Row>
        <Title>Flask Bio</Title>
        <a href="http://flaskbio.com">flaskbio.com</a>
      </Row>
      <IntroText>
        Interactive lab notebook and inventory software
      </IntroText>
    </Feature>
  </items>

  items: {
    flexDirection: "row",
    marginTop: -25,
  }

  item: {
    width: '33%',
    padding: 50,
  }

  a: {
    marginLeft: 120,
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
  }
  Row: {
    width: 265,
  }

  IntroText: {
    fontSize: 20,
    textAlign: 'center',
  }

  img: {
    display: 'block',
    width: 'auto',
    height: 40,
    margin: [0, 'auto', 30]
  }

  avatar: {
    borderRadius: 100,
    width: 100,
    height: 100
  }
}
