view Docs.Routes {
  <Title big>Routes</Title>
  <Body>
    <Text big>Flint comes with a basic routing system, but lets you plug in any you'd like.</Text>

    <Text>
      Routing is done through <code>Flint.router</code>, which has the following functions.
    </Text>

    <Title small>Setting routes</Title>
    <Text>
      You don't need to instantiate routes, you can just use
      the <code>route</code> property on any JSX element. Flint will then
      watch your location and automatically determine if it should show
      or hide the element.
    </Text>

    <Title>Example</Title>
    <Code source={`
      view Main {
        <h1>Welcome to our store</h1>
        <Home route="/" />
        <About route="/about" />
        <Product route="/products/:id" />
      }

      view Home {
        let toProduct = id => Flint.router.go('/products/' + id)

        <h2>Come on by</h2>
        <links>
          <a onClick={() => toProduct(15)}>buy shoes</a>
          <a onClick={() => toProduct(30)}>or cakes</a>
          <a onClick={() => toProduct(12)}>or hammers</a>
        </links>
      }

      view About {
        <h2>Started by Nick and Nate</h2>
      }

      view Product {
        <h2>Product {view.props.params.id}</h2>
        <a onClick={() => Flint.router.go('/')}>home</a>
      }
    `} />

    <Next to='/docs/extras'>Extras</Next>
  </Body>
}