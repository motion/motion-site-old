import chroma from 'chroma-js'

util = {}
// to keep isomorphism (for now, should be handled by flint in future)
if (typeof window != 'undefined') {
  util.docOffset = require('document-offset')
  util.scroll = require('scroll')
}

color = {}
color.brand = '#fa3732'
color.brand1 = '#E86C3D'
color.brand2 = '#DB415E'
color.darkred = chroma(color.brand).darken(0.3)
color.bg = '#f2f2f2'
color.text = '#444'
color.strip = '#fff'

font = {}
font.serif = 'Lato, Georgia, serif'
font.sansSerif = 'Helvetica Neue, Helvetica, Lato, Arial, sans-serif'
font.monoSpace = 'Hack, Source Code Pro, Inconsolata, monospace'

screen = {}
screen.small = '@media (max-width: 850px)'

style = {}
style.textGradient = {
  background: `-webkit-linear-gradient(left,
    ${chroma(color.brand1).darken(0.6)},
    ${chroma(color.brand2).darken(0.6)})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

view Main {
  <Header />
  <What />
  <Examples />
  <Video />
  <Install />
  <Features />
  <Slack />
  <Signup />
  <Footer />

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
    padding: [25, 0],
    position: 'relative',
    overflow: 'hidden'
  }
}

view What {
  <Contain strip>
    <text>
      <primary>
        Frontend development, maximally creative
      </primary>
      <secondary>
        React apps with instant hot updates and no boilerplate.
      </secondary>
    </text>
  </Contain>

  $ = {
    margin: [-40, 'auto'],
    position: 'relative',
    zIndex: 0,
    textAlign: 'center'
  }

  $text = {
    fontSize: 28,
    lineHeight: '2.5rem',
    margin: [-8, 0],

    [screen.small]: {
      fontSize: 20
    }
  }

  $secondary = {
    fontSize: 22,
    opacity: 0.75,
    margin: [4, 'auto', 0],
    flexFlow: 'row',

    [screen.small]: {
      fontSize: 18
    }
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

    [screen.small]: {
      marginBottom: 0
    }
  }

  $a = {
    color: '#777',
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
    margin: [0, 0, -15],
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

  $desc = [style.textGradient, {
    textAlign: 'center',
    fontSize: 30,
    lineHeight: '1.6rem',
    padding: [10, 0],
    fontWeight: 300,
    color: color.text,
    opacity: 0.9,
    margin: [0, 'auto', 5],
    display: 'block'
  }]
}

view Examples {
  <Interlude>
    Flint introduces the view to ES6
  </Interlude>

  <Example flip inPage
    maxWidth={760}
    in={<Editor lines={10} left light src="/examples/exampleCounter.html" />}
    out={<DemoCounter />} />

  <Interlude>
    Style views easily with $ variables
  </Interlude>

  <Example inPage
    maxWidth={900}
    in={<Editor lines={15} left light src="/examples/exampleVenn.html" />}
    out={<DemoVenn />} />

  <Interlude>
    Flint works with ES6, npm & React
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

  $p = [style.textGradient, {
    textAlign: 'center',
    margin: [8, 'auto'],
    padding: [0, 25],
    backgroundColor: color.bg,
    color: chroma(color.text).rgba(0.2),
    position: 'relative',
    zIndex: 10,
    fontSize: 20
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
    height: ^lines ? 26 + (24 * ^lines) : '100%',
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
    padding: 3,
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

view MoreFeatures {
  features = [
    [`CSS in JavaScript`],
    [`Unimorphic/Isoversal`],
    [`Easy Data with Stores`],
    [`One command publish to CDN`],
    [`Fast builds & runtime`],
    [`Smart errors & tools`],
  ]

  <List items={features} />
  $ = false
}

view List {
  <Contain strip>
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
    margin: [12, 0, 8],
    padding: [0, 10],
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

view Video {
  @started = false
  id = 'video-' + Math.random()

  start = () => {
    @started = true
    document.getElementById(id).play()
  }

  <Contain id="video" padTop>
    <Social />
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
          Watch the 3 minute live demo
        </play>
      </overlay>
    </videocontain>
  </Contain>

  $ = {
    position: 'relative',
    zIndex: 0,
    textAlign: 'center',
    alignItems: 'center',
  }

  $Social = {
    margin: [-50, 0, 50]
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
    height: '100%',
    borderRadius: 6
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
    borderRadius: 6,

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
  <Contain id="install">
    <inner>
      <code><b>npm install -g flint</b></code>
      <code class="small">flint new myapp</code>
      <code class="small">flint</code>
      <p>
        <a target="_blank" href="https://flintdev.gitbooks.io/flint/content/startmd.html">
          Documentation
        </a>
      </p>
    </inner>
  </Contain>

  $ = {
    textAlign: 'center',
    marginTop: -30
  }

  $inner = {
    margin: [-6, 0]
  }

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

  $b = style.textGradient

  $a = {
    textDecoration: 'none'
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
  <contain id={^id}>
    <Title if={^title}>{^title}</Title>
    {^children}
    <strip if={^strip} />
    <strip class="end" if={^strip} />
  </contain>

  topPad = ^padTop ? 80 : (^strip ? 60 : 0)
  padding = ^pad ? [topPad, '15%'] : [topPad, 0]

  $ = {
    background: ^bg || (^strip ? color.strip : 'transparent'),
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

view Title {
  <h2 yield />
  $ = false

  $h2 = [style.textGradient, {
    fontSize: 22,
    margin: [10, 'auto', 20],
    padding: 10,
    fontStyle: 'italic',
    textAlign: 'center'
  }]
}

view Footer {
  <Contain pad strip maxWidth="auto" id="footer">
    <content>
      <Nav />

      <br />

      <p>
        Flint is just getting started,
        we'd love your feedback!
      </p>
    </content>
  </Contain>

  $ = {
    margin: [0, 0, -100],
    textAlign: 'center',
    fontSize: 16
  }

  $content = {
    margin: [20, 0, 80]
  }

  $p = {
    fontWeight: 'bold'
  }
}

view Social {
  <Sub>
    <a target="_blank" href="http://github.com/flintjs">
      <IconGithub />
    </a>
    <a target="_blank" href="https://twitter.com/flint_js">
      <IconTwitter />
    </a>
  </Sub>

  $a = ^tiny ?  {
    margin: [0, 5, -20],
    transform: {
      scale: 0.75
    }
  } : {
    margin: [0, 20]
  }
}

view Sub {
  <sub yield />

  $sub = {
    flexFlow: 'row',
    textAlign: 'center',
    fontSize: 16,
    margin: [-5, 'auto'],
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  }
}

icon = {
  width: 32,
  height: 32,
  transition: 'all ease-in 200ms',
  opacity: 0.5,
  filter: 'grayscale(1)',

  ':hover': {
    opacity: 1,
    filter: 'none'
  }
}

view IconGithub {
  <svg viewBox="0 0 1024 1024">
    <path fill="#555" d="M512 0C229.252 0 0 229.25199999999995 0 512c0 226.251 146.688 418.126 350.155 485.813 25.593 4.686 34.937-11.125 34.937-24.626 0-12.188-0.469-52.562-0.718-95.314-128.708 23.46-161.707-31.541-172.469-60.373-5.525-14.809-30.407-60.249-52.398-72.263-17.988-9.828-43.26-33.237-0.917-33.735 40.434-0.476 69.348 37.308 78.471 52.75 45.938 77.749 119.876 55.627 148.999 42.5 4.654-32.999 17.902-55.627 32.501-68.373-113.657-12.939-233.22-56.875-233.22-253.063 0-55.94 19.968-101.561 52.658-137.404-5.22-12.999-22.844-65.095 5.063-135.563 0 0 42.937-13.749 140.811 52.501 40.811-11.406 84.594-17.031 128.124-17.22 43.499 0.188 87.314 5.874 128.188 17.28 97.689-66.311 140.686-52.501 140.686-52.501 28 70.532 10.375 122.564 5.124 135.499 32.811 35.844 52.626 81.468 52.626 137.404 0 196.686-119.751 240-233.813 252.686 18.439 15.876 34.748 47.001 34.748 94.748 0 68.437-0.686 123.627-0.686 140.501 0 13.625 9.312 29.561 35.25 24.562C877.436 929.998 1024 738.126 1024 512 1024 229.25199999999995 794.748 0 512 0z" />
  </svg>

  $ = false
  $svg = icon
}

view IconTwitter {
  <svg viewBox="0 0 155 158">
    <g transform="translate(-290,-381)">
      <path
         fill="#2aa9e0"
         d="m 453.82593,412.80619 c -6.3097,2.79897 -13.09189,4.68982 -20.20852,5.54049 7.26413,-4.35454 12.84406,-11.24992 15.47067,-19.46675 -6.79934,4.03295 -14.3293,6.96055 -22.34461,8.53841 -6.41775,-6.83879 -15.56243,-11.111 -25.68298,-11.111 -19.43159,0 -35.18696,15.75365 -35.18696,35.18525 0,2.75781 0.31128,5.44359 0.91155,8.01875 -29.24344,-1.46723 -55.16995,-15.47582 -72.52461,-36.76396 -3.02879,5.19662 -4.76443,11.24048 -4.76443,17.6891 0,12.20777 6.21194,22.97747 15.65332,29.28716 -5.76773,-0.18265 -11.19331,-1.76565 -15.93716,-4.40083 -0.004,0.14663 -0.004,0.29412 -0.004,0.44248 0,17.04767 12.12889,31.26806 28.22555,34.50266 -2.95247,0.80436 -6.06101,1.23398 -9.26989,1.23398 -2.2673,0 -4.47114,-0.22124 -6.62011,-0.63114 4.47801,13.97857 17.47214,24.15143 32.86992,24.43441 -12.04227,9.43796 -27.21366,15.06335 -43.69965,15.06335 -2.84014,0 -5.64082,-0.16722 -8.39349,-0.49223 15.57186,9.98421 34.06703,15.8094 53.93768,15.8094 64.72024,0 100.11301,-53.61524 100.11301,-100.11387 0,-1.52554 -0.0343,-3.04251 -0.10204,-4.55261 6.87394,-4.95995 12.83891,-11.15646 17.55618,-18.21305 z" />
    </g>
  </svg>

  $ = false
  $svg = [icon, {
    opacity: 0.6
  }]
}

view IconSlack {
  <svg viewBox="0 0 90 90">
    <g transform="translate(-19, -19)">
      <path d="M59.1,104.3c-3.2,0-5.7-1.8-6.8-4.8c-0.8-2.3-1.6-4.6-2.3-6.9c-0.2-0.7-0.5-0.9-1.3-0.6c-2.1,0.8-4.3,1.5-6.5,2.2 c-3,0.9-5.8,0.6-7.9-1.8c-3.3-3.6-1.7-9.5,2.9-11.2c2.3-0.9,4.6-1.6,7-2.3c0.7-0.2,0.9-0.5,0.7-1.3c-1.5-4.4-3-8.8-4.5-13.3 c-0.3-0.8-0.6-0.9-1.4-0.7c-2.2,0.8-4.4,1.6-6.6,2.3c-2.5,0.8-4.9,0.6-7-1.3c-3.9-3.5-2.6-9.8,2.3-11.6c2.3-0.8,4.6-1.6,6.9-2.3 c0.8-0.3,1-0.6,0.7-1.4c-0.8-2.1-1.5-4.3-2.2-6.5c-1.6-4.9,1.4-9.3,6.5-9.6c2.9-0.2,5.8,1.8,6.9,4.6c0.8,2.3,1.6,4.7,2.4,7 c0.2,0.8,0.6,0.9,1.3,0.7c4.4-1.5,8.8-3,13.3-4.4c0.8-0.2,0.9-0.5,0.7-1.3c-0.8-2.2-1.5-4.4-2.2-6.5c-1.3-4,0.5-8,4.4-9.3 c3.9-1.3,7.8,0.7,9.2,4.8c0.7,2.2,1.5,4.4,2.2,6.5c0.2,0.8,0.6,0.9,1.3,0.7c2.6-0.9,5.1-1.9,7.8-2.5c4.3-0.9,8.3,2.5,8.2,6.7 c-0.1,2.7-2.1,5.2-5.1,6.2c-2.2,0.8-4.4,1.5-6.6,2.2c-0.8,0.2-0.9,0.6-0.6,1.3c1.6,4.5,3.1,8.9,4.6,13.4c0.2,0.7,0.5,0.9,1.2,0.6 c2.4-0.8,4.8-1.7,7.2-2.4c4.1-1.3,8.3,1,9.1,5c0.8,3.9-0.7,6.6-4.7,8.1c-2.4,0.9-4.8,1.7-7.3,2.5c-0.7,0.2-0.8,0.5-0.5,1.1 c0.8,2.3,1.6,4.6,2.3,6.9c1.6,4.6-1.1,8.9-5.9,9.6c-3.2,0.4-6.4-1.6-7.5-4.8c-0.8-2.3-1.6-4.7-2.4-7c-0.2-0.7-0.5-0.9-1.2-0.6 c-4.5,1.6-9,3.1-13.5,4.6c-0.6,0.2-0.7,0.5-0.5,1.1c0.8,2.4,1.7,4.8,2.4,7.2C67.3,99.8,64,104.3,59.1,104.3z M68.3,53.8 c-0.2,0.1-0.4,0.1-0.6,0.2c-4.5,1.5-8.9,3-13.4,4.5c-0.6,0.2-0.8,0.5-0.6,1.1c1.6,4.5,3.1,9.1,4.6,13.7c0.2,0.6,0.4,0.7,1,0.5 c4.5-1.5,9.1-3.1,13.7-4.6c0.7-0.2,0.8-0.5,0.5-1.1c-0.5-1.5-1-3-1.5-4.5c-1-3-2.1-6.1-3.1-9.1C68.9,54.2,68.9,53.7,68.3,53.8z" />
    </g>
  </svg>

  $ = icon
}


view Slack {
  <Contain>
    <iframe seamless="seamless" src="http://flint-slack.herokuapp.com/"></iframe>
  </Contain>

  $ = {
    padding: [10, 0, 0]
  }

  $iframe = {
    border: 'none',
    width: '100%',
    height: 350,
    overflow: 'hidden'
  }
}

view Signup {
  <Contain pad>
    <Title>Insider Mailing List</Title>
    <SignupForm />
  </Contain>

  $ = {
    margin: [-40, 0, 0]
  }
}
