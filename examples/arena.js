view Examples.Arena {
  <Title>Fetch</Title>
  <Title small>main.js</Title>
  <Code source={`
      export const api = {}
      api.base = 'http://api.are.na/v2'
      api.channels = \`\${api.base}/channels\`
      api.user = id => \`\${api.base}/users/\${id}\`
      api.channel = id => \`\${api.base}/channels/\${id}\`
      api.block = id => \`\${api.base}/blocks/\${id}\`

      export const font = {}
      font.display = '15pt "GT Sectra", serif'
      font.book = '13pt "GT Sectra Book", serif'
      font.pressura = '15pt "GT Pressura", sans-serif'

      export const go = Flint.router.go
      export const link = Flint.router.link

      export const route = {}
      route.home = '/'
      route.project = slug => \`/project/\${slug}\`

      export const projects = [
      { name: 'BARNRAZER', id: 'barnrazer' },
      { name: 'Hollywood High Modernism', id: 'hollywood-high-modernism' },
      { name: 'Monsters', id: 'monsters' },
      { name: 'marillouigi', id: 'marillouigi' },
      { name: 'In Situ', id: 'in-situ' },
      { name: 'Stadium NYC', id: 'stadium-nyc-in-post-summer-2012' },
      { name: 'Anat Ebgi' },
      ]

      export const projectIds = projects.map(p => p.id)

      export const loadProject = async index => {
      const url = api.channel(projects[index].id)
      projects[index].data = await fetchJSON(url)
      return new Promise(res => res())
      }

      view Main {
      <Head />
      <Home route={route.home} />
      <Project route={route.project(':id')} />

      $ = {
        font: font.book
      }
      }

      view Head {
      <h1><Link to="/" plain>Chris Coy</Link></h1>
      <recent>
        recent: <Link to="/projects/anat">Anat Ebgi at NADA New York</Link>
      </recent>
      <email>
        email@seecoy.com
      </email>

      $ = {
        font: font.display,
        color: '#333',
        flexFlow: 'row',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        fontWeight: 300,

        h1: {
          display: 'flex',
          flexGrow: 1,
          fontSize: 16,
          margin: 0
        },

        recent: {
          flexFlow: 'row',
          flexGrow: 1
        },

        email: {
          font: font.book,
          color: '#ccc'
        }
      }
      }

      view Link {
      function go() { Flint.router.go(^to) }

      <link-a onClick={go} yield />

      $ = {
        textDecoration: ^plain ? 'none' : 'underline',
        cursor: 'pointer'
      }
      }
  `} />

  <Title small>home.js</Title>
  <Code source={`
      view Home {
        let index, project, cover
        let fetched = false
        let user = {}

        load()

        async function load() {
          index = index || 0
          project = projects[index]

          user = await fetchJSON(api.user('414'))
          fetched = true

          if (!project.data)
            await loadProject(index)

          cover = project.data.contents[0].image.large.url
        }

        <home>
          <background>
            <img if={cover} src={cover} />
          </background>
          <projects>
            <item repeat={projects}>
              <h4>
                <Link to={route.project(_.id)}>
                  {_.name}
                </Link>
              </h4>
            </item>
          </projects>
        </home>

        $ = {
          width: 960,
          margin: [0, 'auto'],
          padding: 80,

          projects: {
            position: 'absolute',
            top: 40,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 20
          },

          background: {
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0
          },

          img: {
            margin: 'auto',
            opacity: 0.15
          }
        }
      }
  `} />
}