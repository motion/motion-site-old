view Features {
  <Contain>
    <Interlude center num="4">
      Flint makes development fun
    </Interlude>

    <section>
      <text>
        <img src={`/assets/images/design.svg`} />
        <col>
          <title>Automatic NPM Installs</title>
          <description>
            As you type, Flint checks your imports and installs
            them.As you type, so.
          </description>
        </col>
      </text>

      <text>
        <col>
          <title>Instant Hot Updates</title>
          <description>
            As you type, Flint checks your imports and installs
            them.As you type, so you.
          </description>
        </col>
        <img src={`/assets/images/artist.svg`} />
      </text>

      <text>
        <img src={`/assets/images/artist.svg`} />
        <col>
          <title>No build systems</title>
          <description>
            As you type, Flint checks your imports and installs
            them.As you type, so you.
          </description>
        </col>
      </text>

      <text>
        <col>
          <title>No build systems</title>
          <description>
            As you type, Flint checks your imports and installs
            them.As you type, so you.
          </description>
        </col>
        <img src={`/assets/images/artist.svg`} />
      </text>
    </section>
  </Contain>

  $section = {
    margin: [10, 'auto'],
    flexFlow: 'row',
    flexWrap: 'wrap',
    maxWidth: '90%'
  }

  $text = {
    flexFlow: 'row',
    textAlign: 'left',
    margin: [5, 0],
    width: '50%'
  }

  $img = {
    width: 120,
    height: 120,
    margin: [15],
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
    color: '#555',
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
    width: 20,
    height: 20,
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
