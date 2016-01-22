const examples = [
  { title: "Intro", view: 'Intro', slug: 'intro' },
  { title: "Fetch", view: 'Arena', slug: 'fetch' },
]

view Examples {
  <Page list={examples} base="/examples">
    <RoutedContent
      parent="Examples"
      content={examples}
      route="/examples/:slug" />
  </Page>
}