view Docs.Extras {
  <Title>Extras</Title>
  <Body>
    <IntroText>Flint's build system is custom and based on Babel with Stage 2 enabled.</IntroText>

    <Text>Beyond the view macro and it's corresponding syntax, it is very much just ES6 JavaScript. We've made some small changes though to optimize for common use cases and have shimmed a few helpful modules.</Text>

    <h4>ES2015 and...</h4>
    <ul>
      <li>Promise - <a href="https://github.com/petkaantonov/bluebird/blob/master/API.md">Bluebird promises</a> are the default "Promise" implementation.</li>
      <li>fetch - <a href="https://github.com/matthew-andrews/isomorphic-fetch">isomorphic fetch</a> has been provided</li>
      <li>fetchJSON = <code>fetch.then(res => res.json())</code></li>
      <li>on - Smart view-friendly event handler, see documentation below.</li>
      <li>view - Only inside of views, provides access to helpers and information on the view</li>
    </ul>

    <h5>on</h5>

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

    <h4>React and...</h4>

    <Text>React has been enhanced in a few ways. In JSX:</Text>

    <ul>
      <li>Use attribute <code>class</code> as well as <code>className</code>.</li>
      <li><code>class</code> accepts an object of <code>{`{ className: bool }`}</code> to set multiple classes</li>
      <li><code>style</code> attribute accepts arrays/objects</li>
    </ul>

    <h4>Constants / globals</h4>

    <Text>You can export global constants! Why would you want this? Frontend apps are not backend apps. Most developers don't use IDE's. We share styles, fonts, colors, screen sizes and routes across huge amounts of files. We need a system that allows this in a *safe* way.</Text>

    <Text>What makes globals typically undesirable?</Text>

    <ul>
      <li>Where are they defined?</li>
      <li>What is their value at this time?</li>
    </ul>

    <Text>If we can solve these two things, we can have gain huge amounts of productivity without the typical downsides. We need to know **where they are defined** and ensure that **they never change**. If we always know where and what they are, we are good!</Text>

    <h5>Globals only come from main.js</h5>

    <Text>Main.js is guaranteed to be loaded first in your app. This is the only file that is ever treated "specially", much like how the Main view is always your entry point. Since you will never import your main file (because it is your entry point) we've purposed it as your "global source". When you **export** from main.js, those exports are available in all other files globals. Simple as that!</Text>

    <Text>What do you get with this? Easily share styles, colors, fonts, configuration, urls, and anything else onto objects in main.js.</Text>

    <Text>And...</Text>

    <h5>Making your own prelude</h5>

    <Text>Flint encourages highly functional programming. Using it's globals system you can provide your apps with a beautiful set of functions that far surpass the highly deficient JS ones.</Text>

    <Text>For example, you could make all of <a href="http://ramdajs.com/">Ramda.js</a> available to your files!</Text>

    <Text>Or just import underscore and export it! In your main.js:</Text>

    <Code source={`
      import _ from 'underscore'

      view Main {
        <h1>Hello World</h1>
      }

      export default _
    `} />
  </Body>
}