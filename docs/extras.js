const contents = `
# Differences from 'Vanilla'

Flint's build system is custom and based on Babel with Stage 2 enabled.

Beyond the view macro and it's corresponding syntax, it is very much just ES6 JavaScript. We've made some small changes though to optimize for common use cases and have shimmed a few helpful modules.

## ES2015 and...
- Promise - [Bluebird promises](https://github.com/petkaantonov/bluebird/blob/master/API.md) are the default "Promise" implementation.
- fetch - [isomorphic fetch](https://github.com/matthew-andrews/isomorphic-fetch) has been provided
- fetchJSON - fetch.then(res => res.json())
- on - Smart view-friendly event handler, see documentation below.
- view - Only inside of views, provides access to helpers and information on the view

### on

\`on\` is our small function for smartly binding events. If used inside of a view, it automatically binds/unbinds events on mount/unmount. You can attach it to a scope, by default it attaches to \`window\` outside of views, and \`view\` inside of views.

Outside of a view you could use it to listen for scrolling:

    on('scroll', () => console.log('scrolling'))

Inside a view you can use it for view events:

    view Button {
      on('mount', () => {
        // do stuff to live mounted DOM nodes
      })
    }

## React and...

React has been enhanced in a few ways. In JSX:

 - Use attribute \`class\` as well as \`className\`.
 - \`class\` accepts an object of \`{ className: bool }\` to set multiple classes
 - \`style\` attribute accepts arrays/objects

## Constants / globals

You can export global constants! Why would you want this? Frontend apps are not backend apps. Most developers don't use IDE's. We share styles, fonts, colors, screen sizes and routes across huge amounts of files. We need a system that allows this in a *safe* way.

What makes globals typically undesirable?

- Where are they defined?
- What is their value at this time?

If we can solve these two things, we can have gain huge amounts of productivity without the typical downsides. We need to know **where they are defined** and ensure that **they never change**. If we always know where and what they are, we are good!

### Globals only come from main.js

Main.js is guaranteed to be loaded first in your app. This is the only file that is ever treated "specially", much like how the Main view is always your entry point. Since you will never import your main file (because it is your entry point) we've purposed it as your "global source". When you **export** from main.js, those exports are available in all other files globals. Simple as that!

What do you get with this? Easily share styles, colors, fonts, configuration, urls, and anything else onto objects in main.js.

And...

### Making your own prelude

Flint encourages highly functional programming. Using it's globals system you can provide your apps with a beautiful set of functions that far surpass the highly deficient JS ones.

For example, you could make all of [Ramda.js](http://ramdajs.com/) available to your files!

Or just import underscore and export it! In your main.js:

    import _ from 'underscore'

    view Main {
      <h1>Hello World</h1>
    }

    export default _
`

view Docs.Extras {
  <Title>Flint</Title>
  <Body markdown={contents} />
}