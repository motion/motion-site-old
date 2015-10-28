view Docs.Elements {
  <Title big>Elements</Title>
  <Body>
    <Text big>
      Flint uses JSX, with a couple optional helpers.
    </Text>

    <Text>
      You may also name your elements however you'd like. Avoid writing hundreds of meaningless <code>div</code>s and just write what your tag actually represents! Lowercase tags are scoped to the current view, and are unstyled except for browser defaults, while capitalized tags reference other views.
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

    <Title small>yield</Title>

    <Text>
      Yield passes all props given to the view through to a tag.
    </Text>

    <Code source={`
      view DecoratedButton {
        <button yield />

        $button = { fontWeight: 600 }
      }
    `} />

    <Title id="accessing-dom-nodes">Accessing DOM nodes (refs)</Title>
    <p>Sometimes you need to access nodes in the DOM.</p>
    <Code source={`
      view Main {
        let wide

        on('mount', () => {
          wide = view.refs.span.innerWidth
        })

        <span ref="span">I am {wide}</span>
      }
    `} />

    <Next to='/docs/styles'>Styles</Next>
  </Body>
}