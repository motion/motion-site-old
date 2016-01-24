const docs = [
  { title: "Intro", view: 'Intro', slug: 'intro' },
  { title: "Install", view: 'Install', slug: 'install' },
  { title: "Views", view: 'Views', slug: 'views' },
  { title: "Helpers", view: 'Helpers', slug: 'helpers' },
  { title: "Elements", view: 'Elements', slug: 'elements' },
  { title: "Styles", view: 'Styles', slug: 'styles' },
  { title: "Events", view: 'Events', slug: 'events' },
  { title: "Routes", view: 'Routes', slug: 'routes' },
  { title: "Extras", view: 'Extras', slug: 'extras' },
  { title: "Deploying", view: 'Deploying', slug: 'deploying' },
  { title: "Editor", view: 'Editor', slug: 'editor' },
]

view Docs {
  <Page list={docs} base="/docs">
    <Docs.Intro if={location.pathname == "/docs"} />
    <RoutedContent
      parent="Docs"
      content={docs}
      route="/docs/:slug" />
  </Page>

  $ = {
    flexGrow: 1
  }
}
