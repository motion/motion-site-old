import { style, color, routes, font, device } from '../constants'

view Home.Features {
  <Feature col>
    <Title center>Everything you need to be productive today</Title>
    <IntroText center>Start in seconds, be more creative & deploy today</IntroText>
    <Features />
  </Feature>
  $Feature = { border: 'none', paddingBottom: 0 }
}

view Features {
  <Contain>
    <section>
      <text>
        <img src={`/assets/images/line/cloud-download.svg`} />
        <col>
          <title>Automatic NPM Installs</title>
          <Text dim small>
            Motion scans your code as you type & installs npm packages instantly.
            No need to refresh your browser.
          </Text>
        </col>
      </text>

      <text class="right">
        <img src={`/assets/images/line/rocket.svg`} />
        <col>
          <title>Super Hot Updates</title>
          <Text dim small>
            Stays fast even with thousands
            of views in large apps.
            Retains deep nested state when editing parent views,
            for crazy productivity.
          </Text>
        </col>
      </text>

      <text>
        <img src={`/assets/images/line/cog.svg`} />
        <col>
          <title>No boilerplate</title>
          <Text dim small>
            Forget configs, gulp systems, and having to spend weeks
            researching and assembling a modern stack on React.
          </Text>
        </col>
      </text>

      <text class="right">
        <img src={`/assets/images/line/bulb.svg`} />
        <col>
          <title>Smart Errors</title>
          <Text dim small>
            Your app never breaks as you edit. Runtime and compile
            errors are shown inline and handled smartly, with helpful messages.
          </Text>
        </col>
      </text>

      <text>
        <img src={`/assets/images/line/snowflake.svg`} />
        <col>
          <title>Powerful Styles</title>
          <Text dim small>
            Inline styles with static extraction to stylesheets.
            Helpers for interaction, media queries, arrays, objects & more.
          </Text>
        </col>
      </text>
    </section>

    <section if={false}>
      <text class="right">
        <col>
          <title>Use &lt;React /&gt; components</title>
          <Text>
            Automatic installs to import and use any React
            component instantly, without losing state.
          </Text>
        </col>
      </text>

      <text>
        <col>
          <title>Performance by default</title>
          <Text>
            Motion optimizes React to give you even better performance
            in development and production.
          </Text>
        </col>
      </text>

      <text class="right">
        <col>
          <title>Builds to production</title>
          <Text>
            Builds your assets, concats, minifies, sourcemaps,
            autoprefixes, and outputs all your files for you.
          </Text>
        </col>
      </text>
    </section>
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
      margin: [0, 'auto', 15]
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
    fontSize: 18,
    margin: [-40, 0, 0],

    [device.small]: {
      fontWeight: 'bold'
    }
  }

  $col = {
    flexFlow: 'column',
    margin: [20]
  }
}
