export const NotFound = () => $(
  <Head
    title="Not found!"
    subtitle="Yes, you can do 404 routes with Motion :)"
  />
  <Page>
    <Code source={`
      export const Main = () => $(
        <NotFound route={404} />
      }

      export const NotFound = () => $(
        <h1>404: This is how you do it!</h1>
      }
    `} />
  </Page>

  : {
    flexGrow: 1
  }
}