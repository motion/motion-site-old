view Docs.Install {
  <Title>Installing</Title>
  <Body>
    <IntroText>Install Flint CLI and create a new app.</IntroText>

    <h4>Install</h4>

    <p>Our install script helps set you up a bit better:</p>

    <Code lang="bash" source={`
      sh <(curl -sL https://flint.love)
    `}/>

    <p>
    Or you can just:
    </p>

    <Code lang="bash" source={`
      # install
      npm install -g flint
    `}/>

    <h4>Running</h4>

    <p>
    Once set up, create your first app:
    </p>

    <Code lang="bash" source={`
      # create app
      flint new appname

      # start app
      cd appname
      flint
    `}/>

    <p>
    Your app should open automatically in Chrome for you. Open your app to begin editing!
    </p>

    <h4>When you're ready to deploy</h4>

    <Code lang="bash" source={`
      flint build
    `}/>

    <p>
      You app is now built into \`.flint/build\`. Try uploading it to divshot or surge.sh to see it instantly.
    </p>
    <Next to='/docs/views'>Using Views</Next>
  </Body>
}