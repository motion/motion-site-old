view Docs.Extras {
  <Title>Extras</Title>
  <Text>Beyond the view macro and it's corresponding syntax, it is very much just ES6 JavaScript. We've made some small changes though to optimize for common use cases and have shimmed a few helpful modules.</Text>

  <SubTitle>Polyfills</SubTitle>
  <ul>
    <li><code>fetch</code> - <Link href="https://github.com/matthew-andrews/isomorphic-fetch">Isomorphic fetch</Link></li>
  </ul>

  <SubTitle>Hooking into Flint</SubTitle>
  <Text>
    We're working on a full set of hooks for Flint. For now, we have a couple:
  </Text>

  <SubTitle>Flint.preloaders : array&lt;Promise&gt;</SubTitle>
  <Text>
    Set it to a Promise or array of Promises that will execute and fulfill before running your app.
  </Text>

  <SubTitle>Flint.decorateViews : function</SubTitle>
  <Text>
    Pass decorateViews a function that's called and passed in each view after it mounts. This allows you to decorate the view with a lot of power, like accessing its props.
  </Text>

  <Next to='/docs/building'>Building</Next>
}