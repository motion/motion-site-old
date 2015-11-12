view Docs.Elements {
  <Title big>Elements</Title>
  <Body>
    <Text big>
      Flint uses JSX, with a couple optional helpers.
    </Text>

    <Text>
      You may also name your elements however you'd like. Avoid writing hundreds of meaningless <code>div</code>s and just write what your tag actually represents! Lowercase tags are scoped to the current view, and are unstyled except for browser defaults, while capitalized tags reference other views. Flint has some other minor modifications.
    </Text>

    <ul>
      <li>Use attributes React-style or HTML-style, <code>class</code> as well as <code>className</code>.</li>
      <li><code>class</code> accepts an object of <code>{`{ className: bool }`}</code> to set multiple classes, or an array</li>
      <li><code>style</code> attribute accepts arrays/objects</li>
    </ul>

    <Title small>{'<tag repeat={array | num} />'}</Title>
    <Code source={`
      view Main {
        let shows = [
          { name: 'flintstones' },
          { name: 'jetsons' },
        ]

        const addShow = () =>
          shows.push({ name: 'breaking bad' })

        <shows repeat={shows}>
          {_.name}
        </shows>
        <button onClick={addShow}>add one</button>
      }
    `} />

    <Text>
      Repeat compiles to a map function behind the scenes.
      You can also pass in a number to repeat, to do a simple loop.
      Repeats also instantiate an `_index` variable for the current index
      in the list.
    </Text>

    <Title small>{'<tag if={any} />'}</Title>
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

    <Title small>{'<tag sync={identifier} onEnter={function} />'}</Title>
    <Code source={`
      view Question {
        let response = ''

        function submit (e) {
          console.log(e.target.value)
        }

        <input sync={response} onEnter={submit} />
      }
    `} />

    <Text>
      Sync will update a variable whenever you type a character.
      OnEnter a simple helper that just calls a function when a user
      hits the enter key in the input.
    </Text>

    <Title small>{'<tag yield />'}</Title>

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

        on.mount(() => {
          wide = view.refs.span.innerWidth
        })

        <span ref="span">I am {wide}</span>
      }
    `} />

    <Next to='/docs/styles'>Styles</Next>
  </Body>
}