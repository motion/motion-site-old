view Docs.Styles {
  <Title>Styles</Title>
  <Body>
    <IntroText>The final thing to understand about views are styles. Styles are written in JavaScript, which makes creating dynamic styles easy. We designate a style with $.</IntroText>

    <Code source={`
      view Main {
        <h1>Hello World</h1>

        $h1 = { color: 'green' }
      }
    `} />

    <p>When your view changes, your styles recalculate as needed. You may be wondering, what if I want to style two of the same tag differently?</p>

    <p>For one, you can style classes:</p>

    <Code source={`
      view Main {
        <h1>Hello World</h1>
        <h1 class="ask">How are you?</h1>

        $h1 = { color: 'green' }
        $.ask = { color: 'blue' }
      }
    `} />

    <p>Styles are also dynamic, and can access variables in the view just like you'd expect:</p>

    <Code source={`
      view Main {
        let color = 'red'

        <h1>Hello World</h1>
        <button onClick={() => color = 'green'}>
          Change to green
        </button>

        $h1 = { color } // es6 shorthand for { color: color }
      }
    `} />

    <h4>Advanced styling</h4>

    <p>Flint optimizes your styles behind the scenes. We use a parser to extract your static styles into a separate object. We're working on having those styles exctract fully into CSS, along with other upgrades as we go.</p>

    <p><b>Share styles</b> between tags with ease using arrays:</p>

    <Code source={`
      view Main {
        <greet>Hello World</greet>
        <sub>Show as h2, named greet</sub>

        const shared = {
          background: 'red'
        }

        $greet = [shared, { fontWeight: 'bold' }]
        $sub = shared
      }
    `} />

    <p>Style repeats with _index:</p>

    <Code source={`
      view Main {
        <greet repeat={['hi', 'hello']}>
          {_}
        </greet>

        $greet = {
          fontWeight: _index % 2 ? 'bold' : 'normal'
        }
      }
    `} />

    <h4>Styling sub-views</h4>

    <p>You can also style the Child view wrapper:</p>

    <Code source={`
      view Parent {
        // child will back a red background
        <Child />

        $Child = {
          background: 'red'
        }
      }

      view Child {
        <h1>Hello</h1>

        $ = {
          background: 'yellow'
        }
      }
    `} />
    <Next to='/docs/routes'>Routes</Next>
  </Body>
}