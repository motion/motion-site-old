const docs = [
  { title: "Intro", view: 'Intro', slug: 'intro' },
  { title: "Install", view: 'Install', slug: 'install' },
  { title: "Views", view: 'Views', slug: 'views' },
  { title: "Styles", view: 'Styles', slug: 'styles' },
  { title: "Routes", view: 'Routes', slug: 'routes' },
  { title: "Extras", view: 'Extras', slug: 'extras' },
  { title: "Production", view: 'Production', slug: 'production' },
]

view Docs {
  <Page list={docs} base="/docs">
    <RoutedContent
      parent="Docs"
      content={docs}
      route="/docs/:slug" />
  </Page>
}