export const Docs.Routes = () => $(
  <Title>Routes</Title>
  <IntroText>Motion comes with a lightweight routing system, but lets you plug in any you'd like.</IntroText>

  <SubTitle>Note</SubTitle>
  <Text>
    Routing in Motion is simple and stripped down. If you're building a larger
    application, we recommend using the fantastic <Link to="https://github.com/reactjs/react-router">React Router</Link> library.
  </Text>

  <Text>
    Routing is done through <code>Motion.router</code>, which has the following functions:
  </Text>

  <ul>
    <li><code>go</code> - Pass in a pathname to navigate to the route</li>
    <li><code>link</code> - Returns a function that executes go</li>
    <li><code>isActive</code> - Returns a boolean if route is active</li>
    <li><code>onChange</code> - Pass a function, calls back with path when it changes. Returns a function that removes the listener.</li>
    <li><code>back</code> - Navigates backwards</li>
    <li><code>forward</code> - Navigates forwards</li>
  </ul>

  <Text>
    It also has the following objects available to check:
  </Text>

  <ul>
    <li><code>params</code> - Param object for the deepest matched route</li>
  </ul>

  <Text>
    <code>Motion.router.go</code> takes a few options as it's second argument:

    <ul>
      <li><code>dontPush</code> - false (default), avoid updating browser history</li>
      <li><code>dontRender</code> - false (default), avoids re-rendering the page, just pushes state</li>
      <li><code>keepScroll</code> - false (default), avoid scrolling back to top of page</li>
    </ul>
  </Text>

  <SubTitle>Setting routes</SubTitle>
  <Text>
    You don't need to instantiate routes, you can just use
    the <code>route</code> property on any JSX element. Motion will then
    watch your location and automatically determine if it should show
    or hide the element.
  </Text>

  <SubTitle>Example</SubTitle>
  <Code source={`
    export const Main = () => $(
      <h1>Welcome to our store</h1>
      <Home route="/" />
      <About route="/about" />
      <Product route="/products/:id" />
      <NotFound route={404} />
    }

    export const Home = () => $(
      let toProduct = id => Motion.router.go('/products/' + id)

      <h2>Come on by</h2>
      <links>
        <a onClick={() => toProduct(15)}>buy shoes</a>
        <a onClick={() => toProduct(30)}>or cakes</a>
        <a onClick={() => toProduct(12)}>or hammers</a>

        // Motion.router.link returns a function, for use in links
        <a onClick={Motion.router.link('/products')}>or hammers</a>
      </links>
    }

    export const About = () => $(
      <h2>About our company</h2>
    }

    export const Product = () => $(
      <h2>Product {view.props.params.id}</h2>
      <a onClick={() => Motion.router.go('/')}>home</a>
    }

    export const NotFound = () => $(
      <h2>404!</h2>
    }
  `} />

  <Next to='/docs/extras'>Extras</Next>
}
