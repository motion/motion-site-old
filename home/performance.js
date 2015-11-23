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
        <featureTitle>Hot Reloads++</featureTitle>
      </section>

      <section>
        <p>Inject one file, not a bundle. ~10x faster, constant time.</p>
      </section>

      <section>
        <p>Keeps state, even children while editing parents.</p>
      </section>

      <section>
        <p>Hot reloads styles as CSS. JS isn't even run!</p>
      </section>
    </feature>

    <feature>
      <section class="small">
        <featureTitle>Smart Errors</featureTitle>
      </section>

      <section>
        <p>Runtime & compile errors, in one place, and in english.</p>
      </section>

      <section>
        <p>Avoid breaking, state loss, and unstyled flashes.</p>
      </section>

      <section>
        <p>Real line numbers in runtime, better messages.</p>
      </section>
    </feature>

    <feature>
      <section class="small">
        <featureTitle>Focus</featureTitle>
      </section>

      <section>
        <p>Hold down option in Atom to enter focus mode.</p>
      </section>

      <section>
        <p>Drag numbers & colors to use a realtime color picker.</p>
      </section>

      <section>
        <p>Flint sockets stream file to browser for super speed.</p>
      </section>
    </feature>


    <feature>
      <section class="small">
        <featureTitle>Amazing styles</featureTitle>
      </section>

      <section>
        <p>Javascript power in styles, locally scoped to view.</p>
      </section>

      <section>
        <p>Static styles extract to stylesheet and hot inject.</p>
      </section>

      <section>
        <p>Simple class and tag name styles kept in CSS.</p>
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
    margin: [0],
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