view Docs.Events {
  <Title>Events</Title>
  <IntroText>
    Flint includes a simple helper to ease attaching and detaching events.
  </IntroText>

  <Text><strong>Without</strong> <code>on</code>, you'd need to write this:</Text>

  <Code source={`
    view Main {
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
    view Main {
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
    view Main {
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
    view Main {
      on.delay(1000, run) // after a second
    }
  `} />

  <SubTitle>
    every
  </SubTitle>

  <Code source={`
    view Main {
      on.every(1000, run) // every second
    }
  `} />

  <SubTitle>
    frame
  </SubTitle>

  <Code source={`
    view Main {
      on.frame(run) // every frame
    }
  `} />

  <SubTitle>
    Shorthand
  </SubTitle>

  <Text>
    DOM level 2 events, and Flint provided events listed on this page, are provided in a helpful shorthand that avoids passing around strings:
  </Text>

  <Code source={`
    view Main {
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
  </Text>

  <Code source={`
    view Main {
      // listen for 'child:ran'
      on.event('child:ran', () => {
        console.log('received event from child')
      })

      <Child />
    }

    view Child {
      // delay 1 second, then send event
      on.delay(1000, () => {
        on.event('child:ran') // send event with no callback argument
      })
    }
  `} />

  <Text>
    By default, custom events are attached to the window. You can attach them to your view, or to any DOM node, by passing in an element as the first argument:
  </Text>


  <Next to='/docs/routes'>Routes</Next>
}