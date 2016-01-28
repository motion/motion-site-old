view Docs.Install {
  <Title>Installing</Title>
  <Docs.InstallContent />

  <Next to='/docs/views'>Using Views</Next>
}

view Docs.InstallContent {
  <IntroText>Install Flint CLI and create a new app</IntroText>

  <Code lang={false} source={`
    $ sh <(curl -sL https://flint.love)
  `}/>

  <Text>
    Or you can install with just npm.
  </Text>

  <Code lang={false} source={`
    $ npm install -g flint
  `}/>

  <SubTitle>Running</SubTitle>

  <Text>
    Once set up, create your first app:
  </Text>

  <Code large source={`
    $ flint new project
    $ cd project
    $ flint
      ⇢  http://localhost:4000
  `} />

  <Text>
  Your app should open automatically in Chrome for you. Open your app to begin editing!
  </Text>

  <SubTitle>When you're ready to deploy</SubTitle>

  <Code lang={false} source={`
    flint build
  `}/>

  <Text>
    You app is now built into <code>.flint/build</code>, ready to deploy!
  </Text>
}