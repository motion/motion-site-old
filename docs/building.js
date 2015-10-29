view Docs.Building {
  <Title big>Builds & Going to Production</Title>
  <Body>
    <Text big>
      Flint lets you build your app, with all of your assets, code, and template ready for production
      with a single command.
    </Text>

    <Text>
      To build your app, run <code>flint build</code>. This will output your production app code into
      the <code>.flint/build</code> directory.
    </Text>

    <Text>
      From there, you can deploy it to any number of static hosts. We have tested with
      with <a href="http://surge.sh">Surge.sh</a> and
      with <a href="http://firebase.com">Firebase</a>. Both are very easy to use
      and provide an excellent and simple onboarding experience.
    </Text>

    <Title>Assets</Title>

    <Text>
      Put them in your app folder and the are available
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
  </Body>
}