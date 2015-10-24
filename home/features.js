view Features {
  <Contain>
    <Interlude center>
      Flint is development, faster
    </Interlude>

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
            No disruptions. Runtime and compile
            errors are shown inline and handled smartly.
            Flint even helps with typos and suggests edits.
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
    </section>
  </Contain>

  $section = {
    margin: [30, 'auto'],
    flexWrap: 'wrap',
    maxWidth: '100%',
  }

  $text = {
    flexFlow: 'row',
    textAlign: 'left',
    margin: [-20, 0],
    width: '50%',
    alignItems: 'center',
    position: 'relative',

    [device.small]: {
      width: '100%',
      margin: 0
    }
  }

  $img = {
    width: 100,
    margin: 0,

    [device.small]: {
      width: '12%',
      marginLeft: 0,
      marginRight: 0
    }
  }

  $.right = {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse'
  }

  $title = {
    fontSize: 22,
    margin: [-10, 0, 0]
  }

  $col = {
    flexFlow: 'column',
    margin: [20]
  }

  $description = {
    fontSize: 20,
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
      <item repeat={^items}>
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

  $.check = {
    width: 30,
    height: 30,
    fill: color(listColor).darken(0.2),
    margin: [1, 10, -3, 0]
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
