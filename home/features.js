view Features {
  <Contain>
    <Interlude center num="4">
      Flint is real development, faster
    </Interlude>

    <section>
      <text>
        <img src={`/assets/images/flowers.svg`} />
        <col>
          <title>Automatic NPM Installs</title>
          <description>
            As you type Flint installs npm packages instantly
            without having to refresh.
          </description>
        </col>
      </text>

      <text>
        <col>
          <title>Instant Hot Updates</title>
          <description>
            Flint's compiler stays fast even with hundreds
            or thousands of views.
          </description>
        </col>
        <img src={`/assets/images/transport.svg`} />
      </text>

      <text>
        <img src={`/assets/images/river.svg`} />
        <col>
          <title>No boilerplate</title>
          <description>
            Forget configs, gulp systems, and huge amounts
            of time keeping your stack modern.
          </description>
        </col>
      </text>

      <text>
        <col>
          <title>Powered by React</title>
          <description>
            Use any React component, enhanced
            with a beautiful syntax.
          </description>
        </col>
        <img src={`/assets/images/type.svg`} />
      </text>
    </section>
  </Contain>

  $section = {
    margin: [10, 'auto'],
    flexFlow: 'row',
    flexWrap: 'wrap',
    maxWidth: '90%',
  }

  $text = {
    flexFlow: 'row',
    textAlign: 'left',
    margin: [5, 0],
    width: '50%',
    alignItems: 'center',

    [device.small]: {
      width: '100%'
    }
  }

  $img = {
    width: 80,
    height: 120,
    margin: 10,

    [device.small]: {
      width: '12%',
      marginLeft: 0,
      marginRight: 0
    }
  }

  $.right = {
    alignSelf: 'flex-end'
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
