import chroma from 'chroma-js'

color = {}
color.brand = '#fa3732'
color.darkred = chroma(color.brand).darken(0.3)
color.bg = '#f2f2f2'
color.text = '#444'
color.strip = '#fff'

font = {}
font.serif = 'Georgia, serif'
font.sansSerif = 'Helvetica Neue, Helvetica, Arial, sans-serif'
font.monoSpace = 'Hack, Source Code Pro, Inconsolata, monospace'

title = {
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  textAlign: 'center',
  fontWeight: 300,
  color: color.text,
  fontSize: 30,
  margin: [40, 0, 30]
}

screen = {}
screen.small = '@media (max-width: 850px)'

view Main {
  <Header />
  <What />
  <Examples />
  <Features />
  <Install />
  <Video />
  <About />
  <FAQ if={false} />

  $ = {
    color: color.text,
    background: color.bg,
    fontSize: 18,
    fontFamily: font.serif,
    lineHeight: '2rem',
    overflow: 'hidden'
  }
}

view Header {
  @startIntro = false

  <main>
    <Example
      flipVertical
      maxWidth={860}
      inStyle={{
        maxWidth: 375
      }}
      out={
        <head>
          <Logo />
          <Introduction start={@startIntro} />
        </head>
      }
      in={
        <Editor right key="2"
          lines={9}
          onLoad={() => @startIntro = true}
          src="/examples/example.html" />
      }
    />
  </main>

  $ = {
    margin: [0, 0, -10],
    padding: [26, 0],
    position: 'relative',
    overflow: 'hidden'
  }
}

view What {
  <Contain strip>
    <p>
      Flint is a simple stack for React.
      It gives you everything you need to move fast
      & instantly updates your browser as you code.
    </p>
  </Contain>

  $ = {
    margin: [-70, 'auto', -55],
    position: 'relative',
    zIndex: 0,
    padding: [20, 0]
  }

  $p = {
    fontSize: 24,
    lineHeight: '3rem',
    textAlign: 'center',
    padding: [0, '15%'],
    margin: [-5, 0],
    opacity: 0.95,

    [screen.small]: {
      fontSize: 20
    }
  }
}

view Nav {
  <a target="_blank" href="http://flintdev.gitbooks.io/flint/content/">Docs</a>
  <a target="_blank" href="http://github.com/flintjs">Github</a>
  <a target="_blank" href="https://twitter.com/flint_js">Twitter</a>

  $ = {
    margin: [15, 'auto', -20],
    flexFlow: 'row',
    zIndex: 100,
    fontSize: 15,
    fontWeight: 300,
    textTransform: 'uppercase',

    [screen.small]: {
      marginBottom: 0
    }
  }

  $a = {
    color: '#888',
    textDecoration: 'none',
    fontFamily: font.sansSerif,
    padding: [0, 15],

    ':hover': {
      color: color.brand
    }
  }
}

view Logo {
  <img src="/images/flintlogo20.png" />

  $ = {
    flexFlow: 'row',
    margin: [-10, 0, -10],
    alignItems: 'center',
    justifyContent: 'center',

    [screen.small]: {
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

  phrases = ['faster', 'creatively', 'with ease']
  @desc = ''

  betweenPhrase = 4000
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

  // beforeRender = () => {
    // if (!@started && ^start) {
      setTimeout(step, 1380)
      // @started = true
    // }
  // }

  <desc>Web apps, {@desc}</desc>

  $desc = {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: '1.6rem',
    padding: [10, 0],
    fontWeight: 300,
    color: color.text,
    opacity: 0.9,
    margin: [0, 'auto'],
    display: 'block'
  }
}

view Examples {
  <Interlude>
    Flint simplifies JavaScript with the <em>view</em>
  </Interlude>

  <Example flip inPage
    maxWidth={760}
    in={<Editor lines={10} left light src="/examples/exampleCounter.html" />}
    out={<DemoCounter />} />

  <Interlude>
    Style elements using $ variables
  </Interlude>

  <Example inPage
    maxWidth={900}
    in={<Editor lines={15} left light src="/examples/exampleVenn.html" />}
    out={<DemoVenn />} />

  <Interlude>
    Flint is simple, but powerful. It works with npm & React
  </Interlude>

  <Example flip inPage
    maxWidth={900}
    in={
      <Editor left light
        lines={20}
        sources={[
          { title: 'Circles.js', url: '/examples/exampleCircles.html' },
          { title: 'Circle.js', url: '/examples/exampleCircle.html' }
        ]} />
    }
    out={<DemoCircles />} />
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
    margin: [0, 'auto'],
    padding: [0, 15],
    maxWidth: ^pad ? 600 : 'auto',
  }

  $section = {
    margin: [30, 0],
    borderRight: 'none',
    borderLeft: 'none',
    fontSize: ^fontSize || 19
  }

  $.simple = {
    border: 'none'
  }

  $p = {
    textAlign: 'center',
    margin: [8, 'auto'],
    padding: [0, 25],
    background: color.bg,
    color: chroma(color.text).rgba(0.2),
    position: 'relative',
    zIndex: 10
  }

  $strip = {
    borderBottom: '1px dotted rgba(0,0,0,0.2)',
    width: '80%',
    maxWidth: 950,
    margin: [-53, 'auto', 53],
    zIndex: 0,

    [screen.small]: {
      display: 'none'
    }
  }
}

view Example {
  <Contain maxWidth={^maxWidth || 1000}>
    <in class="split">{^in}</in>
    <out class="split">{^out}</out>
  </Contain>

  $ = {
    flexFlow: 'row',
    flexGrow: 1,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    [screen.small]: {
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

    [screen.small]: {
      width: '100%',
      order: ^flipVertical ? 1 : 2,
      padding: ^inPage ? '50px 0' : 0
    }
  }

  $in = [^inStyle, {
    order: ^flip ? 1 : 2,
    zIndex: 10,
    margin: 0,

    [screen.small]: {
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
      src={getSrc()}
      onLoad={() => {
        if (^onLoad)
          ^onLoad()
      }}>
    </iframe>
  </container>

  $ = {
    flexFlow: 'column',
    height: ^lines ? 32 + (25 * ^lines) : '100%',
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

    [screen.small]: {
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
    padding: 5,
    overflow: 'hidden',
    background: ^light ? '#fff' : '#263640',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

    [screen.small]: {
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
  text = [
    [`Works with React`, `Use any React component`],
    [`Automatic npm installs`, `Flint installs as you type`],
    [`Modern ES6, simplified`, `No need for *this* or classes`],
    [`Instant feedback`, `Browser hot updates as you type`],
    [`Fast builds & runtime`, `Compiler unlocks incredible speed`],
    [`Smart errors & tools`, `Inline errors and a state inspector`],
  ]

  <Contain strip>
    <list>
      <item repeat={text} key={_}>
        <Check class="check" />

        <text>
          <feature>{_[0]}</feature>
          <description>{_[1]}</description>
        </text>
      </item>
    </list>
  </Contain>

  $ = {
    margin: [0, 'auto'],
    fontSize: 20
  }

  color = 'rgb(4, 139, 66)'

  $list = {
    maxWidth: 750,
    margin: [0, 'auto'],
    padding: [0, '5%'],
    borderRadius: 5,
    flexFlow: 'row',
    flexWrap: 'wrap',
    color: chroma(color).darken(0.2)
  }

  $item = {
    margin: [12, 0],
    padding: [0, 10, 0, 15],
    lineHeight: '1.5rem',
    width: '50%',
    flexFlow: 'row',
    textAlign: 'center',

    [screen.small]: {
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

view About {
  <Contain pad>
    <p>
      Views are an amazingly simple abstraction
      but with no clear or productive way to build with today.
      Assembling a best-practice frontend stack takes months to learn and
      assemble, with never-ending caretaking.
    </p>
    <p>
      We are <em>writing around the library </em>
      rather than having an intuitive language that understands
      how we build.
      Flint's ES6 JavaScript parser focuses the language on views and simple
      functions, giving you incredible power and simplicity.
      It also lets you avoid the burden of maintaining your own custom
      set of tools and stack.
    </p>
    <p>
      We want to allow developers to be maximally creative.
      Let's make developer experience amazing with:
    </p>
    <ul>
      <li>Light abstractions that enable speed</li>
      <li>Immediate feedback and helpful errors</li>
      <li>A consistent and powerful environment</li>
      <li>Smart tooling and integration</li>
    </ul>
  </Contain>

  $ = {
    margin: [-20, 'auto'], //offset for p space
    padding: [0, 60, 50],
    fontSize: 20,
    lineHeight: '2rem',

    [screen.small]: {
      padding: 0,
      paddingBottom: 50
    }
  }

  $p = { marginBottom: 0 }
  $li = { margin: [10, 0, 0] }

  $h2 = title
}

view Video {
  @started = false
  id = 'video-' + Math.random()

  start = () => {
    @started = true
    document.getElementById(id).play()
  }

  <Contain strip>
    <section>
      <videocontain>
        <video id={id} controls={@started} poster="/images/video-poster.jpg">
          <source
            src="https://s3-us-west-1.amazonaws.com/flint123/flint2.mp4"
            type="video/mp4" />
          <a
            href="https://www.youtube-nocookie.com/embed/VNfkk6lH0gg?rel=0&amp;showinfo=0">
            See on YouTube
          </a>
        </video>

        <overlay if={!@started} onClick={start}>
          <play>
            Watch 3 minute live demo
          </play>
        </overlay>
      </videocontain>
    </section>
  </Contain>

  $ = {
    position: 'relative',
    zIndex: 0,
  }

  $section = {
    textAlign: 'center',
    alignItems: 'center',
    margin: [40, 'auto']
  }

  originalHeight = 877
  originalWidth = 1440
  scale = 0.5
  height = Math.round(originalHeight * scale)
  width = Math.round(originalWidth * scale)

  $videocontain = {
    width,
    height,
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'relative',

    [screen.small]: {
      width: '100%',
      height: 'auto'
    }
  }

  $video = {
    border: 'none',
    width: '100%',
    height: '100%'
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

    ':hover': {
      background: 'rgba(0,0,0,0.1)'
    }
  }

  $play = {
    position: 'absolute',
    height: 50,
    marginTop: -25,
    width: 350,
    marginLeft: -175,
    padding: 10,
    color: '#fff',
    fontFamily: font.sansSerif,
    fontWeight: 700,
    background: color.brand,
    borderRadius: 10,
    top: '50%',
    left: '50%',

    ':hover': {
      background: chroma(color.brand).darken(0.5)
    }
  }
}

// <section if={false}>
//   <p>Watch a 2 minute demo that explains more behind Flint.</p>
//
//   <videocontain>
//     <video controls>
//       <source
//         src="https://s3-us-west-1.amazonaws.com/flint123/flint1.mp4"
//         type="video/mp4" />
//       <a
//         href="https://www.youtube-nocookie.com/embed/VNfkk6lH0gg?rel=0&amp;showinfo=0">
//         See on YouTube
//       </a>
//     </video>
//   </videocontain>
// </section>

view Install {
  <Contain>
    <code><b>npm install -g flint</b></code>
    <code class="small">flint new myapp</code>
    <code class="small">flint</code>
  </Contain>

  $ = {
    textAlign: 'center'
  }

  $h2 = title

  $code = {
    color: '#000',
    margin: [10, 0],
    width: '100%',
    fontFamily: font.monoSpace,
    fontSize: 28,

    [screen.small]: {
      fontSize: 22
    }
  }

  $.small = {
    fontSize: 20,
    color: '#777',
    margin: [4, 0]
  }
}

view Check {
  <check-svg width="400px" height="400px" viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;">
    <g>
      <path d="M199.996,0C89.713,0,0,89.72,0,200s89.713,200,199.996,200S400,310.28,400,200S310.279,0,199.996,0z M199.996,373.77 C104.18,373.77,26.23,295.816,26.23,200c0-95.817,77.949-173.769,173.766-173.769c95.817,0,173.771,77.953,173.771,173.769 C373.768,295.816,295.812,373.77,199.996,373.77z"/>
      <path d="M272.406,134.526L169.275,237.652l-41.689-41.68c-5.123-5.117-13.422-5.12-18.545,0.003 c-5.125,5.125-5.125,13.425,0,18.548l50.963,50.955c2.561,2.558,5.916,3.838,9.271,3.838s6.719-1.28,9.279-3.842 c0.008-0.011,0.014-0.022,0.027-0.035L290.95,153.071c5.125-5.12,5.125-13.426,0-18.546 C285.828,129.402,277.523,129.402,272.406,134.526z"/>
    </g>
  </check-svg>
}

view Contain {
  <contain>
    {^children}
    <strip if={^strip} />
    <strip class="end" if={^strip} />
  </contain>

  topPad = ^strip ? 60 : 0
  padding = ^pad ? [topPad, '15%'] : [topPad, 0]

  $ = {
    background: ^bg || ^strip ? color.strip : 'transparent',
    maxWidth: ^maxWidth || 1050,
    width: '100%',
    color: ^color || 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
    flexShrink: 0,
    margin: [^strip ? 30 : 0, 'auto'],
    padding,
    position: 'relative',
    zIndex: 10
  }

  $strip = {
    background: color.bg,
    height: 40,
    width: '140%',
    position: 'absolute',
    top: -20,
    left: -100,
    zIndex: 0,
    transform: {
      rotate: '-1.2deg'
    }
  }

  $.end = {
    top: 'auto',
    bottom: -20,
    left: -100,
  }
}

view FAQ {
  <Contain pad strip>
    <h2>FAQ</h2>

    <question>
      What is this? A view layer? A framework? A language?
    </question>
    <answer>
      It's
    </answer>
  </Contain>

  $ = {
    margin: [-20, 0], //offset for p space
    padding: [0, 20, 50],
    lineHeight: '1.8rem'
  }

  $h2 = title

  $p = {
    margin: [10, 0]
  }

  $intro = {
    fontSize: 16,
    padding: 20,
    border: '1px solid #ddd'
  }

  $question = {
    fontWeight: 'bold'
  }
}
