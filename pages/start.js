view Start {
  let showInstall = false

  function toggleStart() {
    showInstall = !showInstall
  }

  <Page>
    <Title big>Welcome to The Spark Beta</Title>

    <Text>
      Let's get started with the Flint beta release. If you're really starting from scratch on a new machine, here's a guide to install from the beginning.
    </Text>

    <Text>

    </Text>

    <Title>
      Installing from scratch
    </Title>

    <Text>
      If you already have node/atom, skip to the next section! Otherwise, <Link onClick={toggleStart}>show the instructions here</Link>.
    </Text>

    <ol if={showInstall}>
      <li>
        Install atom from <Link href="http://atom.io/">atom.io</Link>
      </li>

      <li>
        Install brew
      </li>
      <Code>
        ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      </Code>

      <li>
        Install git
      </li>
      <Code>
        brew install git
      </Code>

      <li>
        Install nvm + node
      </li>
      <Code source={`
        brew install nvm
        nvm install 5
      `} />

      <li>
        Create your app
      </li>
      <Code source={`
        cd ~
        flint new beautifulapp
        cd beautifulapp
        flint
      `} />
    </ol>

    <Title>
      Join the Spark Slack
    </Title>

    <Text>
      We have a private chat room in our Slack for everyone in Spark. We will add you to it, be sure to sign up to our chat here:
    </Text>

    <col>
      <Slack />
    </col>


    <Title>
      Building a great app
    </Title>

    <Text>
      Flint is early so there are less resources to find around the web, but fear not!
    </Text>

    <Text>
      We have a few large apps we've been building ourselves, with friends and with companies over the last
      few months that can serve as your example.
    </Text>

    <ul>
      <li>
        <Link href="">FlashCash</Link> - A simple one-off site that integrates firebase, accounts and payments
      </li>

      <li>
        <Link href="https://github.com/flintjs/site">Flint.js Homepage</Link> - Our homepage has over 200 views, it's not very dynamic but we've tried to keep it well written (besides the globals).
      </li>

      <li>
        <Link href="https://github.com/natew/arena">Arena</Link> - A simple portfolio site that uses a simple REST API. Uses async/await and fetch together to show some advanced fetching patterns as well as routes
      </li>
    </ul>
  </Page>

  $content = {
    margin: [100, 'auto'],
  }

  $spark = {
    maxWidth: '100%',
    margin: [0, 'auto']
  }

  $text = {
    maxWidth: 450,
    textAlign: 'left',
    margin: [15, 'auto']
  }

  $col = {
    flexFlow: 'column',
    flowDirection: 'column'
  }
}
