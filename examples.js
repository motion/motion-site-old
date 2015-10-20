const examples = [
  {
    title: "The Case of the Missing Blonde",
    body: 'Example1'
  },
  {
    title: "The Bradshaw Killer",
    body: 'Example2'
  },
  {
    title: "No Chains, No Gains",
    body: 'Example3'
  }
]

view Examples {
  let active = examples[0]

  <HeaderAlt />
  <Contain>
    <Sidebar />
    <Example {...active} />
  </Contain>

  $Contain = {
    flexFlow: 'row',
    width: '80%',
    maxWidth: 1300
  }
}

view Examples.Sidebar {
  const show = i => {
    return () => ^show(i)
  }

  <item repeat={examples}>
    <a key={_index} href={show(_index)}>
      {_.title}
    </a>
  </item>

  $ = {
    borderRight: '1px solid #ddd',
    margin: 20,
    marginLeft: 0,
    width: '25%',
    minWidth: 250
  }

  $item = {
    flexFlow: 'row',
    lineHeight: '1.6rem',
    margin: 10,
  }

  $index = {
    padding: [0, 10, 0, 0],
    flexFlow: 'row'
  }

  $a = style.link
}

view Examples.Example {
  <body>
    {view.el(^body)}
  </body>

  $body = {
    width: '100%'
  }
}

view Example1 {
  <Title>TodoMVC</Title>
  <IntroText>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
  </IntroText>
}

view IntroText {
  <introtext-p yield />

  $ = {
    fontSize: 22,
    lineHeight: '2.2rem',
    fontWeight: 300,
    opacity: 0.9,
    margin: 0,
    marginBottom: 10
  }
}