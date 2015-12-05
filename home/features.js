view Features {
  <Contain>
    <Title center big light>Features</Title>

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

      <thirdwrap>
        <text class="third">
          <col>
            <title>Use &lt;React /&gt; components</title>
            <description>
              Automatic installs to import and use any React
              component instantly, without losing state.
            </description>
          </col>
        </text>

        <text class="third">
          <col>
            <title>Performance by default</title>
            <description>
              Flint optimizes React to give you even better performance
              in development and production.
            </description>
          </col>
        </text>

        <text class="third">
          <col>
            <title>Builds to production</title>
            <description>
              Builds your assets, concats, minifies, sourcemaps,
              autoprefixes, and outputs all your files for you.
            </description>
          </col>
        </text>
      </thirdwrap>
    </section>

    <Next to='/docs/intro'>Learn more in the docs</Next>
  </Contain>

  $ = {
    padding: [30, 0],
    margin: [30, 0]
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
    flexDirection: 'row-reverse !important'
  }

  $small = {
    width: '40%',
    margin: [0, '10%']
  }

  $third = {
    width: '33%',
    margin: [0],

    [device.small]: {
      width: '100%'
    }
  }

  $thirdwrap = {
    flexFlow: 'row',
    margin: [50, 0, 0],
    padding: [50, 0, 0],
    borderTop: '1px solid #eee',

    [device.small]: {
      flexFlow: 'column'
    }
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
    fontSize: 18,
    color: '#777',
    lineHeight: 1.5,
    fontWeight: 300
  }
}
