view Roadmap {
  <HeaderAlt />
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
        <SubTitle>
          We're taking a stab at changing the way we do frontend development. Here's our current, evolving, high-level
          overview or where we are and where we want to go.
        </SubTitle>
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


view Card {
  prop title
  prop children

  <card>
    <title if={title}>{title}</title>
    <Check />
    <body>
      {children}
    </body>
  </card>

  $ = {
    boxShadow: `2px 2px 10px rgba(0,0,0,0.1)`,
    padding: 0,
    margin: 10,
    minWidth: '20%'
  }

  $title = {
    padding: 10,
    fontSize: 18
  }

  $body = {
    padding: 10
  }

  $Check = {
    width: 40,
    height: 40,
    margin: [10, 'auto']
  }
}