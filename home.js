view Home {
  <Header />
  <What />
  <DemoVideo />
  <Install title="Install while watching!" />
  <Examples />
  <Install />
  <Features />
  <Slack />
  <Signup />
  <Footer />

  $ = {
    width: '100%'
  }
}

view Header {
  let startIntro = false

  <Contain strip bg="#fff" maxWidth="98%">
    <main>
      <Example
        flipVertical
        maxWidth={900}
        inStyle={{
          maxWidth: 300
        }}
        out={
          <head>
            <Logo />
            <Introduction start={startIntro} />
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
    </main>
  </Contain>

  $ = {
    padding: [30, 0, 50],
    position: 'relative',
    overflow: 'hidden'
  }

  $Contain = {
    margin: [-20, 'auto', -5],

    [device.small]: {
      minWidth: 'auto',
      background: 'none'
    }
  }

  $main = {
    padding: [10, 0, 30]
  }
}

view Nav {
  const scroll = e => {
    const el = document.querySelector(e.target.getAttribute('href'))
    util.scroll.top(document.body, el.getBoundingClientRect().top - 50)
    e.preventDefault()
  }

  <a target="_blank" href="http://flintdev.gitbooks.io/flint/content/">Docs</a>
  <Social tiny />
  <a href="#install" onClick={scroll}>Install</a>
  <a if={false} target="_blank" href="http://github.com/flintjs"><IconSlack /></a>

  $ = {
    margin: [10, 'auto', -20],
    flexFlow: 'row',
    zIndex: 100,
    fontWeight: 300,

    [device.small]: {
      marginBottom: 0
    }
  }

  $a = [style.link, {
    borderBottom: 'none',
    fontSize: 20,
    fontFamily: font.sansSerif,
    padding: [0, 15],
  }]
}

view Logo {
  <img src="/assets/images/flintlogo20.png" />

  $ = {
    flexFlow: 'row',
    margin: [0, 0, -15],
    alignItems: 'center',
    justifyContent: 'center',

    [device.small]: {
      marginTop: 30
    }
  }

  $img = {
    width: Math.round(520 * .5),
    height: Math.round(140 * .5),
    margin: [0, 'auto', 20]
  }
}

view Introduction {
  <Desc start={^start} />
  <Nav />

  $ = {
    padding: [10, 20],
    fontFamily: font.sansSerif,
    textAlign: 'center'
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

  run()

  <desc>Web apps, {how}</desc>

  $desc = {
    textAlign: 'center',
    fontSize: 26,
    lineHeight: '1.6rem',
    padding: [12, 0],
    fontWeight: 300,
    color: color.text,
    opacity: 0.8,
    margin: [0, 'auto', 5],
    display: 'block'
  }
}

view What {
  <Contain strip bg={color.brand} color="#fff">
    <text>
      <primary>
        A more effective way to build apps with React
      </primary>
      <secondary>
        Ultra hot reloads & an simple view system
      </secondary>
    </text>
  </Contain>

  $ = {
    margin: [-105, 0, -25],
    position: 'relative',
    zIndex: 10,
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
    margin: [4, 'auto', 0],
    flexFlow: 'row',

    [device.small]: {
      fontSize: 18
    }
  }
}

view Examples {
  <section>
    <Interlude>
      Flint introduces the view to ES2015
    </Interlude>

    <Example flip inPage
      maxWidth={760}
      in={<Editor lines={10} left light src="/assets/examples/exampleCounter.html" />}
      out={<DemoCounter />} />
  </section>

  <Interlude>
    Style views easily with $ variables
  </Interlude>

  <Example inPage
    maxWidth={900}
    in={<Editor lines={15} left light src="/assets/examples/exampleVenn.html" />}
    out={<DemoVenn />} />

  <section>
    <Interlude>
      Flint works with ES6, npm & React
    </Interlude>

    <Example flip inPage
      maxWidth={900}
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

  $section = {
    background: 'rgba(255,255,255,0.3)',
    padding: [0, 0, 40],
    margin: [40, 0, 0],
    borderLeft: 'none',
    borderRight: 'none'
  }
}

view Interlude {
  const flip = (one, two) => Math.random() > 0.5 ? one : two
  const rand = () => Math.round(Math.random() * 10) / 10

  <Contain>
    <section>
      <p>
        {^children}
      </p>
    </section>
  </Contain>
  <strip />

  $Contain = {
    padding: [0, 15],
    maxWidth: ^pad ? 600 : 'auto',
  }

  $section = {
    margin: [30, 0, 20],
    fontSize: ^fontSize || 19
  }

  $.simple = {
    border: 'none'
  }

  $p = [style.textGradient, {
    textAlign: 'center',
    margin: [8, 'auto'],
    padding: [0, 25],
    color: color(color.text).rgba(0.2),
    position: 'relative',
    zIndex: 10,
    fontSize: 22
  }]
}

view Example {
  <Contain maxWidth={^maxWidth || 1000}>
    <in class="split">{^in}</in>
    <out class="split">{^out}</out>
  </Contain>

  $ = {
    flexFlow: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $.split = {
    width: '50%'
  }

  $out = {
    justifyContent: 'center',
    position: 'relative',
    order: ^flip ? 2 : 1,

    [device.small]: {
      width: '100%',
      order: ^flipVertical ? 1 : 2,
      padding: ^inPage ? '50px 0' : 0
    }
  }

  $in = [^inStyle, {
    order: ^flip ? 1 : 2,
    zIndex: 10,
    margin: 0,

    [device.small]: {
      width: '90%',
      margin: 'auto',
      order: ^flipVertical ? 2 : 1
    }
  }]
}

view Editor {
  let index = 0
  let tabs, srcs;

  if (^sources) {
    srcs = ^sources.map(s => s.url)
    tabs = ^sources.map(s => s.title)
  }

  const getSrc = () => ^src || srcs[index]

  <Toolbar
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
    border: '1px solid #eee',
    borderRadius: 6,
    boxShadow: '0 0 10px rgba(0,0,0,0.025)',
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
    background: '#fff',
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
    background: ^light ? '#fff' : '#263640',
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

  const border = '1px solid #ddd'

  $ = {
    flexFlow: 'column'
  }

  $tabs = {
    flexFlow: 'row',
    fontSize: 15,
    fontFamily: font.sansSerif,
    padding: [4, 4, 0, 4],
    background: '#f9f9f9',
    borderBottom: border,
  }

  $tab = [{
    cursor: 'pointer',
    userSelect: 'none',
    color: '#777',
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
    background: '#fff',
    borderTop: '1px solid #fff',
    borderBottom: '1px solid #f5f5f5',
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
  <Contain strip noTwist>
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
    fontSize: 20
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
  let started = false

  const start = () => started = true

  <YouTube />

  $ = {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    margin: [-20, 'auto', 0]
  }
}

view YouTube {
  const base = 'https://www.youtube.com/embed/VNfkk6lH0gg'
  const params = '?rel=0&showinfo=0&VQ=HD720'

  const getUrl = () => base + params + (^start ? '&autoplay=1' : '')

  <cover />
  <cover class="bot" />
  <iframe
    src={getUrl()}
    frameborder="0"
    device>
  </iframe>

  const originalHeight = 900
  const originalWidth = 1440
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
    border: 'none'
  }

  $cover = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    background: color.bg
  }

  $.bot = {
    top: 'auto',
    bottom: 0,
    height: 5
  }
}

view Install {
  <Contain id="install">
    <modal>
      <Title big>{^title || "Install in seconds!" }</Title>
      <inner>
        <code><b>curl https://flintjs.com/install.sh | sh</b></code>

        <afterward>
          can you npm install -g without sudo?
          <code class="small"><b>npm install -g flint</b></code>
        </afterward>
      </inner>
    </modal>
  </Contain>

  $ = {
    textAlign: 'center',
    margin: [20, 0, 0],
    fontSize: 15,
    color: '#777'
  }

  $modal = {
    border: '1px solid #ccc',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    margin: [0, 'auto'],
    padding: [0, 20, 20],
    borderRadius: 4
  }

  $inner = {
    margin: [-25, 0, 0]
  }

  $code = {
    color: color.green,
    margin: [10, -20],
    padding: [10, 20],
    fontFamily: font.monoSpace,
    fontSize: 18,
    background: '#fff'
  }

  $afterward = {
    marginTop: 0
  }

  $.small = {
    fontSize: 14,
    padding: [0, 10],
    margin: [-4, 'auto'],
    color: '#777',
    background: 'none'
  }

  $a = style.link
}

view Slack {
  <Contain>
    <iframe seamless="seamless" src="http://flint-slack.herokuapp.com/"></iframe>
  </Contain>

  $iframe = {
    border: 'none',
    width: '100%',
    height: 350,
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