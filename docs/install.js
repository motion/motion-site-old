const contents = `
Install Flint CLI and create a new app.

#### Install

Our install script helps set you up a bit better:

    sh <(curl -sL https://flint.love)

Or you can just:

    # install
    npm install -g flint

#### Running

Once set up, create your first app:

    # create app
    flint new appname

    # start app
    cd appname
    flint

Your app should open automatically in Chrome for you. Open your app to begin editing!

#### When you're ready to deploy

    flint build

You app is now built into \`.flint/build\`. Try uploading it to divshot or surge.sh to see it instantly.
`

view Docs.Install {
  <Title>Flint</Title>
  <Body markdown={contents} />
}