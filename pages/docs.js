const docs = [
  { title: "Intro", view: 'Intro', slug: 'intro' },
  { title: "Install", view: 'Install', slug: 'install' },
  { title: "Views", view: 'Views', slug: 'views' },
  { title: "Styles", view: 'Styles', slug: 'styles' },
  { title: "Routes", view: 'Routes', slug: 'routes' },
  { title: "Extras", view: 'Extras', slug: 'extras' }
]

view Docs {
  <Page list={docs} base="/docs">
    <Doc route="/docs/:slug" />
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