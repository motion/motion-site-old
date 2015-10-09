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
      </p>
      <p>
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
      Does it work with React?
    </question>
    <answer>
      <p>
        Yes! Flint runs on React.
      </p>
    </answer>

    <question>
      What are "fast" hot reloads?
    </question>
    <answer>
      <p>
        In general, you should see faster reloads than other systems.
        Flint has done some optimization to make this possible.
        Due to view macros and other optimizations we avoid a lot of
        work during compilation.
      </p>
    </answer>

    <question>
      Can I use it in my existing stack?
    </question>
    <answer>
      <p>
        You also can embed your Flint
        app into any page, so you could easily plug it into an existing
        web app today.
      </p>
    </answer>
  </Contain>

  $ = {
    margin: [50, 'auto'], //offset for p space
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
