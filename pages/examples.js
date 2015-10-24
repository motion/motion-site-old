const examples = [
  { title: "Multiplication Game", view: 'Mult', slug: 'mult' },
  { title: "Advanced Fetch", view: 'Arena', slug: 'fetch' },
]

view Examples {
  <Page list={examples} base="/examples" containStyle={{ width: '100%' }}>
    <RoutedContent
      parent="Examples"
      content={examples}
      route="/examples/:slug" />
  </Page>

  $RoutedContent = {
    width: '120%'
  }
}