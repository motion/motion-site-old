const examples = [
  {
    title: "Are.na API",
    view: 'Example1',
    slug: 'one'
  },
  {
    title: "Todo MVC",
    view: 'Example2'
  },
  {
    title: "Routing",
    view: 'Example3'
  },
  {
    title: "Styling",
    view: 'Example3'
  }
]

view Examples {
  <HeaderAlt />
  <Contain>
    <Sidebar />
    <Example route="/examples/:slug" />
  </Contain>

  $Contain = {
    flexFlow: 'row',
    width: '80%',
    maxWidth: 1300
  }
}

view Examples.Sidebar {
  <item repeat={examples}>
    <a key={_index} onClick={router.link('/examples/' + _.slug)}>
      {_.title}
    </a>
  </item>

  $ = {
    borderRight: '1px solid #ddd',
    margin: 20,
    marginLeft: 0
  }

  $item = {
    flexFlow: 'row',
    lineHeight: '1.6rem',
  }

  $index = {
    padding: [0, 10, 0, 0],
    flexFlow: 'row'
  }

  $a = [style.link, {
    whiteSpace: 'nowrap',
    padding: 20,
    width: '100%',
    display: 'flex',
    textAlign: 'right'
  }]
}

view Examples.Example {
  let el

  on('props', () => {
    el = examples.filter(x => x.slug == ^params.slug)[0]
  })

  <body>
    {view.el(el.view)}
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