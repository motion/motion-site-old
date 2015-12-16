view Start {
  <Page>
    <contain>
      <Start.Intro />
      <Start.Getting />
      <Start.Slack />
      <Start.Learning />
      <Start.Examples />
      <Start.Joining />
    </contain>
  </Page>

  $contain = {
    padding: [50, 100],
    fontSize: 20,
    lineHeight: '2.2rem',
    color: '#545454'
  }
}

view Start.Learning {
  <Title big>Learning Flint</Title>
  <Text>We've found that Flint can be learned quicky by those who have programmed in JS before.</Text>
  <Text>Our <a href="https://flintjs.com/docs">documentation</a> can help you learn more specific features of Flint and our <a href="https://github.com/flintjs/examples">examples repo</a> has a variety of small examples showing working code.</Text>
  <Text>We're working on an online live <a href="http://learn.flintjs.com">interactive code editor</a>, but it's <em>not yet ready</em>, we'll notify you once it's up.</Text>
}

view Start.Examples {
  <Title big>
    Flint Examples
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
      <Link href="https://github.com/flintjs/flashcash">FlashCash</Link> - A simple one-off site that integrates firebase, accounts and payments
    </li>

    <li>
      <Link href="https://github.com/flintjs/site">Flint.js Homepage</Link> - Our homepage has over 200 views, it's not very dynamic but we've tried to keep it well written.
    </li>

    <li>
      <Link href="https://github.com/natew/arena">Arena</Link> - A simple portfolio site that uses a simple REST API. Uses async/await and fetch together to show some advanced fetching patterns as well as routes
    </li>
  </ul>
}

view Start.Getting {
  let node = true

  <Title big>
    Getting Flint
  </Title>
  <Row class="space">
    <choice onClick={() => node = true}
            class={{bold: node}}>I have node</choice>
    <choice onClick={() => node = false}
            class={{bold: !node}}>Start from scratch</choice>
  </Row>

  <Start.Node if={node} />
  <Start.Scratch if={!node} />

  $space = {
    justifyContent: 'space-around',
    margin: [20, 0]
  }

  $choice = {
    border: '3px solid #eee',
    cursor: 'pointer',
    padding: 10,
  }

  $bold = { fontWeight: 'bold' }
}

view Start.Scratch {
  <ol>
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
      nvm install 5.2
    `} />
    <li>
      Install Flint
    </li>
    <Code source={`
      sh <(curl -L https://flint.love)
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
}

view Start.Node {
  <ol>
    <li>
      Install atom from <Link href="http://atom.io/">atom.io</Link>
    </li>

    <li>
      Install Flint Beta
    </li>
    <Code source={`
      sh <(curl -L https://flint.love/beta)
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
}

view Start.Slack {
  <Title big>Join our Slack</Title>
  <Text>Direct message Nick Cammarata to get access to the Private Beta channel.</Text>
  <iframe seamless="seamless" src="https://flint-slack.herokuapp.com/"></iframe>

  $iframe = {
    border: 'none',
    width: '100%',
    height: 240,
    overflow: 'hidden',
    marginTop: 20,
  }

  $ = {
    margin: [-20, 0, 20]
  }
}

view Start.Intro {
  <spark-img src="/assets/images/spark.jpg" />
  <Text>We're excited to have you. As part of Spark, you will have access to our newest tools that will be released after launch.</Text>

  <Text>We'll be featuring many of your projects in early January during our launch, and using your feedback to help decide which features to focus on.</Text>

  <Text>We're looking forward to seeing what you build and hearing your feedback.</Text>

  <Text>
    Here's some help getting started with Flint. We'll assume you're really starting from scratch on a new machine.
  </Text>

  $spark = {
    maxWidth: '30%',
    margin: [20, 'auto']
  }
}

view Start.Joining {
  <Title big>We're Joining You</Title>
  <Text>Flint's founders (Nick and Nate) will be joining you in Spark by building Groop, a fun group chat app where votes can decide any action, small spontaneous games can take place, and generaly tomfoolery can be had.</Text>

  <groop-img src="/assets/images/groop.png" />

  <Text>We'll be open sourcing Groop and using it as a way to teach Flint. We'll try to provide weekly updates in the Slack channel</Text>

  $groop = {
    maxWidth: '30%',
    margin: ['auto']
  }
}
