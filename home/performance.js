import { style, color, routes, font, device } from '../constants'

view Performance {
  <Contain>
    <feature class="first">
      <section class="small">
        <featureTitle>Reloads</featureTitle>
      </section>

      <section>
        <p>Injects one file, not large bundle. Up to 10x faster.</p>
      </section>

      <section>
        <p>Keeps state, even child state while editing parents.</p>
      </section>

      <section>
        <p>Static styles injected as CSS, avoids running JS!</p>
      </section>
    </feature>

    <feature class="odd">
      <section class="small">
        <featureTitle>Errors</featureTitle>
      </section>

      <section>
        <p>Run, compile, build errors all in one place.</p>
      </section>

      <section>
        <p>Avoid breaks, state loss, interruptions.</p>
      </section>

      <section>
        <p>Helpful error messages with exact line numbers.</p>
      </section>
    </feature>

    <feature>
      <section class="small">
        <featureTitle>Focus</featureTitle>
      </section>

      <section>
        <p>Quickly see all your colors and numbers in Atom.</p>
      </section>

      <section>
        <p>Drag numbers & colors in realtime.</p>
      </section>

      <section>
        <p>10x faster, streams straight to browser.</p>
      </section>
    </feature>


    <feature class="odd">
      <section class="small">
        <featureTitle>Styles</featureTitle>
      </section>

      <section>
        <p>Javascript powered styles locally scoped to view.</p>
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
    color: '#333',
    padding: [45, 0]
  }

  $Interlude = {
    margin: [0, 0, 40],
    padding: 0
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

  $odd = {
    background: [0,0,0,0.02]
  }

  $first = {
    border: 'none'
  }

  $featureTitle = {
    margin: ['auto', 0, 'auto', 20],
    textAlign: 'right',
    fontFamily: font.title,
    fontSize: 20,
    color: '#333'
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
    color: [0,0,0,0.55],
    margin: 0,
    lineHeight: 1.5
  }
}
