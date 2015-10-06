view FAQ {
  <Contain pad strip noTwist>
    <Title>FAQ</Title>

    <question>
      What have you built with it?
    </question>
    <answer>
      <p>
        So far we're worked with Zappos and Quixey building large apps
        with Flint that are not open source. We've also built this site,
        and our demo apps.
      </p>
    </answer>

    <question>
      Where is example code?
    </question>
    <answer>
      <ul>
        <li>A <a href="https://github.com/flintjs/demos">demos repo</a> with example apps</li>
        <li>View <a href="https://github.com/flintjs/site">the source for this page</a></li>
      </ul>
    </answer>

    <question>
      Does it work with React?
    </question>
    <answer>
      <p>
        Yep! We work with just about any React component, because
        Flint runs on React. For now we are using React 0.14, so you
        may need compatibility with that.
      </p>
    </answer>

    <question>
      What are "Ultra-fast hot reloads"? Are they faster than ___?
    </question>
    <answer>
      <p>
        In general, you should see much faster reloads than just about
        any other system, including the new React hot loaders.
        One of the main reasons is becuase Flint has made a small but
        important change. Views are automatically available to any file.
        Because of this, you avoid a huge amount of import/export work
        by the compiler.
      </p>
      <p>
        In real terms, we compared an app built with other hot loaders
        (Webpack+RHL) and found with over 10 views build times
        slowed from about half a second to almost 2-4s.
        With Flint, the time is static to your current file,
        and almost never will go above 50ms for typical files.
      </p>
    </answer>

    <question>
      Why should I use this instead of React?
    </question>
    <answer>
      <p>
        The real answer to this is that Flint *is* React, with a
        smart system built around it that brings us as developers
        closer to just "writing what we think". It catches your errors
        and puts them all in one place & it installs npm packages for you.
        It's still in beta, but the difference is one that is best felt.
        It's fast!
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

    <question>
      Can I use it with my build tool?
    </question>
    <answer>
      <p>
        Not at the moment. A big part of Flint's upside is it's speed,
        which comes from it's combination of a variety of design
        decision baked into the build system.
      </p>
    </answer>

    <question>
      Flint seems risky
    </question>
    <answer>
      <p>
        Flint is very simple. It compiles down to very clean code that
        you could write without using our syntax! Further, it is entirely
        open source. We want to build out an amazing community of developers
        that all support Flint.
      </p>
      <p>
         And it's in use by some impressive companies!
      </p>
    </answer>
  </Contain>

  $ = {
    margin: [-80, 0, 0], //offset for p space
    padding: [0, 20, 50],
    lineHeight: '1.8rem'
  }

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
