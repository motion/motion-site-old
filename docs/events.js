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

        <main />
      }
    `} />

    <Text>
      On simply listens for mount/unmount, and attaches and detaches it's event.
    </Text>

    <Text>
      <code>on</code> is available anywhere in your app. It takes an optional first argument that lets you set the scope. Views automatically bind the scope to their root node, but let you redefine it:
    </Text>

    <Code source={`
      view Main {
        on(window, 'scroll', () => {
          // listen to window scroll
        })

        <main />
      }
    `} />

    <Next to='/docs/routes'>Routes</Next>
  </Body>
}