const examples = [
  {
    title: 'Introduction',
    examples: [
      { title: "Begin", view: 'Intro', slug: 'intro', description: `
        Learn how to use views in Motion. Learn the complete style syntax, using variables
        for dynamic content, and basics of adding events.
      ` },
      { title: "Routes/Fetch", view: 'Fetch', slug: 'fetch', description: `
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
      { title: "Routing and Fetching", view: 'Fetch', slug: 'fetch', description: `
        Learn how to fetch data using fetch as well as async/await.
        This tutorial also teaches routing, and how to use the Motion router with views.
      ` },
    ]
  }
]

let active = 0

view Learn {
  <Head
    title="Learn Motion"
    subtitle="Get familiar with Motion through these quick tutorials."
  />
  <Page>
    {examples.map((example, i) =>
      <section key={i}>
        <SubTitle>{example.title}</SubTitle>
        <Card.List>
          <Card repeat={example.examples}
            title={example.title}
            onClick={() => {
              active = i
              Motion.router.go(`/examples/${_.slug}`)
            }}>
              {_.description}
          </Card>
        </Card.List>
      </section>
    )}
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

const capitalize = str => str[0].toUpperCase() + str.slice(1)

view Examples {
  prop params

  <Page list={examples[active].examples} base="/examples">
    {view.el(`Examples.${capitalize(params.slug)}`)}
  </Page>

  $body = { width: '100%' }
}