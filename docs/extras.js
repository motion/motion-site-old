view Docs.Extras {
  <Title big>Extras</Title>
  <Body>
    <Text>Beyond the view macro and it's corresponding syntax, it is very much just ES6 JavaScript. We've made some small changes though to optimize for common use cases and have shimmed a few helpful modules.</Text>

    <Title small>Polyfills</Title>
    <ul>
      <li><code>Promise</code> - <Link href="https://github.com/petkaantonov/bluebird/blob/master/API.md">Bluebird</Link></li>
      <li><code>fetch</code> - <Link href="https://github.com/matthew-andrews/isomorphic-fetch">Isomorphic fetch</Link></li>
    </ul>

    <Title>Hooking into Flint</Title>
    <Text>
      We're working on a full set of hooks for Flint. For now, we have a couple:
    </Text>

    <Title small>Flint.preloaders : array&lt;Promise&gt;</Title>
    <Text>
      Set it to a Promise or array of Promises that will execute and fulfill before running your app.
    </Text>

    <Title small>Flint.decorateViews : function</Title>
    <Text>
      Pass decorateViews a function that's called and passed in each view after it mounts. This allows you to decorate the view with a lot of power, like accessing its props.
    </Text>

    <Next to='/docs/building'>Building</Next>
  </Body>
}