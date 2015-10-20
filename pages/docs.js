const docs = [
  { title: "Intro", view: 'Intro', slug: '' },
  { title: "Install", view: 'Install', slug: 'install' },
  { title: "Views", view: 'Views', slug: 'views' },
  { title: "Styles", view: 'Styles', slug: 'styles' },
  { title: "Routes", view: 'Routes', slug: 'routes' },  
  { title: "Extras", view: 'Extras', slug: 'extras' }
]

view Docs {
  <Page list={docs} base="/docs">
    <Doc route="/docs/:slug" />
    <Intro route="/docs" />
  </Page>
}

view Docs.Doc {
  let el

  on('props', () => {
    el = docs.filter(x => x.slug == ^params.slug)[0]
  })

  <body>
    {view.el(`Docs.${el.view}`)}
  </body>

  $body = {
    width: '100%'
  }
}

view Docs.Intro {
  <Title>Welcome to Flint</Title>
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