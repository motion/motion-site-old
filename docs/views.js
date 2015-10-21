view Docs.Views {
  <Title>Flint</Title>
  <Body>
    <p>Flint is based entirely on ES6 JavaScript with slight modifications for simplicity and clarity. By using a custom compiler, we remove the framework layer.</p>
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
    <p>Some final niceties of Flint. You can name your tags whatever you like:</p>
    <Code source={`
      view Main {
        <greet>Hello World</greet>
        <sub>Show as h2, named greet</sub>

        $greet = { fontWeight: 'bold' }
      }
    `} />
    <p>This helps with styling, avoiding using classes when unnecessary, and makes your view structure easier to read. No more hundreds of meaningless divs!</p>
    <h3 id="view-jsx-extensions">View JSX extensions</h3>
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
    <h2 id="using-views">Using Views</h2>
    <p>You don't need to import/export views between files!</p>
    <p>In other words: views are global (cue gasps of horror!). Why?? Well, because views are <em>not mutable</em>. And given that it's incredibly important they are easy to create/destroy/change, the upsides are huge.</p>
    <p>import/export is wonderful for keeping your code organized and namespaced. In the context of views though, it is lacking. Oftentimes you import many views into one file. Or you want to test a new view quickly.</p>
    <p>Flint gives you helpful errors when you define a view twice. You can also name views like <code>My.View</code>, with namespaces. All together, you get big upside for all these reasons (a side benefit is the extreme speed gains you gain in compilation!).</p>
    <h2 id="view-lifecycles">View lifecycles</h2>
    <p>In React you have lifecycle methods. Flint has them too:</p>
    <ul>
    <li>mount - called once after mounted in document</li>
    <li>unmount - called once before unmount</li>
    <li>props - called whenever props change</li>
    <li>change - called before every render</li>
    <li>render - called after every render</li>
    </ul>
    <p>See how to use it here:</p>
    <h2 id="view-events">View events</h2>
    <p>Flint provides a smart event listener. It shims addEventListener much like jQuery <code>$().on()</code>, but works with views.</p>
    <Code source={`
      view Main {
        on('mount', () => {
          const width = view.refs.span.innerWidth
        })

        <span ref="span">Hello world</span>
      }
    `} />
    <h2 id="accessing-dom-nodes">Accessing DOM nodes</h2>
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
    <h2 id="view-methods">View methods</h2>
    <p>When inside a view, you can access <code>view</code> to do a variety of things.</p>
    <h4 id="-refs-"><code>.refs</code></h4>
    <Code source={`
      view Button {
        on('mount', () => {
          view.refs.button.focus()
        })

        <button ref="button">Hello</button>
      }
    `} />
    <h4 id="-mixin-"><code>.mixin()</code></h4>
    <p><em>Disabled!</em> We are working towards a nice way of using mixins. Open an issue if you have a proposal!</p>
    <h4 id="-childcontext-context-object-"><code>.childContext(context : object)</code></h4>
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
    <h4 id="-pause-"><code>.pause()</code></h4>
    <p>Prevent re-rendering. Useful for optimization and batching visual changes.</p>
    <h4 id="-resume-"><code>.resume()</code></h4>
    <p>Resume from paused re-rendering.</p>
    <h4 id="-props-"><code>.props</code></h4>
    <p>Access the entire props object with <code>view.props</code>.</p>
    <h4 id="-name-"><code>.name</code></h4>
    <p>Access the name of the view.</p>
    <h4 id="-el-name-string-"><code>.el(name : string)</code></h4>
    <p>Programatically render a view. Pass in a view name to <code>view.el()</code> and it will render.</p>
  </Body>
}