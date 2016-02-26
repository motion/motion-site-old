export const Docs.Events = () => $(
  <Title>Events</Title>
  <IntroText>
    Motion includes a simple helper to ease attaching and detaching events.
  </IntroText>

  <Text><strong>Without</strong> <code>on</code>, you'd need to write this:</Text>

  <Code source={`
    export const Main = () => $(
      let scrollListener

      on.mount(() => {
        scrollListener = view.refs.main.addEventListener('scroll', e => {
          // handle scrolling
        })
      })

      on.unmount(() => {
        view.refs.main.removeEventListener(scrollListener)
      })

      <main ref="main" />
    }
  `} />

  <Text>
    With the <code>on</code> function, you can write it like this:
  </Text>

  <Code source={`
    export const Main = () => $(
      on.scroll(() => {
        // thats it!
      })
    }
  `} />

  <Text>
    It simply listens for mount/unmount, and attaches/detaches the event.
  </Text>

  <Text>
    <code>on</code> is available anywhere in your app. It takes an optional first argument that lets you set the scope. Views automatically bind the scope to their root node, but let you redefine it:
  </Text>

  <Code source={`
    export const Main = () => $(
      on.scroll(window, (e) => {
        console.log(e.pageX)
      })
    }
  `} />

  <SubTitle>
    Using inside views
  </SubTitle>

  <Text>
    Using <code>on</code> with views is powerful. It's aware of views and attaches / detaches it's events with the view. By default, <code>on</code> in views attaches to the root node of the view.
  </Text>

  <Text>
    On also gives you access directly to the view lifecycle events. See the <Link to="/docs/views">views</Link> section for more docs on this, but you can access <code>mount</code>, <code>unmount</code>, <code>change</code>, <code>props</code>, and <code>render</code> within a view only.
  </Text>

  <SubTitle>
    Extra events
  </SubTitle>

  <Text>
    Equivalents of setTimeout, setInterval, and requestAnimationFrame are provided:
  </Text>

  <SubTitle>
    delay
  </SubTitle>

  <Code source={`
    export const Main = () => $(
      on.delay(1000, run) // after a second
    }
  `} />

  <SubTitle>
    every
  </SubTitle>

  <Code source={`
    export const Main = () => $(
      on.every(1000, run) // every second
    }
  `} />

  <SubTitle>
    frame
  </SubTitle>

  <Code source={`
    export const Main = () => $(
      on.frame(run) // every frame
    }
  `} />

  <SubTitle>
    Shorthand
  </SubTitle>

  <Text>
    DOM level 2 events, and Motion provided events listed on this page, are provided in a helpful shorthand that avoids passing around strings:
  </Text>

  <Code source={`
    export const Main = () => $(
      on.mount(run)
      on.click(run)
      on.delay(500, run)

      function run(e) {
        console.log('received event', e)
      }
    }
  `} />

  <SubTitle>
    Custom events
  </SubTitle>

  <Text>
    Warning! Custom events are great, but should be used sparingly. For larger apps, you'll want to check out patterns like Flux, Redux, or Observables to manage complex state.
  </Text>

  <Text>
    Because <code>on</code> is just a lightweight wrapper around addEventListener that is smart about views we've added an <code>on.event</code> interface that gives you access to custom events.
    Here's an example:
  </Text>

  <Code source={`
    export const Main = () => $(
      // listen for 'child:ran'
      on.event('child:ran', (data) => {
        console.log('received event from child, with data', data.local)
      })

      <Child />
    }

    export const Child = () => $(
      let local = 'hello'

      // delay 1 second, then send event
      on.delay(1000, () => {
        on.event('child:ran', { local }) // send event with no callback argument
      })
    }
  `} />

  <Text>
    By default, custom events are attached to the window. You can attach them to your view, or to any DOM node, by passing in an element as the first argument.
  </Text>

  <SubTitle>
    Event List
  </SubTitle>

  <Text>
    You can access the following events (matching the DOM Level 2 events list) directly from <code>on</code>:
  </Text>

  <Text>
    <ul>
      <li>click</li>
      <li>mousedown</li>
      <li>mouseenter</li>
      <li>mouseleave</li>
      <li>mousemove</li>
      <li>mouseover</li>
      <li>mouseout</li>
      <li>mouseup</li>
      <li>touchdown</li>
      <li>touchenter</li>
      <li>touchleave</li>
      <li>touchmove</li>
      <li>touchout</li>
      <li>touchup</li>
      <li>keydown</li>
      <li>keypress</li>
      <li>keyup</li>
      <li>abort</li>
      <li>beforeunload</li>
      <li>error</li>
      <li>load</li>
      <li>resize</li>
      <li>scroll</li>
      <li>unload</li>
      <li>blur</li>
      <li>change</li>
      <li>focus</li>
      <li>reset</li>
      <li>select</li>
      <li>submit</li>
    </ul>
  </Text>


  <Next to='/docs/routes'>Routes</Next>
}