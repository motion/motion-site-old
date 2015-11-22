view Performance {
  <Contain>
    <title>
      How Flint makes you more effective
    </title>

    <Text big>
      For the first time your entire frontend system is talking to each other. From compiler to editor to browser,
      we've just begun to tap into the possibility.
    </Text>

    <feature class="first">
      <section class="small">
        <featureTitle>Hot Reloads ++</featureTitle>
      </section>

      <section>
        <subtitle>Faster</subtitle>
        <p>Injects single files rather than a big bundle. Up to 10x faster, in constant time.</p>
      </section>

      <section>
        <subtitle>Safer</subtitle>
        <p>Keep state as you edit. Even child views when editing parents.</p>
      </section>

      <section>
        <subtitle>Smarter</subtitle>
        <p>Extracts and hot updates static styles as CSS. JS isn't even run when possible!</p>
      </section>
    </feature>

    <feature>
      <section class="small">
        <featureTitle>Smart Errors</featureTitle>
      </section>

      <section>
        <subtitle>Cohesive</subtitle>
        <p>Runtime and compile errors, shown in one place, debounced, and in english.</p>
      </section>

      <section>
        <subtitle>Recovered</subtitle>
        <p>Avoids app breaking, keeps previous state to avoid flashes of broken content.</p>
      </section>

      <section>
        <subtitle>Helpful</subtitle>
        <p>Proper line numbers even in runtime, with helpful messages for many errors.</p>
      </section>
    </feature>


    <feature>
      <section class="small">
        <featureTitle>Amazing styles</featureTitle>
      </section>

      <section>
        <subtitle>Powerful</subtitle>
        <p>Inline, view-scoped, javascript styles with support for media queries & pseudo selectors.</p>
      </section>

      <section>
        <subtitle>Optimized</subtitle>
        <p>Dynamic styles inline, statics extracted to stylesheets = best of both worlds.</p>
      </section>

      <section>
        <subtitle>Readable</subtitle>
        <p>Styles use names just as you defined them, easily editable in your inspector.</p>
      </section>
    </feature>
  </Contain>

  $ = {
    background: 'linear-gradient(20deg, #134359, #3a7b9e)',
    color: '#eee',
    borderBottom: '1px solid #eee',
    padding: [51, 0]
  }

  $title = {
    fontFamily: font.title,
    fontSize: 28,
    color: '#fff',
    margin: [10, 'auto', 11]
  }

  $Text = {
    maxWidth: '80%',
    textAlign: 'center',
    margin: [0, 'auto', 11]
  }

  $feature = {
    flexFlow: 'row',
    margin: [10, 0, 0],
    borderTop: '1px solid rgba(255,255,255,0.05)',

    [device.small]: {
      flexFlow: 'column',
      padding: [0, 0, 30]
    }
  }

  $first = {
    border: 'none'
  }

  $featureTitle = {
    margin: ['auto', 0, 'auto', 20],
    textAlign: 'right',
    fontFamily: font.title,
    fontSize: 20,
    color: '#fff'
  }

  $section = {
    padding: 25,
    fontSize: 15,
    width: '33%',

    [device.small]: {
      width: '100%'
    }
  }

  $small = {
    width: '20%',

    [device.small]: {
      margin: 'auto',
      width: 'auto'
    }
  }

  $subtitle = {
    fontWeight: 100,
    fontSize: 18,
    margin: [-3, 0, 4],
    color: [255,255,255,0.7]
  }

  $p = {
    margin: 0,
    lineHeight: 1.5,
    fontSize: 14
  }
}