export const Docs.Intro = () => $(
  <Title>What is Motion?</Title>

  <IntroText>
    Motion is a cohesive frontend development environment. It's everything you need to build modern apps. It's powered by React.
  </IntroText>

  <IntroText>
    Start an app in seconds, deploy it with one command, ready to deploy on any host.
  </IntroText>

  <Text>
    Motion runs on open source. It's a node CLI powered by ES6, npm, Gulp, Babel, Webpack, React, and tons of libraries. It's open source, and we are actively building an amazing developer community!
  </Text>

  <Text>
    Motion attempts to bring the the best of what we use today in libraries into a single system. It doesn't prescribe any data management system. It works with all of React, so you can use your favorite tools from React Router to Redux, or any components you enjoy.
  </Text>

  <Text>
    Motion also brings the concept of the <code>view</code> to Javascript for when you want to quickly build and test out things in your app.
  </Text>

  <Text>
    Views bring amazing power and upside.  They singletons which means they are easy to regonize and use anywhere in your app. It also means they are about 10x faster to hot reload. They require on average 60% less code than classes. And they let you express your logic using variables, like you should be able to. This means it's easer to write, and easier to understand.
  </Text>

  <Text>
    Because they encapsulate styles, we also can do amazing optimizations. We statically extract CSS from your views for huge upsides: faster rendering, faster hot reloading, smaller payloads, cacheable payloads, and dramatically smaller memory overhead, especially important on mobile.
  </Text>

  <Text>
    That said, they are a work in progress! We commit to providing codemods as we continue to refine and work with community to determine the best way to write views in Javascript. We may even end up with an amazing way to it just using functions! But for now we've found views to strike the right balance between
    low-risk and high-reward.
  </Text>

  <Text>
    We want to have a great community, that fosters innovation and selfless work that benefits us all. Please <Link to="/community">read our community guidelines</Link>!
  </Text>

  <SubTitle>No Boilerplate</SubTitle>
  <Text>
    Create and start your app instantly, the only files in your directory are logical code. No more writing around a library.
    Motion watches your files & builds to production. It will improve without you needing to ever learn a build system configuration, and with code mods it can upgrade your syntax to new versions automatically.
  </Text>

  <Text>
    Motion is also configurable. You can plug in your favorite babel plugin, determine various settings for production builds, and more.
  </Text>

  <Text>
    Further, we have an Atom plugin that will bring you everything you've ever dreamed of for every app your run: from full IDE features like jumping between views and styles, to showing dead styles and code, to linting, automatic flow checks, and more.
    We want your environment as a whole to always get smarter, without you needing to think about it.
  </Text>

  <SubTitle>Super Hot Reloads</SubTitle>
  <Text>
    Hot reloads are when you edit your app and it never "resets" its state. Typically hot reloads retain state of your component tree, but lose it in certain situations. <b>Super hot reloads</b> take it a step further, with two features:
  </Text>

  <ul>
    <li>
      <b>Nested state</b> - Motion tracks all of your variables and view properties. Parent views won't lose their child view state (unless you change one of the child properties). So you can edit a Modal, without losing the Toggle positions inside of it.
    </li>
    <li>
      <b>Internal state</b> - When editing a view, Motion also tracks how your values change over time. It will keep state that you haven't changed, avoiding having the entire state of a view reset when you're only changing some wording.
    </li>
  </ul>

  <Text>
    Motion's compiler is not only smarter than others, it's faster too due to avoiding a large amount of AST parsing.
  </Text>

  <SubTitle>Powerful Styles</SubTitle>
  <Text>
    Motion's <code>$</code> style variables are automatically attached to your view elements, to bring back the ease of styling found in CSS. But they go much further. Styles are just objects, and you have the full power of ES6.
  </Text>

  <Text>
    Motion also optimizes styles in a big way. It statically analyzes your style objects and extracts the non-dynamic keys. It then hoists those styles out of your view and into classes, giving you the full power of CSS in JS, without any performance downside, all without having to think about it.
  </Text>

  <SubTitle>Smart Errors</SubTitle>
  <Text>
    Runtime and compile time errors are instantly visible in your browser and your editor. Motion recovers from errors gracefully so your app doesn't break. It notifies you when you tried to access a view that doesn't exist and recovers previous good states when you've made an error, to avoid large amounts of distractions in your browser.
  </Text>

  <SubTitle>Automatic NPM Installs</SubTitle>
  <Text>
    Motion understands your code as though modern ES6 were supported in every browser.
    This means when you type an import Motion installs the package automatically without losing your state.
  </Text>

  <Next to='/docs/install'>Install Motion</Next>
}
