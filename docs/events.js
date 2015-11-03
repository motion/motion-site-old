view Docs.Events {
  <Title big>Events</Title>
  <Body>
    <Text big>
      Flint includes a simple helper to ease attaching and detaching events.
    </Text>

    <Text><strong>Without</strong> <code>on</code>, you'd need to write this:</Text>

    <Code source={`
      view Main {
        let scrollListener

        on('mount', () => {
          scrollListener = view.refs.main.addEventListener('scroll', e => {
            // handle scrolling
          })
        })

        on('unmount', () => {
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
        on('scroll', () => {
          // thats it!
        })
      }
    `} />

    <Text>
      It simply listens for mount/unmount, and attaches and detaches it's event.
    </Text>

    <Text>
      <code>on</code> is available anywhere in your app. It takes an optional first argument that lets you set the scope. Views automatically bind the scope to their root node, but let you redefine it:
    </Text>

    <Code source={`
      view Main {
        on(window, 'scroll', (e) => {
          console.log(e.pageX)
        })
      }
    `} />

    <Title small>
      Using on inside views
    </Title>

    <Text>
      See the views section for more docs on this, but you can access <code>mount</code>, <code>unmount</code>, <code>change</code>, <code>props</code>, and <code>render</code>.
    </Text>

    <Title small>
      Extras
    </Title>

    <Text>
      On also provides you with helpers for working with timeouts, intervals, and frames:
    </Text>

    <Code source={`
      view Main {
        on('delay', 1000, () => {
          // after a second
        })
      }
    `} />

    <Code source={`
      view Main {
        on('every', 1000, () => {
          // every second
        })
      }
    `} />

    <Code source={`
      view Main {
        on('frame', () => {
          // every frame
        })
      }
    `} />

    <Next to='/docs/routes'>Routes</Next>
  </Body>
}