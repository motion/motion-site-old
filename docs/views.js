view Docs.Views {
  <Title>Views</Title>

  <IntroText>Motion is based entirely on ES6 JavaScript with slight modifications for simplicity and clarity. By using a custom compiler, we remove the framework layer.</IntroText>

  <Text>Here is a view:</Text>

  <Code source={`
    view Main {
      <h1>Hello world</h1>
    }
  `} />

  <Text>A view can contain variables and constants:</Text>

  <Code source={`
    view Main {
      let name = 'World'

      <h1>Hello {name}</h1>
    }
  `} />

  <Text>When you change a variable, your view will update:</Text>

  <Code source={`
    view Main {
      let name = 'World'

      <h1>Hello {name}</h1>
      <button onClick={() => name = 'Universe'}>
        Change to Universe
      </button>
    }
  `} />

  <Text>Since it's just ES6, we can use a named function and call it.</Text>

  <Code source={`
    view Main {
      let name = 'World'

      function change() {
        name = 'Universe'
      }

      <h1>Hello {name}</h1>
      <button onClick={change}>Change!</button>
    }
  `} />

  <Text>We can even use regular javascript functions like Array.push</Text>

  <Code source={`
    view Main {
      let animals = []

      <h1>My animals are {animals.join(', ')}</h1>
      <button onClick={() => animals.push("cat")}>more cats</button>
      <button onClick={() => animals.push("dog")}>more dogs</button>
      <button onClick={() => animals.push("zebra")}>more zebras</button>
    }
  `} />

  <Text>You'll want to keep your views small and composable. You can use them together like so:</Text>

  <Code source={`
    view Main {
      <Hello to="World" size={18} />
    }

    view Hello {
      <h1>Hello {view.props.to}</h1>
      $h1 = { fontSize: view.props.size }
    }
  `} />

  <Text>Views must capitalize their first letter, and you can pass props to views just as we have shown here. Any property besides a string must be passed in using <code>{'{}'}</code>, as seen here with the size prop.</Text>

  <Text>"Props" are the attributes you pass down to children views. They are accessed with the <code>view.props.</code> prefix.</Text>

  <SubTitle>Namespacing</SubTitle>

  <Text>
    When your app is getting bigger, you'll probably want to avoid cluttering up your view names. You can name views with dots to bring more order:
  </Text>

  <Code source={`
    view Main {
      <Child.Button />
    }

    view Child.Button {
      <button />
    }
  `} />

  <SubTitle>Naming tags</SubTitle>

  <Text>Some final niceties of Motion. You can name your tags whatever you like:</Text>

  <Code source={`
    view Main {
      <greet>Hello World</greet>
      <sub>Show as h2, named greet</sub>

      $greet = { fontWeight: 'bold' }
    }
  `} />

  <Text>This helps with styling, avoiding using classes when unnecessary, and makes your view structure easier to understand.</Text>

  <SubTitle>Using Views</SubTitle>

  <Text>You don't need to import/export views between files! Motion prevents naming collisions with helpful warnings. Because your views are small pieces that should be easy to move around, this system avoid a lot of pain day to day, but even more down the road, where it makes moving around views in complex apps dramatically more easy.</Text>

  <SubTitle>View lifecycles</SubTitle>

  <Text>In React you have lifecycle methods. Motion has them too:</Text>

  <ul>
    <li>mount - called once after mounted in document</li>
    <li>unmount - called once before unmount</li>
    <li>props - called once before mount and once when new props come have come in</li>
    <li>change - called before every render</li>
    <li>render - called after every render</li>
  </ul>

  <Text>
    Pass each of these events a function and it will be called. The only event that passes in a value to its function is <code>on.props</code>, which gives you the current props for convenience (you may also still access <code>view.props</code> as well).
  </Text>

  <Text>
    Here's an excerpt from our header on the homepage of this site which simulates some typing being done. In the view we listen for the start prop and trigger an action based on that.
  </Text>

  <Code source={`
    view Tagline {
      let how = 'with ease'
      let started = false

      on.props(() => {
        if (view.props.start && !started) {
          started = true
          // start typing!
        }
      })

      <tagline>Web apps, {how}</tagline>
    }
  `} />

  <Text>
    Because <code>on.props</code> receives the props object, you could write the same thing using ES6 destructing:
  </Text>

  <Code source={`
    view Tagline {
      // destructure:
      on.props(({ start }) => {
        // and use as variable
        if (start && !started) {
          started = true
        }
      })
    }
  `} />

  <SubTitle>View events</SubTitle>

  <Text>Motion provides a smart event listener. It shims addEventListener much like jQuery <code>$().on()</code>, but works with views. It's optional, and very lightweight, but it avoid large amounts of hassle.</Text>

  <Code source={`
    view Hello {
      on.mount(() => {
        let spanWidth = view.refs.span.innerWidth
        console.log('spans width is', spanWidth)
      })

      <span ref="span">Hello world</span>
    }
  `} />

  <Text><code>on</code> works with views, automatically unbinding it's events when the view un-mounts.</Text>

  <Code source={`
    view Scroller {
      on.scroll(e => {
        // view scrolling
      })
    }
  `} />

  <Code source={`
    view WindowScroller {
      on.scroll(window, e => {
        // window scrolling
        // optional first agument for scope
      })
    }
  `} />

  <Text>Read more about on in our <Link to="/docs/events">events docs</Link>.</Text>

  <br />

  <Text><b>Note!</b> The next section contains more helpers that you can use inside views.</Text>

  <Next to='/docs/helpers'>Helpers</Next>
}