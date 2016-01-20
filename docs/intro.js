view Docs.Intro {
  <Title>What is Flint?</Title>

  <IntroText>
    Flint is a rethinking of modern development. It's a smart compiler that understands how you build apps & connects your browser, editor and code.
  </IntroText>

  <Text>
    There's one abstraction in Flint: the <code>view</code>.
  </Text>

  <Text>
    Views replace HTML, CSS and your framework of choice with a simple statement: the view.
    Views contain their logic, markup and style. Use normal JavaScript inside of them. When a variable changes, your view stays up to date.
  </Text>

  <Text>
    We like to build apps using small components that encapsulate all they need. Today, we have libraries to that let us do this but eventually we'll want a first class language that understands how we build. Flint is the result of an extensive and ongoing process to make that available.
  </Text>

  <Text>
    Flint runs on node. It's powered by ES6, npm, Gulp, Babel, Webpack, React, Bluebird, and many more libraries. It's open source, and we are actively interesting in building an amazing developer community. Please <Link to="/community">read our community guidelines</Link> before joining!
  </Text>

  <SubTitle>Super Hot Reloads</SubTitle>
  <Text>
    Hot reloads are when you edit your app and it never "resets" its state. Typically hot reloads retain state of your component tree, but lose it in certain situations. <b>Super hot reloads</b> take it a step further, with two features:
  </Text>

  <ul>
    <li>
      <b>Nested state</b> - Flint tracks all of your variables and view properties. Parent views won't lose their child view state (unless you change one of the child properties). So you can edit a Modal, without losing the Toggle positions inside of it.
    </li>
    <li>
      <b>Internal state</b> - When editing a view, Flint also tracks how your values change over time. It will keep state that you haven't changed, avoiding having the entire state of a view reset when you're only changing some wording.
    </li>
  </ul>

  <Text>
    Flint's compiler is not only smarter than others, it's faster too due to avoiding a large amount of AST parsing.
  </Text>

  <SubTitle>Powerful Styles</SubTitle>
  <Text>
    Flint's <code>$</code> style variables are automatically attached to your view elements, to bring back the ease of styling found in CSS. But they go much further. Styles are just objects, and you have the full power of ES6.
  </Text>

  <Text>
    Flint also optimizes styles in a big way. It statically analyzes your style objects and extracts the non-dynamic keys. It then hoists those styles out of your view and into classes, giving you the full power of CSS in JS, without any performance downside, all without having to think about it.
  </Text>

  <SubTitle>Smart Errors</SubTitle>
  <Text>
    Runtime and compile time errors are instantly visible in your browser and your editor. Flint recovers from errors gracefully so your app doesn't break. It notifies you when you tried to access a view that doesn't exist and recovers previous good states when you've made an error, to avoid large amounts of distractions in your browser.
  </Text>

  <SubTitle>Automatic NPM Installs</SubTitle>
  <Text>
    Flint understands your code as though modern ES6 were supported in every browser. This means when you type an import, Flint knows to install the package, and refresh your browser. This happens automatically for you without ever needing to refresh the browser.
  </Text>

  <SubTitle>No boilerplate</SubTitle>
  <Text>
    Create and start your app instantly, the only files in your directory is your own code. And the only code you write is directly representing what your app is doing, no writing around a library.
  </Text>

  <Text>
    Flint watches your files, builds to production, and will continuously improve over time without you needing to ever learn a build system configuration syntax or write massive amounts of glue code to bring your app to life.
  </Text>

  <SubTitle>Principles</SubTitle>

  <Text>
    Throughout the process of building there are countless moments where ease of
    experimentation unlocks entirely new paths. You stumble on solutions only
    because you have fast and lightweight tools. By bringing you close to your canvas Flint enables new ways to create.
  </Text>

  <Next to='/docs/install'>Install Flint</Next>
}
