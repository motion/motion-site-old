view Docs.Extras {
  <Title>Extras</Title>
  <Text>Beyond the view macro and it's corresponding syntax, it is very much just ES6 JavaScript. We've made some small changes though to optimize for common use cases and have shimmed a few helpful modules.</Text>

  <SubTitle>Polyfills</SubTitle>
  <ul>
    <li><code>fetch</code> - <Link href="https://github.com/matthew-andrews/isomorphic-fetch">Isomorphic fetch</Link></li>
  </ul>

  <SubTitle>Hooking into Motion</SubTitle>
  <Text>
    We're working on a full set of hooks for Motion. For now, we have a couple:
  </Text>

  <SubTitle>Motion.preloaders : array&lt;Promise&gt;</SubTitle>
  <Text>
    Set it to a Promise or array of Promises that will execute and fulfill before running your app.
  </Text>

  <SubTitle>Motion._decorateView : function</SubTitle>
  <Text>
    Pass this a function to get access the the React class created. This is in testing so it's prefixed "_",
    and for now it's required to happen above the view declaration.
  </Text>

  <Code source={`
    Motion._decorateView('Main', (Main) => {
      return React.createClass({
        render() {
          return <div>
            <h1>Decorated</h1>
            {React.createElement(Main)}
          </div>
          }
      })
    })

    view Main {
      <h1>Hello</h1>
    }
  `} />

  <Next to='/docs/building'>Building</Next>
}