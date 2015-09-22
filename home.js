view Home {
  <Header />
  <What />
  <DemoVideo />
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
  @startIntro = false

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
            <Introduction start={@startIntro} />
          </head>
        }
        in={
          <Editor right
            lines={7}
            id="headeriframe"
            onLoad={() => {
              @startIntro = true
              triggerEvent('headeriframe', 'start')
            }}
            src="/assets/examples/example.html" />
        }
      />
    </main>
  </Contain>

  $ = {
    padding: [40, 0, 30],
    position: 'relative',
    overflow: 'hidden'
  }

  $Contain = {
    margin: [-35, 'auto', -5],

    [device.small]: {
      minWidth: 'auto',
      background: 'none'
    }
  }

  $main = {
    padding: [10, 0, 40]
  }
}

view Nav {
  scroll = e => {
    el = document.querySelector(e.target.getAttribute('href'))
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
    fontSize: 18,
    fontWeight: 300,

    [device.small]: {
      marginBottom: 0
    }
  }

  $a = [style.link, {
    border: 'none',
    fontFamily: font.sansSerif,
    padding: [0, 15]
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
  @started = ^start

  run = () => {
    if (@started)
      setTimeout(step, 1000)
  }

  this.componentDidUpdate = () => {
    if (^start && !@started) {
      @started = true
      run()
    }
  }

  phrases = ['faster', 'simpler', 'creatively']
  @desc = ''

  betweenPhrase = 3000
  typeSpeed = 130
  @phrasePos = 0
  @charPos = 0

  step = () => {
    if (@phrasePos == phrases.length) return

    Flint.batch(() => {
      // if typed to end of word
      if (@charPos === phrases[@phrasePos].length) {
        @charPos = -1
        @phrasePos += 1
        setTimeout(step, betweenPhrase)
      }
      // if typing word
      else {
        @charPos += 1
        @desc = phrases[@phrasePos].slice(0, @charPos)
        setTimeout(step, typeSpeed)
      }
    });
  }

  run()

  <desc>Web apps, {@desc}</desc>

  $desc = [{
    textAlign: 'center',
    fontSize: 28,
    lineHeight: '1.6rem',
    padding: [12, 0],
    fontWeight: 300,
    color: color.text,
    opacity: 0.9,
    margin: [0, 'auto', 5],
    display: 'block'
  }]
}

view What {
  <Contain strip bg={color.brand} color="#fff">
    <text>
      <primary>
        Bring your feedback loop down to <em>instant</em>
      </primary>
      <secondary>
        An ES6 view system that's faster and easier
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
    margin: [-8, 0],

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
      Flint introduces the view to ES6
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
    background: 'rgba(255,255,255,0.5)',
    padding: [0, 0, 40],
    margin: [40, 0, 0],
    border: '1px solid rgba(0,0,0,0.1)',
    borderLeft: 'none',
    borderRight: 'none'
  }
}

view Interlude {
  flip = (one, two) => Math.random() > 0.5 ? one : two
  rand = () => Math.round(Math.random() * 10) / 10

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
    backgroundColor: color.bg,
    color: color(color.text).rgba(0.2),
    position: 'relative',
    zIndex: 10,
    fontSize: 24
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
  @index = 0
  @tabs = null
  @srcs = null

  if (^sources) {
    @srcs = ^sources.map(s => s.url)
    @tabs = ^sources.map(s => s.title)
  }

  getSrc = () => ^src || @srcs[@index]

  <Toolbar
    tabs={@tabs}
    activeTab={@index}
    changeTab={i => @index = i} />
  <container>
    <iframe
      id={^id}
      src={getSrc()}
      onLoad={() => {
        console.log('loaded')
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
  demoBorder = 4

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

  border = '1px solid #ddd'

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
  features = [
    [`Works with React`, `Use any React component`],
    [`Automatic npm installs`, `Flint installs as you type`],
    [`Modern ES6, simplified`, `No need for *this* or classes`],
    [`Instant feedback`, `Browser hot updates as you type`],
    [`Fast builds & runtime`, `Compiler unlocks incredible speed`],
    [`Smart errors & tools`, `Inline errors and a state inspector`],
  ]

  <List items={features} />
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

  listColor = 'rgb(4, 139, 66)'

  $list = {
    maxWidth: 750,
    margin: [0, 'auto'],
    padding: [0, '5%'],
    borderRadius: 5,
    flexFlow: 'row',
    flexWrap: 'wrap',
    color: color(listColor).darken(0.2)
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
    fill: color,
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
  @started = false

  start = () => @started = true

  <Contain id="video">
    <inner>
      <poster if={false} />
      <YouTube />

      <overlay if={false} onClick={start}>
        <play>
          <PlayIcon color="#fff" />
        </play>
      </overlay>
    </inner>
  </Contain>

  $ = {
    textAlign: 'center',
    alignItems: 'center',
    margin: [45, 0, 0]
  }

  originalHeight = 900
  originalWidth = 1440
  scale = 0.5
  height = Math.round(originalHeight * scale)
  width = Math.round(originalWidth * scale)

  $inner = {
    width,
    height,
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'relative',

    [device.small]: {
      width: '100%',
      height: 'auto'
    }
  }

  $poster = {
    background: 'url(/assets/images/video-poster.jpg) no-repeat top left',
    backgroundSize: 'cover',
    position: [0,0,0,0]
  }

  $overlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    background: 'rgba(0,0,0,0.3)',
    cursor: 'pointer',
    alignItems: 'center',

    ':hover': {
      background: 'rgba(0,0,0,0.1)'
    }
  }

  $play = {
    margin: 'auto',
    padding: 10,
    color: '#fff',
    fontFamily: font.sansSerif,
    fontWeight: 700,
    background: color.brand,
    borderRadius: 100,
    top: '50%',
    left: '50%',

    ':hover': {
      background: chroma(color.brand).darken(0.5)
    }
  }
}

view YouTube {
  base = 'https://www.youtube.com/embed/VNfkk6lH0gg'
  params = '?rel=0&showinfo=0&VQ=HD720'

  getUrl = () => base + params + (^start ? '&autoplay=1' : '')

  <cover />
  <cover class="bot" />
  <iframe
    src={getUrl()}
    frameborder="0"
    device>
  </iframe>

  $ = {
    width: '100%',
    height: '100%',
    position: 'relative'
  }

  $iframe = {
    width: '100%',
    height: '100%',
    border: 'none'
  }

  $cover = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    background: color.bg
  }

  $.bot = {
    top: 'auto',
    bottom: 0,
    height: 5
  }
}

view Install {
  <Contain id="install" padTop>
    <inner>
      <code><b>npm install -g flint</b></code>
      <code class="small">flint new myapp</code>
      <code class="small">flint</code>
      <p>
        <a target="_blank" href="https://flintdev.gitbooks.io/flint/content/startmd.html">
          Follow the docs
        </a>
      </p>
    </inner>
  </Contain>

  $ = {
    textAlign: 'center'
  }

  $inner = {
    margin: [-6, 0, -40]
  }

  $code = {
    color: '#000',
    margin: [10, 0],
    width: '100%',
    fontFamily: font.monoSpace,
    fontSize: 28,

    [device.small]: {
      fontSize: 22
    }
  }

  $.small = {
    fontSize: 20,
    color: '#777',
    margin: [4, 0]
  }

  $b = style.textGradient

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
    <Title>Interested? Stay up to date:</Title>
    <SignupForm />
  </Contain>

  $ = {
    margin: [-50, 0, 40]
  }
}
