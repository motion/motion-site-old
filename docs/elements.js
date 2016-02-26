export const Docs.Elements = () => $(
  <Title>Elements</Title>
  <IntroText>
    Motion uses JSX, with a couple optional helpers.
  </IntroText>

  <Text>
    You may also name your elements however you'd like. Avoid writing hundreds of meaningless <code>div</code>s and just write what your tag actually represents! Lowercase tags are scoped to the current view, and are unstyled except for browser defaults, while capitalized tags reference other views. Motion has some other minor modifications.
  </Text>

  <Code source={`
    export const Main = () => $(
      <shows class={{ active: true }}>
        <show class="active">
          <name>Breaking bad</name>
        </show>
      </shows>
    }
  `} />

  <ul>
    <li>Use attributes React-style or HTML-style, <code>class</code> as well as <code>className</code>.</li>
    <li><code>class</code> accepts an object of <code>{`{ className: bool }`}</code> to set multiple classes, or an array</li>
  </ul>

  <SubTitle>{'<tag repeat={array | num} />'}</SubTitle>
  <Code source={`
    export const Main = () => $(
      let shows = [
        { name: 'motionstones' },
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

  <SubTitle>{'<tag if={any} />'}</SubTitle>
  <Code source={`
    export const Main = () => $(
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

  <SubTitle>{'<tag sync={identifier} onEnter={function} />'}</SubTitle>
  <Code source={`
    export const Question = () => $(
      let response = ''

      function submit(e) {
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

  <SubTitle>{'<tag yield />'}</SubTitle>

  <Text>
    Yield passes all props given to the view through to a tag. It also smartly merges classnames and styles for you.
  </Text>

  <Code source={`
    export const DecoratedButton = () => $(
      <button yield />

      button: {
        fontWeight: 600
      }
    }
  `} />

  <SubTitle>{'<tag tagName="a" />'}</SubTitle>

  <Text>
    Tagname gives you access to programatically control the final output of the element in DOM.
    Tags will pick up any styles that target their tagName. This is also helpful with <code>yield</code>,
    which would then make the yielded element inherit the tagName from <code>view.props</code>.
  </Text>

  <SubTitle>Accessing DOM nodes (refs)</SubTitle>
  <p>Sometimes you need to access nodes in the DOM.</p>
  <Code source={`
    export const Main = () => $(
      let wide

      on.mount(() => {
        wide = view.refs.span.innerWidth
      })

      <span ref="span">I am {wide}</span>
    }
  `} />

  <SubTitle>Cloning Elements</SubTitle>
  <p>Clone an element with new props, like React.cloneElement:</p>

  <Code source={`
    export const PassThrough = () => $(
      <child repeat={view.props.children}>
        {view.clone(_, { newProp: true })}
      </child>
    }
  `} />

  <Next to='/docs/styles'>Styles</Next>
}