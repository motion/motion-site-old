view Home {
  <Password />
  <Header />
  <DemoVideo />
  <Install title="Install while you watch..." />
  <Examples />
  <Slack />
  <Features />
  <Install />
  <FAQ />
  <Signup />
  <Footer />

  $ = {
    width: '100%'
  }

  const c1 = '#aaa'
  const c2 = '#f9f9f9'
  const c3 = '#fff'
}

view Password {
  let password = ''
  let disable = false

  const checkPass = () => {
    if (password == 'love')
      disable = true
  }

  <password if={!disable}>
    <input
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

view Header {
  let startIntro = false

  <Contain strip straight bg="none" maxWidth="1050px">
    <main>
      <Blur left="45%" top={-200} />
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
      <Nav />
    </main>
  </Contain>

  $ = {
    padding: [0, 0, 60],
    position: 'relative',
    overflow: 'hidden'
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
    top: -20,
    right: 20
  }

  $main = {
    position: 'relative',
    padding: [30, 0],
    minWidth: 800,
    margin: [0, 'auto'],
    [device.small]: { minWidth: 'auto' }
  }

  $head = {
    marginRight: -30,
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

view What {
  <Contain strip bg={color.brand} color="#fff">
    <text>
      <primary if={^title}>
        {^title}
      </primary>
      <secondary if={^sub}>
        {^sub}
      </secondary>
    </text>
  </Contain>

  $ = {
    margin: [10, 0, -70],
    position: 'relative',
    zIndex: 100,
    textAlign: 'center'
  }

  $text = {
    fontSize: 30,
    lineHeight: '2.5rem',
    margin: [-12, 0],

    [device.small]: {
      fontSize: 20
    }
  }

  $primary = {
    display: 'block'
  }

  $secondary = {
    fontSize: 22,
    opacity: 0.85,
    margin: [0, 'auto', 0],
    flexFlow: 'row',

    [device.small]: {
      fontSize: 18
    }
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
    maxWidth: 980
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
      fontSize: 22
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

view Features {
  <List items={[
    [`Works with React`, `Use any React component`],
    [`Automatic npm installs`, `Flint installs as you type`],
    [`Modern ES6, simplified`, `No need for *this* or classes`],
    [`Instant feedback`, `Browser hot updates as you type`],
    [`Fast builds & runtime`, `Compiler unlocks incredible speed`],
    [`Smart errors & tools`, `Inline errors and a state inspector`],
  ]} />

  $ = false
}

view List {
  <Contain>
    <list>
      <item repeat={^items} key={_}>
        <Check class="check" />

        <text>
          <feature>{_[0]}</feature>
          <description if={_[1]}>{_[1]}</description>
        </text>
      </item>
    </list>
  </Contain>

  $ = {
    margin: [50, 'auto', 20],
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

view DemoVideo {
  <YouTube />

  $ = {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    margin: [-90, 'auto', -20],
    position: 'relative',
    zIndex: 100
  }
}

view YouTube {
  let started = false

  const base = 'https://www.youtube.com/embed/VNfkk6lH0gg'
  const params = '?rel=0&showinfo=0&VQ=HD720'

  const getUrl = () => base + params +
    (started ? '&autoplay=1' : '')

  const clicked = () => {
    started = true
  }

  // on(window, 'focus', () => {
  //   if (!started) started = true
  // })

  <cover if={started} />
  <cover if={false} class="bot" />
  <iframe
    onClick={clicked}
    src={getUrl()}
    frameborder="0"
    device>
  </iframe>

  const originalHeight = 800
  const originalWidth = 1840
  const scale = 0.5
  const height = Math.round(originalHeight * scale)
  const width = Math.round(originalWidth * scale)

  $ = {
    width,
    height,
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: 350,
    position: 'relative',

    [device.small]: {
      width: '100%',
      height: 'auto'
    }
  }

  $iframe = {
    width: '100%',
    height: '100%',
    minHeight: 350,
    border: 'none',
    boxShadow: '0 0 16px rgba(0,0,0,0.25)',
    background: color.bg
  }

  $cover = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 7,
    background: color.bg
  }

  $.bot = {
    top: 'auto',
    bottom: 0,
    height: 8
  }
}

view Install {
  const install = 'sh <(curl -sL https://flint.love)'
  const select = () => view.refs.code.select()

  <Contain id="install">
    <modal>
      <Title>{^title || "Install" }</Title>
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
    margin: [20, 0, ^pad ? 100 : 0]
  }

  $modal = {
    margin: [10, 'auto'],
    padding: [0, 20, 20],
    // background: '#fff',
    // borderRadius: 4,
    // boxShadow: '0 0 20px rgba(0,0,0,0.1)'
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
    background: color.brand1,
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
    <Title>Join us on Slack!</Title>
    <iframe seamless="seamless" src="http://flint-slack.herokuapp.com/"></iframe>
  </Contain>

  $iframe = {
    border: 'none',
    width: '100%',
    height: 240,
    overflow: 'hidden'
  }
}

view Signup {
  <Contain>
    <Title>Sign up to keep up with releases:</Title>
    <SignupForm />
  </Contain>

  $ = {
    margin: [-50, 0, 40]
  }
}

view Speed {
  <Contain>
    <Title>The 10 ways Flint makes you faster</Title>

    <section>
      <SubTitle>Shorter syntax</SubTitle>
      <p></p>
    </section>

    <section>
      <SubTitle>Global views and constants</SubTitle>
      <p>
        Views and constants don't change. Once defined, they
        stay the same for their life. Because of this, allowing
        them to be global has huge upside. This isn't just a small win,
        it's fundamentally speeding your entire stack up.
      </p>
      <p>
        First, you get huge speed increases at the compiler level.
        An average React app has a masssive dependecy tree that gets
        bigger as you build. This means every time you save, that tree
        has to be tracked and compiled.
      </p>
      <p>
        Second, you write way less code. Imports and exports are nice,
        but when you're using views across hundreds of files, and you
        don't have an IDE automating anything, you're adding huge amounts
        of inflexibility.
      </p>

      <Before points={[
        'Manually import/export every view',
        'Manually import/export CONSTANTS',
        'Much slower hot reloads'
      ]} />

      <After points={[
        'Create and remove views with ease',
        'Share global style variables, fonts, and more',
        'Much faster feedback loops'
      ]} />
    </section>

    <section>
      <SubTitle>Errors from every level</SubTitle>
      <p>
        Try and render a view that doesn't exist? We tell you inline,
        with a helpful error. Make a syntax error with ES2015? That also
        notifies you, and it doesn't lose your place.
      </p>
      <p>
        Use a duplicate key for a style? Not only do we tell you, but
        we don't crash your entire app.
      </p>
      <p>
        Use a variable that hasn't been defined? We've integrated
        Flow, so you even get type checking and undefined variable
        checks for free. This is big!
      </p>

      <Before points={[
        'Errors in CLI, Browser Console, browser',
        'Tons of sharp edges to get cut on'
      ]} />

      <After points={[
        'Every error, inline, instantly',
        'Never lose your app state',
        'Catches every possible mistake for you'
      ]} />
    </section>

    <section>
      <SubTitle>Views + Styles, inline and handled</SubTitle>
      <p>
        Like Radium? Good, but you'd have to integrate it, and write
        your styles in React using a verbose syntax that is different
        depending on if you include it inline, in your render function,
        or in your file.
      </p>
      <p>
        Also, because React doesn't handle styles, the ecosystem is a mess.
        Import a component and you may get a huge dependency on Radium.
        Or you have to manually import some CSS files. Now your syntax is
        totally different!
      </p>
    </section>

    <section>
      <SubTitle>Amazing build system</SubTitle>
      <p></p>
    </section>

    <section>
      <SubTitle>Share with a single command</SubTitle>
      <p></p>
    </section>

    <section>
      <SubTitle>Shorter syntax</SubTitle>
      <p></p>
    </section>

    <section>
      <SubTitle>Shorter syntax</SubTitle>
      <p></p>
    </section>

    <section>
      <SubTitle>Shorter syntax</SubTitle>
      <p></p>
    </section>
  </Contain>
}

const triggerEvent = (id, name)  => {
  event = document.createEvent('CustomEvent')
  event.initCustomEvent(name, true, true, null)
  const frame = document.getElementById(id);
  const frameWin = (frame.contentDocument || frame.contentWindow.document)
  frameWin.body.dispatchEvent(event)
}