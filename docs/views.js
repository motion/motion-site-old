view Docs.Views {
  <Title big>Views</Title>
  <Body>
    <Text big>Flint is based entirely on ES6 JavaScript with slight modifications for simplicity and clarity. By using a custom compiler, we remove the framework layer.</Text>

    <p>Here is a view:</p>

    <Code source={`
      view Main {
        <h1>Hello world</h1>
      }
    `} />

    <p>A view can contain variables and constants:</p>

    <Code source={`
      view Main {
        let name = 'Nate'

        <h1>Hello {name}</h1>
      }
    `} />

    <p>When you change a variable, your view will update:</p>

    <Code source={`
      view Main {
        let name = 'Nate'

        <h1>Hello {name}</h1>
        <button onClick={() => name = 'Nick'}>
          Change name to Nick
        </button>
      }
    `} />

    <p>Since it's just ES6, we can use a named function and call it.</p>

    <Code source={`
      view Main {
        let name = 'Nate'

        const changeName = () =>
          name = 'Nick'

        <h1>Hello {name}</h1>
        <button onClick={changeName}>Change!</button>
      }
    `} />

    <p>We can even use regular javascript functions like Array.push</p>

    <Code source={`
      view Main {
        let animals = []

        <h1>My animals are {animals.join(', ')}</h1>
        <button onClick={() => animals.push("cat")}>more cats</button>
        <button onClick={() => animals.push("dog")}>more dogs</button>
        <button onClick={() => animals.push("zebra")}>more zebras</button>
      }
    `} />

    <p>You'll want to keep your views small and composable. You can use them together like so:</p>

    <Code source={`
      view Main {
        <Hello to="World" size={18} />
      }

      view Hello {
        <h1>Hello {^to}</h1>
        $h1 = { fontSize: ^size }
      }
    `} />

    <p>Views must capitalize their first letter, and you can pass props to views just as we have shown here. Any property besides a string must be passed in using <code>{}</code>, as seen here with the size prop.</p>

    <p>"Props" are the attributes you pass down to children views. They are accessed with the <code>view.props.</code> prefix.</p>

    <Title three>Namespacing</Title>
    <p>
      When your app is getting bigger, you'll probably want to avoid cluttering up your view names. You can name views with dots to bring more order:

      <Code source={`
        view Main {
          <Child.Button />
        }

        view Child.Button {
          <button />
        }
      `} />
    </p>

    <Title three>Naming tags</Title>

    <p>Some final niceties of Flint. You can name your tags whatever you like:</p>

    <Code source={`
      view Main {
        <greet>Hello World</greet>
        <sub>Show as h2, named greet</sub>

        $greet = { fontWeight: 'bold' }
      }
    `} />

    <p>This helps with styling, avoiding using classes when unnecessary, and makes your view structure easier to understand.</p>

    <Title id="using-views">Using Views</Title>
    <p>You don't need to import/export views between files! Flint prevents naming collisions with helpful warnings. Because your views are small pieces that should be easy to move around, this system avoid a lot of pain day to day, but even more down the road, where it makes moving around views in complex apps dramatically more easy.</p>

    <Title id="view-lifecycles">View lifecycles</Title>
    <p>In React you have lifecycle methods. Flint has them too:</p>
    <ul>
    <li>mount - called once after mounted in document</li>
    <li>unmount - called once before unmount</li>
    <li>props - called whenever props change</li>
    <li>change - called before every render</li>
    <li>render - called after every render</li>
    </ul>
    <p>See how to use it here:</p>

    <Title id="view-events">View events</Title>
    <p>Flint provides a smart event listener. It shims addEventListener much like jQuery <code>$().on()</code>, but works with views. It's optional, and lightweight (under 15 lines of code), but it avoid large amounts of hassle.</p>


    <Code source={`
      view Hello {
        on('mount', () => {
          const width = view.refs.span.innerWidth
        })

        <span ref="span">Hello world</span>
      }
    `} />

    <p><code>on</code> works with views, automatically unbinding it's events when the view un-mounts.</p>

    <Code source={`
      view Scroller {
        on('scroll', e => {
          // view scrolling
        })
      }
    `} />

    <Code source={`
      view WindowScroller {
        on(window, 'scroll', e => {
          // window scrolling
          // optional first agument for scope
        })
      }
    `} />

    <Title id="view-methods">View methods</Title>
    <p>When inside a view, you can access <code>view</code> to do a variety of things.</p>

    <Title small>.refs</Title>
    <Code source={`
      view Button {
        on('mount', () => {
          view.refs.button.focus()
        })

        <button ref="button">Hello</button>
      }
    `} />

    <Title small>.mixin()</Title>
    <p><em>Disabled!</em> We are working towards a nice way of using mixins. Open an issue if you have a proposal!</p>


    <Title small>.pause()</Title>
    <p>Prevent re-rendering. Useful for optimization and batching visual changes.</p>

    <Title small>.resume()</Title>
    <p>Resume from paused re-rendering.</p>

    <Title small>.update()</Title>
    <p>Forces view to re-render.</p>

    <Title small>.props</Title>
    <p>Access the entire props object with <code>view.props</code>.</p>

    <Title small>.name</Title>
    <p>Access the name of the view.</p>

    <Title small>.el(name : string)</Title>
    <p>Programatically render a view. Pass in a view name to <code>view.el()</code> and it will render.</p>

    <Title small>.childContext(context : object)</Title>
    <p><em>Alpha</em> This should work, but it's very much for testing at the moment. You can provide context to children like so:</p>
    <Code source={`
      view Main {
        view.childContext({
          componentStyle: {
            primaryColor: '#FFC107'
          }
        })

        <Button>Click me</Button>
      }
    `} />

    <Next to='/docs/elements'>Elements</Next>
  </Body>
}