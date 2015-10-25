const docs = [
  { title: "Intro", view: 'Intro', slug: 'intro' },
  { title: "Install", view: 'Install', slug: 'install' },
  { title: "Views", view: 'Views', slug: 'views' },
  { title: "Elements", view: 'Elements', slug: 'elements' },
  { title: "Styles", view: 'Styles', slug: 'styles' },
  { title: "Routes", view: 'Routes', slug: 'routes' },
  { title: "Assets", view: 'Assets', slug: 'assets' },
  { title: "Extras", view: 'Extras', slug: 'extras' },
  { title: "Building", view: 'Building', slug: 'building' },
]

view Docs {
  <Page list={docs} base="/docs">
    <RoutedContent
      parent="Docs"
      content={docs}
      route="/docs/:slug" />
  </Page>
}