view FAQ {
  <Contain pad>
    <question>
      What can I build with it?
    </question>
    <answer>
      <p>
        Flint has all the power of React, so just about anything!
        We're focusing on making the developer experience as good as possible,
        opening up the community to build and release cool stuff for it.
        Flint is already in use at Zappos, Quixey and a variety of companies
        powering apps, internal tools, and websites.
      </p>
    </answer>

    <question>
      How about some example code?
    </question>
    <answer>
      <ul>
        <li>The <a href="https://github.com/flintjs/demos">demo repo</a> has example apps</li>
        <li>Check out the Flint <a href="https://github.com/flintjs/site">source for this site</a></li>
      </ul>
    </answer>

    <question>
      What are "ultra-fast" hot reloads?
    </question>
    <answer>
      <p>
        In general, you should see faster reloads than other systems.
        Flint has done some optimization to make this possible.
        Due to view macros and other optimizations we avoid a lot of
        work during compilation. The result? No matter how large your app,
        save-to-refresh times are near instant.
      </p>
    </answer>

    <question>
      Can I use it in my existing stack?
    </question>
    <answer>
      <p>
        You also can embed your Flint
        app into any page, so you could easily plug it into an existing
        web app today. We're working on plugins, but we strong suggest
        trying out the CLI. Part of our speed difference is in the design
        of the build system.
      </p>
    </answer>

    <question>
      What about Flux, GraphQL, or data management in general?
    </question>
    <answer>
      <p>
        You can build Flux into Flint using npm, and we are exploring
        ways to make GraphQL a first class citizen (and a lot easier
        to use). At the moment, we'd recommend building without Flux,
        and crossing that bridge when the time comes. We will be talking
        more about good ways to handle data soon.
      </p>
    </answer>
  </Contain>

  $ = {
    margin: [20, 'auto'], //offset for p space
    padding: [50, 40],
    maxWidth: 1000,
    lineHeight: '1.8rem',

    [device.small]: {
      padding: 0
    }
  }

  $a = style.link

  $p = {
    margin: [10, 0]
  }

  $intro = {
    fontSize: 16,
    padding: 20,
    border: '1px solid #ddd'
  }

  $question = {
    fontSize: 20,
    display: 'block'
  }

  $answer = {
    margin: [0, 0, 30],
    color: '#666',
  }
}
