view Roadmap {
  <Header />
  <Roadmap.Intro />
  <Roadmap.NextRelease />
  <Roadmap.Immediate />
  <Roadmap.ShortTerm />
  <Roadmap.LongTerm />
  <Footer />
}

view Roadmap.Intro {
  <Feature odd col>
    <UI.Title>The Flint Roadmap</UI.Title>
    <Row>
      <Col>
        <IntroText>
          We're taking a stab at changing the way we do frontend development. Here's our current, evolving, high-level
          overview or where we are and where we want to go.
        </IntroText>
      </Col>
    </Row>
  </Feature>
}

view Roadmap.NextRelease {
  let cards = [
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
  ]

  <Feature col>
    <UI.Title>Next Release</UI.Title>
    <ReleaseCards cards={cards} />
  </Feature>
}

view Roadmap.Immediate {
  let cards = [
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
  ]

  <Feature col>
    <UI.Title>Up Next</UI.Title>
    <ReleaseCards cards={cards} />
  </Feature>
}

view Roadmap.ShortTerm {
  let cards = [
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
  ]

  <Feature col>
    <UI.Title>In Discussion</UI.Title>
    <ReleaseCards cards={cards} />
  </Feature>
}

view Roadmap.LongTerm {
  let cards = [
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { title: 'Isomorphic', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
  ]

  <Feature col>
    <UI.Title>Long Term</UI.Title>
    <ReleaseCards cards={cards} />
  </Feature>
}

view ReleaseCards {
  prop cards

  <Row>
    <Card repeat={cards} title={_.title}>
      {_.description}
    </Card>
  </Row>

  $Row = {
    overflowX: 'scroll'
  }
}