view Home {
  <Blur left="45%" top={-200} />
  <Password />
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

view Header {
  let startIntro = false

  const triggerEvent = (id, name)  => {
    event = document.createEvent('CustomEvent')
    event.initCustomEvent(name, true, true, null)
    const frame = document.getElementById(id);
    const frameWin = (frame.contentDocument || frame.contentWindow.document)
    frameWin.body.dispatchEvent(event)
  }

  <Nav />
  <Example
    flipVertical
    inStyle={{
      maxWidth: 300,
      marginRight: 90,

      [device.small]: {
        marginRight: 0
      }
    }}
    out={
      <head>
        <Logo />
        <Desc start={startIntro} />
        <Social />
      </head>
    }
    in={
      <Editor right
        lines={7}
        id="headeriframe"
        onLoad={() => {
          startIntro = true
          triggerEvent('headeriframe', 'start')
        }}
        src="/assets/examples/example.html" />
    }
  />

  $ = {
    position: 'relative',
    overflow: 'hidden',
    padding: [75, 0, 5],
    minWidth: 800,
    margin: [0, 'auto'],
    [device.small]: { minWidth: 'auto' }
  }

  $Contain = {
    margin: [0, 'auto'],

    [device.small]: {
      minWidth: 'auto',
      background: 'none'
    }
  }

  $Editor = {
    marginLeft: 30,

    [device.small]: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }

  $Nav = {
    position: 'absolute',
    top: 20,
    right: 20,

    [device.small] : {
      position: 'relative',
      top: 0,
      right: 0,
      margin: [-50, 'auto', 0]
    }
  }

  $head = {
    marginRight: -20,
    [device.small]: { margin: 0 }
  }
}

view Nav {
  <a target="_blank" href="http://flintdev.gitbooks.io/flint/content/">Docs</a>
  <a href="#install" onClick={util.linkScroll}>Install</a>
  <a href="">Examples</a>
  <a if={false} target="_blank" href="http://github.com/flintjs"><IconSlack /></a>

  $ = {
    margin: [0, 'auto'],
    flexFlow: 'row',
    zIndex: 100,
    fontWeight: 300,

    [device.small]: {
      marginBottom: 0
    }
  }

  $a = [style.link, {
    color: '#888',
    borderBottom: 'none',
    fontSize: 16,
    fontWeight: 500,
    padding: [0, 12],
  }]
}

view Logo {
  <img src="/assets/images/flintlogo20.png" />

  $ = {
    flexFlow: 'row',
    margin: [0, 'auto', -15],
    alignItems: 'center',
    justifyContent: 'center',

    [device.small]: {
      marginTop: 30
    }
  }

  $img = {
    width: Math.round(1019 * .25),
    height: Math.round(282 * .25),
    margin: [0, 'auto', 20]
  }
}

view Desc {
  let started = ^start

  let how = ''
  let phrases = ['faster', 'creatively', 'with ease']
  const betweenPhrase = 3000
  const typeSpeed = 130
  let phrasePos = 0
  let charPos = 0

  on('props', () => {
    if (^start && !started) {
      started = true
      run()
    }
  })

  const run = () => {
    if (started)
      setTimeout(step, 1000)
  }

  run()

  const step = () => {
    if (phrasePos == phrases.length) return

    // if typed to end of word
    if (charPos === phrases[phrasePos].length) {
      charPos = -1
      phrasePos += 1
      setTimeout(step, betweenPhrase)
    }
    // if typing word
    else {
      charPos += 1
      how = phrases[phrasePos].slice(0, charPos)
      setTimeout(step, typeSpeed)
    }
  }

  <desc>Web apps, {how}</desc>

  $desc = {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 300,
    lineHeight: '1.6rem',
    padding: [22, 0],
    margin: [0, 'auto'],
    display: 'block',
    color: '#777'
  }
}

view Examples {
  <Contain>
    <section>
      <Blur />
      <Interlude left num="1">
        Flint introduces the view to ES6
      </Interlude>

      <Example flip inPage
        maxWidth={760}
        in={<Editor lines={10} left light src="/assets/examples/exampleCounter.html" />}
        out={<DemoCounter />} />
    </section>

    <section>
      <Blur left="100%" />
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
    borderTop: '1px dotted #ddd',
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
    <num if={^num}>{^num}</num>
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

  const shared = {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  }

  $title = [shared, {
    margin: [0, 30],
    fontWeight: 700,
    fontSize: 26,
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
    width: 70,
    fontSize: 32,
    borderRadius: 100,

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

const light = '#fefefe'

view Editor {
  let index = 0
  let tabs, srcs;

  if (^sources) {
    srcs = ^sources.map(s => s.url)
    tabs = ^sources.map(s => s.title)
  }

  const getSrc = () => ^src || srcs[index]

  <Toolbar
    light={^light}
    tabs={tabs}
    activeTab={index}
    changeTab={i => index = i} />
  <container>
    <iframe
      id={^id}
      src={getSrc()}
      onLoad={() => {
        ^onLoad && ^onLoad()
      }}>
    </iframe>
  </container>

  $ = {
    flexFlow: 'column',
    height: ^lines ? 28 + (24 * ^lines) : '100%',
    borderRadius: 6,
    boxShadow: `0 0 10px rgba(0,0,0,${^light ? 0.12 : 0.25})`,
    margin: 10,
    marginRight: ^right ? -10 : 10,
    marginLeft: ^left ? -10 : 10,
    fontFamily: font.monoSpace,
    position: 'relative',
    zIndex: 10,
    width: '100%',

    [device.small]: {
      marginRight: 10,
      marginLeft: 0,
    }
  }

  $container = {
    overflowY: 'hidden',
    overflowX: 'scroll',
    height: '100%'
  }

  $iframe = {
    border: 'none',
    height: '100%',
    width: '100%',
    padding: 3,
    overflow: 'hidden',
    background: ^light ? light : '#263640',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

    [device.small]: {
      pointerEvents: 'none'
    }
  }
}

view Toolbar {
  const demoBorder = 4

  <bar>
    <ctrl class="close" />
    <ctrl class="max" />
    <ctrl class="open" />
  </bar>
  <tabs if={^tabs}>
    <tab repeat={^tabs} onClick={() => ^changeTab(_index)}>
      {_}
    </tab>
  </tabs>

  const borderColor = ^light ? '#fff' : '#222'
  const border = '1px solid ' + borderColor

  $ = {
    flexFlow: 'column'
  }

  $tabs = {
    flexFlow: 'row',
    fontSize: 15,
    fontFamily: font.sansSerif,
    padding: [4, 4, 0, 4],
    background: '#eee',
    borderBottom: border,
  }

  $tab = [{
    cursor: 'pointer',
    userSelect: 'none',
    color: '#333',
    background: '#f9f9f9',
    padding: [0, 8],
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    flexGrow: 1
  }, _index == ^activeTab && {
    background: '#fff',
    borderTop: border,
    borderLeft: `2px solid ${color.brand}`,
    borderRight: border,
    marginTop: -1,
    marginBottom: -1,
    color: '#000',
    fontWeight: 700,
    borderBottom: 'none',
  }]

  $bar = {
    background: ^light ? light : 'rgb(29, 38, 45)',
    height: 12,
    minHeight: 12,
    padding: [0, 2],
    borderTopRightRadius: demoBorder,
    borderTopLeftRadius: demoBorder,
    margin: 0,
    flexFlow: 'row',
    alignItems: 'flex-start',
  }

  $ctrl = {
    width: 8,
    height: 8,
    transform: {
      scale: 0.8
    },
    background: '#EB5B54',
    borderRadius: 10,
    margin: ['auto', 1],
    opacity: 0.2
  }

  $.max = {
    background: '#F7C033'
  }

  $.open = {
    background: '#69CB43'
  }
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
      </inner>
    </modal>
  </Contain>

  $ = {
    textAlign: 'center',
    margin: [40, 0, ^pad ? 100 : 0],

    [device.small]: {
      display: 'none'
    }
  }

  $modal = {
    margin: [10, 'auto'],
    padding: [0, 20, 20]
  }

  $inner = {
    margin: [-20, 0, 0]
  }

  $prompt = {
    content: '$',
    marginRight: 10,
    opacity: 0.5
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
view Password {
  let password = ''
  let disable = false

  const checkPass = () => {
    if (password == 'love' || password == 'Love')
      disable = true
  }

  on('mount', () => {
    view.refs.input.focus()
  })

  <password if={!disable}>
    <input
      ref="input"
      onEnter={checkPass}
      sync={password} />
  </password>

  $password = {
    position: 'fixed',
    top: 0, right: 0,
    left: 0, bottom: 0,
    background: '#eee',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center'
  }

  $input = {
    padding: 20,
    background: '#fff',
    border: '1px solid #ddd',
    fontSize: 22,
    margin: [0, 'auto'],
    textAlign: 'center'
  }
}
