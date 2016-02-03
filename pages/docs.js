const docs = [
  {
    section: 'Begin',
    pages: [
      { title: "Intro", view: 'Intro', slug: 'intro' },
      { title: "Install", view: 'Install', slug: 'install' },
      { title: "Deploy", view: 'Deploying', slug: 'deploying' },
    ]
  },

  {
    section: 'Syntax',
    pages: [
      { title: "Views", view: 'Views', slug: 'views' },
      { title: "Helpers", view: 'Helpers', slug: 'helpers' },
      { title: "Elements", view: 'Elements', slug: 'elements' },
      { title: "Styles", view: 'Styles', slug: 'styles' },
    ]
  },

  {
    section: 'Features',
    pages: [
      { title: "Events", view: 'Events', slug: 'events' },
      { title: "Routes", view: 'Routes', slug: 'routes' },
      { title: "Extras", view: 'Extras', slug: 'extras' },
    ]
  },

  {
    section: 'Configuration',
    pages: [
      { title: "Config", view: 'Configuration', slug: 'configuration' },
      { title: "Editor", view: 'Editor', slug: 'editor' },
    ]
  }
]

view Docs {
  <Page sidebar={
    <Page.Sidebar>
      <section repeat={docs}>
        <title>{_.section}</title>
        <Page.Link base="/docs" repeat={_.pages} {..._} />
      </section>
    </Page.Sidebar>
  }>
    <Docs.Intro if={location.pathname == "/docs"} />
    <RoutedContent
      parent="Docs"
      content={[].concat.apply([], docs.map(section => section.pages))}
      route="/docs/:slug" />
  </Page>

  $ = {
    paddingTop: 40,
    flexGrow: 1
  }

  $section = {
    marginBottom: 10,
  }

  $title = {
    textAlign: "right",
    fontSize: 15,
    padding: [2, 5, 0],
    margin: [0, 0, -2],
    color: '#999',
    fontWeight: 300
  }
}
