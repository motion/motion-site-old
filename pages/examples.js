const examples = [
  { title: "Intro", view: 'Intro', slug: 'intro' },
  { title: "Fetch", view: 'Arena', slug: 'fetch' },
]

view Examples {
  <Page list={examples} base="/examples" containStyle={{ width: '100%' }}>
    <RoutedContent
      parent="Examples"
      content={examples}
      route="/examples/:slug" />
  </Page>
}