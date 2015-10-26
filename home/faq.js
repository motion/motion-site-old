view FAQ {
  <Contain pad>
    <Tag name="FAQ" right />
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
        <li>The <a href="https://github.com/flintjs/examples">examples repo</a> has example apps</li>
        <li>Check out the Flint <a href="https://github.com/flintjs/site">source for this site</a></li>
      </ul>
    </answer>

    <question>
      What are "ultra-fast" hot reloads?
    </question>
    <answer>
      <p>
        In general, you should see faster reloads than other systems.
        Flint's static analyzer is built from the ground up to optimize for live development.
      </p>
      <p>
        By only injecting the code that you changed into your running app, we can
        provide near-instant save-to-refresh times no matter how large your app grows.
      </p>
    </answer>

    <question>
      Can I use it in my existing stack?
    </question>
    <answer>
      <p>
        Flint is a static compiler that compiles to any web framework, meaning it can theoretically be used with any existing stack. Out of the box we compile to React. 
      </p>
      <p>
        However, many parts of Flint (CLI, build system) work best when it's used alone. 
        We're starting by focusing on this, but will be providing more documentation on using Flint in existing applications soon.
      </p>
    </answer>

    <question>
      What about Flux, GraphQL, or data management in general?
    </question>
    <answer>
      <p>
        Flint works at a lower level, dealing with variables. You can use any data source,
        such as an AJAX request or Websocket connection. When you set your variables using the response data, Flint will make sure your views stay up to date.
      </p>
      <p>
        It is possible to write abstractions such as Flux above this, and this is something we'll be working on soon.
      </p>
    </answer>
    
    <question>What if I decide to stop using Flint</question>
    <answer>
      <p>
        Flint static compiler can output clean code in any framework. We're starting with React.
      </p>
      <p>
        At any point you can continue developing from the code we output if you choose to stop using Flint.
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
