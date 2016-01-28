view Docs.Install {
  <Docs.InstallContent />
}

view Docs.InstallContent {
  <Title>Installing</Title>
  <IntroText>Install Flint CLI and create a new app</IntroText>
  <Text>
    Our install script lets you choose to: fix your npm globals have permissions issues &
    install the Atom plugin.
  </Text>

  <Code lang={false} source={`
    $ sh <(curl -sL https://flint.love)
  `}/>

  <Text>
    Or you can install with just npm,
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

  <Next to='/docs/views'>Using Views</Next>
}