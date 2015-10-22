view Home {
  <Blur left="45%" top={-200} />
  <Header />
  <Install />
  <Examples />
  <Install />
  <Features />
  <Slack />
  <SubFeatures />
  <DemoVideo />
  <FAQ />
  <Signup />
  <Footer />

  $ = { width: '100%' }
}

view Intro {
  <Contain yield />

  $ = {
    fontWeight: 300,
    fontSize: 28,
    padding: [20, 0],
    margin: [30, 0],
    border: '1px dotted #ddd',
    borderLeft: 'none',
    borderRight: 'none'
  }

  $Contain = {
    textAlign: 'center'
  }

  $p = {
    margin: [7, 0]
  }

  $.strong = {
    fontSize: 34,
    marginBottom: 12,
  }
}

view Home.Examples {
  <Contain>
    <section>
      <Blur />
      <Interlude left num="1">
        Flint introduces the view to ES6
      </Interlude>

      <Example flip inPage
        maxWidth={760}
        in={<Editor lines={9} left light src="/assets/examples/exampleCounter.html" />}
        out={<DemoCounter />} />
    </section>

    <section>
      <Blur left="60%" />
      <Interlude right num="2">
        Style views with ease...
      </Interlude>

      <Example inPage
        maxWidth={900}
        in={<Editor lines={15} left light src="/assets/examples/exampleVenn.html" />}
        out={<DemoVenn />} />
    </section>

    <section>
      <Blur />
      <Interlude left num="3">
        Flint works with ES6, npm & React
      </Interlude>

      <Example flip inPage
        inStyle={{ flexGrow: 2 }}
        in={
          <Editor left light
            lines={20}
            sources={[
              { title: 'Circles.js', url: '/assets/examples/exampleCircles.html' },
              { title: 'Circle.js', url: '/assets/examples/exampleCircle.html' }
            ]} />
        }
        out={<DemoCircles />} />
    </section>
  </Contain>

  $ = {
    // padding: [0, 0, 40],
    margin: [0, 'auto', 40],
    width: '100%',
    maxWidth: 980,
    position: 'relative',
    zIndex: 0
  }

  $section = {
    position: 'relative'
  }
}

view Interlude {
  <Contain>
    <Tag if={^num < 4} name="Num" outside right={^right} />
    <num if={^num}>
      {^num}
    </num>
    <title>{^children}</title>
  </Contain>

  $Contain = {
    maxWidth: ^pad ? 600 : 'auto',
    textAlign: ^right ? 'right': 'left',
    flexDirection: ^right ? 'row-reverse' : 'row',
    justifyContent: ^center ? 'center' : 'auto',
    margin: [40, 'auto', 20],
    padding: [0, 25],

    [device.small]: {
      flexDirection: 'center'
    }
  }

  const circleSize = 60
  const shared = {
    height: circleSize,
    alignItems: 'center',
    justifyContent: 'center'
  }

  $title = [shared, {
    margin: [0, 30],
    color: '#444',
    fontSize: 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',

    [device.small]: {
      fontSize: 20,
      marginLeft: 10,
      marginRight: 10
    }
  }]

  $num = [shared, {
    fontWeight: 300,
    background: `linear-gradient(${Math.floor(Math.random() * 180)}deg, ${color.brand1}, ${color.brand2})`,
    color: '#fff',
    width: circleSize,
    fontSize: 32,
    borderRadius: 100,
    position: 'relative',

    [device.small]: {
      display: 'none'
    }
  }]
}

view Example {
  <Contain maxWidth={^maxWidth || 1000}>
    <in>{^in}</in>
    <out>{^out}</out>
  </Contain>

  $ = {
    flexFlow: 'row',
    flexGrow: 1,
    alignItems: 'space-between',
    justifyContent: 'center',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $out = [{
    flexGrow: 2,
    justifyContent: 'center',
    position: 'relative',
    order: ^flip ? 2 : 1,

    [device.small]: {
      width: '100%',
      order: ^flipVertical ? 1 : 2,
      padding: ^inPage ? '50px 0' : 0
    }
  }, ^outStyle]

  $in = [{
    flexGrow: 1,
    order: ^flip ? 1 : 2,
    zIndex: 10,
    margin: 0,

    [device.small]: {
      width: '90%',
      margin: 'auto',
      order: ^flipVertical ? 2 : 1
    }
  }, ^inStyle]
}

view Install {
  const install = 'sh <(curl -sL https://flint.love)'
  const select = () => view.refs.code.select()

  <Contain id="install">
    <modal>
      <inner>
        <code onMouseUp={select} class="install">
         <input ref="code" value={install} readOnly size={install.length} />
        </code>

        <afterward>
          or: npm install -g flint
        </afterward>
        <Tag name="Install" outside right />
      </inner>
    </modal>
  </Contain>

  $ = {
    textAlign: 'center',
    margin: [10, 0, ^pad ? 100 : 0],

    [device.small]: {
      display: 'none'
    }
  }

  $modal = {
    margin: [10, 'auto'],
    padding: [0, 20, 20]
  }

  $inner = {
    margin: [-20, 0, 0],
    position: 'relative'
  }

  $prompt = {
    content: '$',
    marginRight: 10,
    opacity: 0.5
  }

  $code = {
    background: 'none'
  }

  $.install = {
    flexFlow: 'row',
    color: '#555',
    margin: [10, 'auto'],
  }

  $input = {
    background: `linear-gradient(90deg, ${color.brand1}, ${color.brand2})`,
    borderRadius: 5,
    border: '2px solid #eee',
    padding: [8, 10, 8, 16],
    fontSize: 20,
    margin: [-8, 0, -5],
    fontFamily: font.monoSpace,
    width: '100%',
    color: '#fff'
  }

  $afterward = {
    display: 'block',
    margin: [5, 'auto'],
    flexFlow: 'row',
    lineHeight: '1.2rem',
    opacity: 0.7,
    fontFamily: font.monoSpace
  }

  $.small = {
    display: 'inline',
    fontSize: 14,
    color: '#777',
    background: 'none',
    fontWeight: 200
  }

  $a = style.link
}

view Slack {
  <Contain id="slack">
    <Interlude num="5" center>Join us on Slack!</Interlude>
    <iframe seamless="seamless" src="http://flint-slack.herokuapp.com/"></iframe>
  </Contain>

  $iframe = {
    border: 'none',
    width: '100%',
    height: 240,
    overflow: 'hidden'
  }

  $ = {
    marginBottom: 20
  }
}