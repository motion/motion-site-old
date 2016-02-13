const examples = [
  { title: "Intro", view: 'Intro', slug: 'intro', description: `
    Learn how to use views in Motion. Learn the complete style syntax, using variables
    for dynamic content, and basics of adding events.
  ` },
  { title: "Fetch", view: 'Arena', slug: 'fetch', description: `
    Now that you have views down, learn how to fetch data from anywhere on the web and use it in your views.
    This tutorial also teaches routing, and how to use the Motion router with views.
  ` },
]

view Learn {
  <Head
    title="Learn Motion"
    subtitle="Get familiar with Motion through these quick tutorials."
  />
  <Page>
    <SubTitle>Introduction</SubTitle>
    <Card.List>
      <Card repeat={examples} title={_.title} onClick={() => Motion.router.go(`/examples/${_.slug}`)}>
        {_.description}
      </Card>
    </Card.List>
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
}

view Examples {
  <Page list={examples} base="/examples">
    <RoutedContent
      parent="Examples"
      content={examples}
      route="/examples/:slug" />
  </Page>
}