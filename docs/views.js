const contents = `
Flint is based entirely on ES6 JavaScript with slight modifications for simplicity and clarity. By using a custom compiler, we remove the framework layer.

## Views

Here is a view:

    view Main {
      <h1>Hello world</h1>
    }


A view can contain variables and constants:

    view Main {
      let name = 'Nate'

      <h1>Hello {name}</h1>
    }

When you change a variable, your view will update:

    view Main {
      let name = 'Nate'

      <h1>Hello {name}</h1>
      <button onClick={() => name = 'Nick'}>
        Change name to Nick
      </button>
    }

Since it's just ES6, we can use a named function and call it.

    view Main {
      let name = 'Nate'

      const changeName = () =>
        name = 'Nick'

      <h1>Hello {name}</h1>
      <button onClick={changeName}>Change!</button>
    }

We can even use regular javascript functions like Array.push

    view Main {
      let animals = []

      <h1>My animals are {animals.join(', ')}</h1>
      <button onClick={() => animals.push("cat")}>more cats</button>
      <button onClick={() => animals.push("dog")}>more dogs</button>
      <button onClick={() => animals.push("zebra")}>more zebras</button>
    }


You'll want to keep your views small and composable. You can use them together like so:

    view Main {
      <Hello to="World" size={18} />
    }

    view Hello {
      <h1>Hello {^to}</h1>
      $h1 = { fontSize: ^size }
    }

Views must capitalize their first letter, and you can pass props to views just as we have shown here. Any property besides a string must be passed in using \`{}\`, as seen here with the size prop.

"Props" are the attributes you pass down to children views. They are accessed with the \`^\` prefix.

Some final niceties of Flint. You can name your tags whatever you like:

    view Main {
      <greet>Hello World</greet>
      <sub>Show as h2, named greet</sub>

      $greet = { fontWeight: 'bold' }
    }

This helps with styling, avoiding using classes when unnecessary, and makes your view structure easier to read. No more hundreds of meaningless divs!

### View JSX extensions
Flint does provide some helpers that are optional. They are:

**repeat**

    view Main {
      let shows = [
        { name: 'flintstones', says: 'yabadabadoo' },
        { name: 'jetsons', says: 'meet the jetsons!' },
      ]

      const addShow = () => shows.push({ name: 'breaking bad', says: 'i am the one who knocks' })

      <shows repeat={shows}>{_.name} says {_.says}</shows>
      <button onClick={addShow}>add one</button>

      // current item in repeat is "_"
      // current index is "_index"
    }

**if**

    view Main {
      let greenlight = true

      <light>{greenlight ? "green light" : "red light"}</light>
      <car if={greenlight}>zoom zoom zoom!</car>
      <car if={!greenlight}>brake!</car>
      <button onClick={() => greenlight = !greenlight}>toggle</button>
    }

**sync** and **onEnter**

    view Question {
      let response = ''

      const submit = e => post(e.target.value)

      <input sync={response} onEnter={submit} />
    }

## Using Views

You don't need to import/export views between files!

In other words: views are global (cue gasps of horror!). Why?? Well, because views are *not mutable*. And given that it's incredibly important they are easy to create/destroy/change, the upsides are huge.

import/export is wonderful for keeping your code organized and namespaced. In the context of views though, it is lacking. Oftentimes you import many views into one file. Or you want to test a new view quickly.

Flint gives you helpful errors when you define a view twice. You can also name views like \`My.View\`, with namespaces. All together, you get big upside for all these reasons (a side benefit is the extreme speed gains you gain in compilation!).

## View lifecycles

In React you have lifecycle methods. Flint has them too:

- mount - called once after mounted in document
- unmount - called once before unmount
- props - called whenever props change
- change - called before every render
- render - called after every render

See how to use it here:


## View events

Flint provides a smart event listener. It shims addEventListener much like jQuery \`$().on()\`, but works with views.

  view Main {
    on('mount', () => {
      const width = view.refs.span.innerWidth
    })

    <span ref="span">Hello world</span>
  }

## Accessing DOM nodes

Sometimes you need to access nodes in the DOM.

  view Main {
    let wide;

    on('mount').then(() => {
      wide = view.refs.span.innerWidth
    })

    <span ref="span">I am {wide}</span>
  }

## View methods

When inside a view, you can access \`view\` to do a variety of things.

#### \`.refs\`

    view Button {
      on('mount', () => {
        view.refs.button.focus()
      })

      <button ref="button">Hello</button>
    }

#### \`.mixin()\`

*Disabled!* We are working towards a nice way of using mixins. Open an issue if you have a proposal!


#### \`.childContext(context : object)\`

*Alpha* This should work, but it's very much for testing at the moment. You can provide context to children like so:

    view Main {
      view.childContext({
        componentStyle: {
          primaryColor: '#FFC107'
        }
      })

      <Button>Click me</Button>
    }

#### \`.pause()\`

Prevent re-rendering. Useful for optimization and batching visual changes.

#### \`.resume()\`

Resume from paused re-rendering.

#### \`.props\`

Access the entire props object with \`view.props\`.

#### \`.name\`

Access the name of the view.

#### \`.el(name : string)\`

Programatically render a view. Pass in a view name to \`view.el()\` and it will render.
`

view Docs.Views {
  <Title>Flint</Title>
  <Body markdown={contents} />
}