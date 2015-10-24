view Examples.Arena {
  <Title>Advanced Fetching</Title>

  <Text big>
    Fetching data is a big concern in frontend applications.
    Here we show advanced features of ESnext including async/await
    and template literals. We also show routing, repeat, globals and
    other Flint features.
  </Text>

  <Text>
    This app fetches data from the Are.na API, and
    displays it in a simple art site.
  </Text>

  <Title small>main.js</Title>

  <Text>
    In our main file, we set up some constants for our app to use.
    <code>const</code> is new in ES6. We <code>export</code> them
    in our main.js file, which will make them available to other files
    in our app. Notice we export <code>go</code>, <code>link</code>,
    <code>api</code>, and <code>route</code>.
  </Text>

  <Code source={`
      export const api = {}
      api.base = 'http://api.are.na/v2'
      api.channels = \`\${api.base}/channels\`
      api.channel = id => \`\${api.base}/channels/\${id}\`

      export const go = Flint.router.go
      export const link = Flint.router.link

      export const route = {}
      route.home = '/'
      route.project = slug => \`/project/\${slug}\`
   `} />

   <Text>
    Continuing with our main.js file, we define our entry view
    named <code>Main</code>. This is always the name of your top
    level view.
     We define two views and add the <code>route</code> property to
     them. Read more on <a href="">routing</a> in our docs.
   </Text>

   <Text>
    Finally, we define a Link view. View's typically are wrapped,
    but in this case we want the view to just return a single element,
    the <code>a</code> tag. To prevent wrapping, you define your tag
    to be the same as the view name, but lowercase. We define it as
     <code>link-a</code> to tell Flint to render it as a link.
   </Text>

   <Code source={`
      view Main {
        <Home route={route.home} />
        <Project route={route.project(':id')} />
      }

      view Link {
        <link-a onClick={link(^to)} yield />

        $ = {
          textDecoration: ^plain ? 'none' : 'underline',
          cursor: 'pointer'
        }
      }
  `} />

  <Title small>home.js</Title>

  <Text>
    If you already know <code><a href="">fetch</a></code> you can skip
    this paragraph. Fetch is coming to browsers, but Flint provides
    it for you by default. It's a radically improved API for doing AJAX
    requests, or simply, getting data from anywhere else on the web.
    Read more on fetch here.
  </Text>

  <Text>
    Fetch returns a promise. Promises are also polyfilled by Flint,
    using the excellent <a href="">Bluebird</a> library. Promises
    are a nice abstraction that give you more control over asynchronous
    code.
  </Text>

  <Text>
    But, we can do better. <code>async/await</code> are two keywords
    coming to JavaScript. They make using asynchronous code a pleasure.
    Because Flint runs on Babel, you can use them today, and save
    yourself a huge amount of complexity. See how they are used:
  </Text>

  <Code source={`
      view Home {
        let index, projects
        let fetched = false

        load()

        async function load() {
          projects = await fetchJSON(api.projects())
          fetched = true
        }

        <h4 repeat={projects}>
          <Link to={route.project(_.id)}>
            {_.name}
          </Link>
        </h4>

        $ = {
          width: 960,
          margin: [0, 'auto'],
          padding: 80
        }
      }
  `} />

  <Title small>project.js</Title>

  <Text>
    Viewing a project in our app shows it's images. We need to make
    one more request to our api to get them. Again, we use an async
    function.
  </Text>

  <Text>

  </Text>

  <Code source={`
      view Project {
        let id, project, index
        let fetched = false
        let contents = []

        on('props', load)

        async function load() {
          id = ^params.id
          index = projectIds.indexOf(id)
          project = projects[index]

          let data = await fetchJSON(api.channel(id))
          contents = data.contents
          fetched = true
        }

        function plink(index) {
          return link(routes.project(projects[index].id}))
        }

        <Title left={plink(index-1)} right={plink(index+1)}>
          {project.name}
        </Title>
        <contents if={fetched} repeat={contents}>
          <img if={_.image} src={_.image.display.url} />
        </contents>

        $img = { margin: [0, 'auto', 20] }
      }

      view Project.Title {
        <main>
          <Arrow left onClick={^left} />
          <h1>{^children}</h1>
          <Arrow right onClick={^right} />
        </main>
        <close>
          <Link to="/" plain>X</Link>
        </close>

        $ = {
          padding: [0, '7%'],
          flexFlow: 'row',
          alignItems: 'center',

          main: {
            flexFlow: 'row',
            flexGrow: 1,
            justifyContent: 'space-between',
          },

          h1: { fontSize: 22 },
          close: { padding: 20 }
        }
      }

      view Arrow {
        <arrow-a if={^right} yield>&gt;</arrow>
        <arrow-a if={^left} yield>&lt;</arrow>

        $ = { padding: 10 }
      }
  `} />
}