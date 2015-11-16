view Features {
  <Contain>
    <section>
      <text>
        <img src={`/assets/images/line/cloud-download.svg`} />
        <col>
          <title>Automatic NPM Installs</title>
          <description>
            Flint scans your code as you type & installs npm packages instantly.
            No need to refresh your browser.
          </description>
        </col>
      </text>

      <text class="right">
        <img src={`/assets/images/line/rocket.svg`} />
        <col>
          <title>Super Hot Updates</title>
          <description>
            Stays fast even with thousands
            of views in large apps.
            Retains deep nested state when editing parent views,
            for crazy productivity.
          </description>
        </col>
      </text>

      <text>
        <img src={`/assets/images/line/cog.svg`} />
        <col>
          <title>No boilerplate</title>
          <description>
            Forget configs, gulp systems, and having to spend weeks
            researching and assembling a modern stack on React.
          </description>
        </col>
      </text>

      <text class="right">
        <img src={`/assets/images/line/bulb.svg`} />
        <col>
          <title>Smart Errors</title>
          <description>
            Your app never breaks as you edit. Runtime and compile
            errors are shown inline and handled smartly, with helpful messages.
          </description>
        </col>
      </text>

      <text>
        <img src={`/assets/images/line/snowflake.svg`} />
        <col>
          <title>Powerful Styles</title>
          <description>
            Inline styles with static extraction to stylesheets.
            Helpers for interaction, media queries, arrays, objects & more.
          </description>
        </col>
      </text>

      <text class="right small">
        <col>
          <title>Use &lt;React /&gt; components</title>
          <description>
            With automatic installs you can import and use any React
            component instantly, without even losing your current state.
          </description>
        </col>
      </text>

      <text class="small">
        <col>
          <title>Performance by default</title>
          <description>
            Out of the box Flint optimizes React to give you even better performance
            in development and production.
          </description>
        </col>
      </text>
    </section>

    <Next to='/docs/intro'>Learn more in the docs</Next>
  </Contain>

  $ = {
    padding: [30, 0],
    margin: [30, 0],
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
  }

  $Next = {
    margin: [25, 'auto', 20]
  }

  $section = {
    margin: [30, 'auto'],
    flexWrap: 'wrap',
    maxWidth: '100%',
  }

  $text = {
    flexFlow: 'row',
    textAlign: 'left',
    margin: [-15, 0],
    width: '50%',
    alignItems: 'center',
    position: 'relative',

    [device.small]: {
      width: '100%',
      margin: 0
    }
  }

  $img = {
    width: 250,
    height: 100,
    margin: ['auto', 0],

    [device.small]: {
      display: 'none'
    }
  }

  $right = {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse'
  }

  $small = {
    width: '40%',
    margin: [0, '10%']
  }

  $title = {
    fontFamily: font.title,
    fontSize: 20,
    margin: [-10, 0, 5]
  }

  $col = {
    flexFlow: 'column',
    margin: [20]
  }

  $description = {
    fontSize: 19,
    color: '#777',
    lineHeight: 1.5,
    fontWeight: 300
  }
}

view SubFeatures {
  <Contain>
    <div id="test" height="50" width="50" />
    <List items={[
      {
        title: "Automatic npm installs",
        icon: "artist",
        desc: "Flint installs as you type"
      },
      {
        title: "Works with React",
        icon: "artist",
        desc: "Use any React component"
      },
      {
        title: "Modern ES6, simplified",
        icon: "artist",
        desc: "No need for *this* or classes"
      },
      {
        title: "Instant feedback",
        icon: "artist",
        desc: "Fastest hot updates of any system"
      },
      {
        title: "Fast builds & runtime",
        icon: "artist",
        desc: "Compiler unlocks incredible speed"
      },
      {
        title: "Smart errors & tools",
        icon: "artist",
        desc: "Inline errors and a state inspector"
      },
    ]} />
  </Contain>

  $ = {
    position: 'relative'
  }
}

view List {
  <Contain>
    <list>
      <item repeat={view.props.items}>
        <Check class="check" />
        <text>
          <feature>{_.title}</feature>
          <description if={_.desc}>{_.desc}</description>
        </text>
      </item>
    </list>
  </Contain>

  $ = {
    margin: [20, 'auto'],
    fontSize: 20,
  }

  const listColor = 'rgb(4, 139, 66)'

  $list = {
    maxWidth: 750,
    margin: [0, 'auto'],
    padding: [0, '5%'],
    borderRadius: 5,
    flexFlow: 'row',
    flexWrap: 'wrap',
    color: listColor
  }

  $item = {
    margin: [12, 0, 8],
    padding: [0, 10],
    lineHeight: '1.5rem',
    width: '50%',
    flexFlow: 'row',
    textAlign: 'center',

    [device.small]: {
      width: '100%'
    }
  }

  $text = {
    flexFlow: 'column',
    textAlign: 'left',
    margin: [0, 0, 5]
  }

  $description = {
    margin: [5, 0, 0],
    fontSize: 16,
    color: '#666'
  }
}
