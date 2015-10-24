view Docs.Views {
  <Title big>Views</Title>
  <Body>
    <IntroText>Flint is based entirely on ES6 JavaScript with slight modifications for simplicity and clarity. By using a custom compiler, we remove the framework layer.</IntroText>

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

    <Title three>Lots of Views</Title>
    <p>
      When your app is getting bigger, you'll probably want to avoid cluttering up your view names. We are experimenting with a: <code>Parent.SubView</code> syntax, that is enabled at the moment.
      This will make <code>&gt;SubView /&lt;</code> available to the Parent you named, but only to that parent.
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
    <p>This helps with styling, avoiding using classes when unnecessary, and makes your view structure easier to read. No more hundreds of meaningless divs!</p>

    <Title two id="view-jsx-extensions">View JSX extensions</Title>
    <p>Flint does provide some helpers that are optional. They are:</p>
    <p><strong>repeat</strong></p>
    <Code source={`
      view Main {
        let shows = [
          { name: 'flintstones' },
          { name: 'jetsons' },
        ]

        const addShow = () =>
          shows.push({ name: 'breaking bad' })

        <shows repeat={shows}>{_.name}</shows>
        <button onClick={addShow}>add one</button>
      }
    `} />
    <p><strong>if</strong></p>
    <Code source={`
      view Main {
        let greenlight = true

        <light>{greenlight ? "green light" : "red light"}</light>
        <car if={greenlight}>zoom zoom zoom!</car>
        <car if={!greenlight}>brake!</car>
        <button onClick={() => greenlight = !greenlight}>toggle</button>
      }
    `} />
    <p><strong>sync</strong> and <strong>onEnter</strong></p>
    <Code source={`
      view Question {
        let response = ''

        const submit = e => post(e.target.value)

        <input sync={response} onEnter={submit} />
      }
    `} />

    <Title id="using-views">Using Views</Title>
    <p>You don't need to import/export views between files!</p>
    <p>Flint gives you helpful errors when you define a view twice. All together, you get big upside for all these reasons.</p>
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
    <p>Flint provides a smart event listener. It shims addEventListener much like jQuery <code>$().on()</code>, but works with views.</p>
    <Code source={`
      view Main {
        on('mount', () => {
          const width = view.refs.span.innerWidth
        })

        <span ref="span">Hello world</span>
      }
    `} />
    <Title id="accessing-dom-nodes">Accessing DOM nodes</Title>
    <p>Sometimes you need to access nodes in the DOM.</p>
    <Code source={`
      view Main {
        let wide;

        on('mount').then(() => {
          wide = view.refs.span.innerWidth
        })

        <span ref="span">I am {wide}</span>
      }
    `} />
    <Title id="view-methods">View methods</Title>
    <p>When inside a view, you can access <code>view</code> to do a variety of things.</p>
    <Title id="-refs-"><code>.refs</code></Title>
    <Code source={`
      view Button {
        on('mount', () => {
          view.refs.button.focus()
        })

        <button ref="button">Hello</button>
      }
    `} />
    <Title id="-mixin-"><code>.mixin()</code></Title>
    <p><em>Disabled!</em> We are working towards a nice way of using mixins. Open an issue if you have a proposal!</p>
    <Title id="-childcontext-context-object-"><code>.childContext(context : object)</code></Title>
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

    <Title id="-pause-"><code>.pause()</code></Title>
    <p>Prevent re-rendering. Useful for optimization and batching visual changes.</p>

    <Title id="-resume-"><code>.resume()</code></Title>
    <p>Resume from paused re-rendering.</p>

    <Title id="-pause-"><code>.update()</code></Title>
    <p>Forces view to re-render.</p>

    <Title id="-props-"><code>.props</code></Title>
    <p>Access the entire props object with <code>view.props</code>.</p>

    <Title id="-name-"><code>.name</code></Title>
    <p>Access the name of the view.</p>

    <Title id="-el-name-string-"><code>.el(name : string)</code></Title>
    <p>Programatically render a view. Pass in a view name to <code>view.el()</code> and it will render.</p>

    <Next to='/docs/styles'>Styles</Next>
  </Body>
}