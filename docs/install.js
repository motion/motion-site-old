view Docs.Install {
  <Title>Installing</Title>
  <IntroText>Install Flint CLI and create a new app</IntroText>

  <Code lang="bash" source={`
    sh <(curl -sL https://flint.love)
  `}/>

  <Text>
    Or you can install with just npm.
  </Text>

  <Code lang="bash" source={`
    npm install -g flint
  `}/>

  <SubTitle>Running</SubTitle>

  <Text>
    Once set up, create your first app:
  </Text>

  <Code lang="bash" source={`
    flint new appname

    # start app
    cd appname
    flint
  `}/>

  <Text>
  Your app should open automatically in Chrome for you. Open your app to begin editing!
  </Text>

  <SubTitle>When you're ready to deploy</SubTitle>

  <Code lang="bash" source={`
    flint build
  `}/>

  <Text>
    You app is now built into <code>.flint/build</code>, ready to deploy!
  </Text>

  <Next to='/docs/views'>Using Views</Next>
}