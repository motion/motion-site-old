view Performance {
  <Contain>
    <title>
      How Flint makes you more effective
    </title>

    <Text big>
      <line>For the first time your entire frontend system is communicating.</line>
      <line>Compiler, editor & browser: we've just begun to tap into the possibility.</line>
    </Text>

    <feature class="first">
      <section class="small">
        <featureTitle>Hot Reloads ++</featureTitle>
      </section>

      <section>
        <p>Injects single files rather than a big bundle. Up to 10x faster, in constant time.</p>
      </section>

      <section>
        <p>Keep state as you edit. Even child views when editing parents.</p>
      </section>

      <section>
        <p>Extracts and hot updates static styles as CSS. JS isn't even run when possible!</p>
      </section>
    </feature>

    <feature>
      <section class="small">
        <featureTitle>Smart Errors</featureTitle>
      </section>

      <section>
        <p>Runtime and compile errors, shown in one place, debounced, and in english.</p>
      </section>

      <section>
        <p>Avoids app breaking, keeps previous state to avoid flashes of broken content.</p>
      </section>

      <section>
        <p>Proper line numbers even in runtime, with helpful messages for many errors.</p>
      </section>
    </feature>


    <feature>
      <section class="small">
        <featureTitle>Amazing styles</featureTitle>
      </section>

      <section>
        <p>Javascript: view-scoped with support for media queries and pseudo selectors.</p>
      </section>

      <section>
        <p>Dynamic styles inline, statics extract to stylesheet. The best of both worlds.</p>
      </section>

      <section>
        <p>Styles use names just as you defined them, easily editable in your inspector.</p>
      </section>
    </feature>
  </Contain>

  $ = {
    background: 'linear-gradient(20deg, #134359, #3a7b9e)',
    color: '#eee',
    borderBottom: '1px solid #eee',
    padding: [50, 0]
  }

  $title = {
    fontFamily: font.title,
    fontSize: 28,
    color: '#fff',
    margin: [0, 'auto', 11]
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

  $p = {
    fontWeight: 100,
    fontSize: 18,
    color: [255,255,255,0.85],
    margin: 0,
    lineHeight: 1.5
  }
}