const contents = `
The final thing to understand about views are styles. Styles are written in JavaScript, which makes creating dynamic styles easy. We designate a style with $.

    view Main {
      <h1>Hello World</h1>

      $h1 = { color: 'green' }
    }

When your view changes, your styles recalculate as needed. You may be wondering, what if I want to style two of the same tag differently?

For one, you can style classes:

    view Main {
      <h1>Hello World</h1>
      <h1 class="ask">How are you?</h1>

      $h1 = { color: 'green' }
      $.ask = { color: 'blue' }
    }

Styles are also dynamic, and can access variables in the view just like you'd expect:

    view Main {
      let color = 'red'

      <h1>Hello World</h1>
      <button onClick={() => color = 'green'}>
        Change to green
      </button>

      $h1 = { color } // es6 shorthand for { color: color }
    }

#### Advanced styling

Flint optimizes your styles behind the scenes. We use a parser to extract your static styles into a separate object. We're working on having those styles exctract fully into CSS, along with other upgrades as we go.

**Share styles** between tags with ease using arrays:

    view Main {
      <greet>Hello World</greet>
      <sub>Show as h2, named greet</sub>

      const shared = {
        background: 'red'
      }

      $greet = [shared, { fontWeight: 'bold' }]
      $sub = shared
    }

**Style repeats** with _index:

    view Main {
      <greet repeat={['hi', 'hello']}>
        {_}
      </greet>

      $greet = {
        fontWeight: _index % 2 ? 'bold' : 'normal'
      }
    }

(We're working on a patch that makes this slightly less magical)

#### Styling sub-views

You can also style the Child view wrapper:

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
`

view Docs.Styles {
  <Title>Flint</Title>
  <Body markdown={contents} />
}