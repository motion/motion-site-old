view Roadmap {
  <HeaderAlt />
  <Roadmap.Intro />
  <Roadmap.Immediate />
  <Footer />

  $h2 = {
    textAlign: 'center',
    margin: 0
  }

  $section = {
    textAlign: 'center',
    padding: [20, 0, 0],
    borderBottom: [1, 'solid', '#ddd']
  }

  $p = {
    padding: 20,
    paddingBottom: 0
  }

  $ul = {
    margin: 0,
    textAlign: 'left',
    display: 'flex',
    flexFlow: 'row'
  }

  $li = {
    display: 'flex',
    padding: 20,
    flexGrow: 1
  }
}

view Roadmap.Intro {
  <Feature odd col>
    <UI.Title>The Flint Roadmap</UI.Title>

    <Row>
      <Col>
        <UI.SubTitle>
          We're taking a stab at changing the way we do frontend development. Here's our current, evolving, high-level
          overview or where we are and where we want to go.
        </UI.SubTitle>
      </Col>

      <Col>
        <UI.SubTitle>
          s
        </UI.SubTitle>
      </Col>
    </Row>
  </Feature>
}


view Roadmap.Immediate {
  <Feature col>
    <UI.Title>Immediate Goals</UI.Title>
    <UI.SubTitle>
      We're taking a stab at changing the way we do frontend development. Here's our current, evolving, high-level
      overview or where we are and where we want to go.
    </UI.SubTitle>

    <ul>
      <li>Parity with some other features</li>
      <li>Something something</li>
      <li>Something something</li>
      <li>Something something</li>
    </ul>
  </Feature>
}