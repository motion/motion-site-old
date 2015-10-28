view Docs.Extras {
  <Title big>Extras</Title>
  <Body>
    <Text>Beyond the view macro and it's corresponding syntax, it is very much just ES6 JavaScript. We've made some small changes though to optimize for common use cases and have shimmed a few helpful modules.</Text>

    <Title>ES2015 and...</Title>
    <ul>
      <li>Promise - <a href="https://github.com/petkaantonov/bluebird/blob/master/API.md">Bluebird promises</a> are the default "Promise" implementation.</li>
      <li>fetch - <a href="https://github.com/matthew-andrews/isomorphic-fetch">isomorphic fetch</a> has been provided</li>
      <li>on - Smart view-friendly event handler, see documentation below.</li>
    </ul>

    <Title small>on</Title>

    <Text><code>on</code> is our small function for smartly binding events. If used inside of a view, it automatically binds/unbinds events on mount/unmount. You can attach it to a scope, by default it attaches to <code>window</code> outside of views, and <code>view</code> inside of views.</Text>

    <Text>Outside of a view you could use it to listen for scrolling:</Text>

    <Code source={`
      on('scroll', () => console.log('scrolling'))
    `} />

    <Text>Inside a view you can use it for view events:</Text>

    <Code source={`
      view Button {
        on('mount', () => {
          // do stuff to live mounted DOM nodes
        })
      }
    `} />

    <Title>Constants / globals</Title>

    <Text>You can export global constants! Why would you want this? Frontend apps are not backend apps. Most developers don't use IDE's. We share styles, fonts, colors, screen sizes and routes across huge amounts of files. We need a system that allows this in a *safe* way.</Text>

    <Text>What makes globals typically unsafe?</Text>

    <ul>
      <li>When they are hard to find or detect</li>
      <li>When their value is changeable</li>
    </ul>

    <Text>If we can solve these two things, we can have gain huge amounts of productivity. We need to know **where they are defined** and ensure that **they never change**. If we always know where and what they are, we are good!</Text>

    <Title small>Globals only come from main.js</Title>

    <Text>
      Main.js is guaranteed to be loaded first in your app. This is the only file that is ever treated "specially", much like how the Main view is always your entry point. As your entry point, it also serves as your "main" source. When you **export** from main.js, those exports are available in all other files globals. Simple as that!
    </Text>

    <Text>
      What do you get with this? Easily share styles, colors, fonts, configuration, urls, and anything else onto objects in main.js.
      What are the downsides? It's a double edged sword. We've done what we can do keep constants as safe as possible, it's your job to use them sparingly, and to name then in a distinguishing way.
    </Text>

    <Text>
      Remember, this is an optional feature. It's easy to detect in any app you are checking, easy to search for, and dramatically helpful for certain cases.
    </Text>

    <Text>And...</Text>

    <Title small>Using globals powerfully</Title>

    <Text>Flint and the React model encourage functional programming. Using many small, composable global functions will make you much more effective. You can provide your apps with your own set of functions now with ease.</Text>

    <Text>For example, you could make all of <a href="http://ramdajs.com/">Ramda.js</a> available to your files!</Text>

    <Text>Or just import underscore and export it! In your main.js:</Text>

    <Code source={`
      import _ from 'underscore'

      view Main {
        <h1>Hello World</h1>
      }

      export default _
    `} />

    <Text>
      Flint won't allow you to have it conflict with any other standard JavaScript globals as well.
    </Text>
  </Body>
}