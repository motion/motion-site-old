view Docs.Assets {
  <Title big>Assets</Title>
  <Body>
    <Text big>Flint handles your assets without much fanfare.</Text>

    <Text>
      Just put them in your app folder and the are available
      to your app at the same url as they are in the file system.
      Say you have <strong>./assets/logo.png</strong>. You could
      show it like so:
    </Text>

    <Code source={`
      view Main {
        <img src="/assets/logo.png" />
      }
    `} />

    <Text>
      Your base stylesheet is located at <strong>.flint/static/main</strong>. If
      you have some base CSS styles you'd like to tweak, you can adjust
      them in there and refresh.
    </Text>

    <Next to='/docs/extras'>Extras</Next>
  </Body>
}