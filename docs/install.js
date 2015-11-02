view Docs.Install {
  <Title big>Installing</Title>

  <Body>
    <Text big>Install Flint CLI and create a new app.</Text>

    <p>Our install script helps set you up a bit better:</p>

    <Code lang="bash" source={`
      sh <(curl -sL https://flint.love)
    `}/>

    <p>
    Or you can just:
    </p>

    <Code lang="bash" source={`
      npm install -g flint
    `}/>

    <Title small>Running</Title>

    <p>
    Once set up, create your first app:
    </p>

    <Code lang="bash" source={`
      flint new appname

      # start app
      cd appname
      flint
    `}/>

    <p>
    Your app should open automatically in Chrome for you. Open your app to begin editing!
    </p>

    <Title small>When you're ready to deploy</Title>

    <Code lang="bash" source={`
      flint build
    `}/>

    <p>
      You app is now built into <code>.flint/build</code>. Try uploading it to divshot or surge.sh to see it instantly.
    </p>
    <Next to='/docs/views'>Using Views</Next>
  </Body>
}