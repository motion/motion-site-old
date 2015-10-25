view Docs.Elements {
  <Title big>Elements</Title>
  <Body>
    <Text big>Flint uses JSX, with a couple small tweaks.</Text>

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

    <Title small>sync and onEnter</Title>
    <Code source={`
      view Question {
        let response = ''

        const submit = e => post(e.target.value)

        <input sync={response} onEnter={submit} />
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