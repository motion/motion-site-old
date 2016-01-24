view NotFound {
  <Head
    title="Not found!"
    subtitle="Yes, you can do 404 routes with Flint :)"
  />
  <Page>
    <Code source={`
      view Main {
        <NotFound route={404} />
      }

      view NotFound {
        <h1>404: This is how you do it!</h1>
      }
    `} />
  </Page>

  $ = {
    flexGrow: 1
  }
}