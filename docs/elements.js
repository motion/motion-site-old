view Docs.Elements {
  <Title big>Elements</Title>
  <Body>
    <Text big>
      Flint uses JSX, with a couple optional helpers.
    </Text>

    <Title small>repeat</Title>
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

    <Text>
      Repeat compiles to a map function behind the scenes.
      You can also pass in a number to repeat, to do a simple loop.
    </Text>

    <Title small>if</Title>
    <Code source={`
      view Main {
        let greenlight = true

        <light>{greenlight ? "green light" : "red light"}</light>
        <car if={greenlight}>zoom zoom zoom!</car>
        <car if={!greenlight}>brake!</car>
        <button onClick={() => greenlight = !greenlight}>toggle</button>
      }
    `} />

    <Text>
      If compiles to an if statement behind the scenes.
    </Text>

    <Title small>sync and onEnter</Title>
    <Code source={`
      view Question {
        let response = ''

        const submit = e => post(e.target.value)

        <input sync={response} onEnter={submit} />
      }
    `} />

    <Text>
      Sync will update a variable whenever you type a character.
      OnEnter a simple helper that just calls a function when a user
      hits the enter key in the input.
    </Text>

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

    <Title small>.refs</Title>
    <Code source={`
      view Button {
        on('mount', () => {
          view.refs.button.focus()
        })

        <button ref="button">Hello</button>
      }
    `} />

    <Next to='/docs/styles'>Styles</Next>
  </Body>
}