const examples = [
  {
    title: 'Introduction',
    examples: [
      { title: "Begin", view: 'Intro', slug: 'intro', description: `
        Learn how to use views in Motion. Learn the complete style syntax, using variables
        for dynamic content, and basics of adding events.
      ` },
      { title: "Routing and Fetching", view: 'Arena', slug: 'fetch', description: `
        Learn how to fetch data using fetch as well as async/await.
        This tutorial also teaches routing, and how to use the Motion router with views.
      ` },
    ]
  },
  {
    title: 'Integration',
    examples: [
      { title: "Begin", view: 'Intro', slug: 'intro', description: `
        Learn how to use views in Motion. Learn the complete style syntax, using variables
        for dynamic content, and basics of adding events.
      ` },
      { title: "Routing and Fetching", view: 'Arena', slug: 'fetch', description: `
        Learn how to fetch data using fetch as well as async/await.
        This tutorial also teaches routing, and how to use the Motion router with views.
      ` },
    ]
  }
]

view Learn {
  <Head
    title="Learn Motion"
    subtitle="Get familiar with Motion through these quick tutorials."
  />
  <Page>
    <section repeat={examples}>
      <SubTitle>{_.title}</SubTitle>
      <Card.List>
        <Card repeat={_.examples}
          title={_.title}
          onClick={() => Motion.router.go(`/examples/${_.slug}`)}>
            {_.description}
        </Card>
      </Card.List>
    </section>
  </Page>

  $ = {
    flexGrow: 1
  }

  $Row = {
    flexWrap: 'wrap'
  }

  $Card = {
    width: '46%'
  }

  $section = {
    marginBottom: 30
  }
}

view Examples {
  <Page list={examples} base="/examples">
    <RoutedContent
      parent="Examples"
      content={examples}
      route="/examples/:slug" />
  </Page>
}