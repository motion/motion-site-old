export const Start = () => $(
  <Head
    title="Getting Started"
    subtitle="Motion brings React concepts to javascript the language. It optimizes for developer experience."
  />
  <Page>
    <Docs.InstallContent />
    <Banner.Transition />
  </Page>

  contain: {
    padding: [50, 100],
    fontSize: 20,
    lineHeight: '2.2rem',
    color: '#545454'
  }
}

export const Start.Getting = () => $(
  let node = true

  <SubTitle>
    Getting Motion
  </SubTitle>
  <Row class="space">
    <choice onClick={() => node = true}
            class={{bold: node}}>I have node</choice>
    <choice onClick={() => node = false}
            class={{bold: !node}}>Start from scratch</choice>
  </Row>

  <Start.Node if={node} />
  <Start.Scratch if={!node} />

  space: {
    justifyContent: 'space-around',
    margin: [20, 0]
  }

  choice: {
    border: '3px solid #eee',
    cursor: 'pointer',
    padding: 10,
  }

  bold: { fontWeight: 'bold' }
}

export const Start.Scratch = () => $(
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
      Install Motion
    </li>
    <Code source={`
      sh <(curl -L https://motion.run)
    `} />
    <li>
      Create your app
    </li>
    <Code source={`
      cd ~
      motion new beautifulapp
      cd beautifulapp
      motion
    `} />
  </ol>
}

export const Start.Node = () => $(
  <ol>
    <li>
      Install atom from <Link href="http://atom.io/">atom.io</Link>
    </li>

    <li>
      Install Motion Beta
    </li>
    <Code source={`
      sh <(curl -L https://motion.love/beta)
    `} />
    <li>
      Create your app
    </li>
    <Code source={`
      cd ~
      motion new beautifulapp
      cd beautifulapp
      motion
    `} />
  </ol>
}

export const Start.Slack = () => $(
  <Title big>Join our Slack</Title>
  <Text>Direct message Nick Cammarata to get access to the Private Beta channel.</Text>
  <iframe seamless="seamless" src="https://motion-slack.herokuapp.com/"></iframe>

  iframe: {
    border: 'none',
    width: '100%',
    height: 240,
    overflow: 'hidden',
    marginTop: 20,
  }

  : {
    margin: [-20, 0, 20]
  }
}

export const Start.Intro = () => $(
  <spark-img src="/assets/images/spark.jpg" />
  <Text>We're excited to have you. As part of Spark, you will have access to our newest tools that will be released after launch.</Text>

  <Text>We'll be featuring many of your projects in early January during our launch, and using your feedback to help decide which features to focus on.</Text>

  <Text>We're looking forward to seeing what you build and hearing your feedback.</Text>

  <Text>
    Here's some help getting started with Motion. We'll assume you're really starting from scratch on a new machine.
  </Text>

  spark: {
    maxWidth: '30%',
    margin: [20, 'auto']
  }
}

export const Start.Joining = () => $(
  <Title big>We're Joining You</Title>
  <Text>Motion's founders (Nick and Nate) will be joining you in Spark by building Groop, a fun group chat app where votes can decide any action, small spontaneous games can take place, and generaly tomfoolery can be had.</Text>

  <groop-img src="/assets/images/groop.png" />

  <Text>We'll be open sourcing Groop and using it as a way to teach Motion. We'll try to provide weekly updates in the Slack channel</Text>

  groop: {
    maxWidth: '30%',
    margin: ['auto']
  }
}
