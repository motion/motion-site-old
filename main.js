import chroma from 'chroma-js'

sansSerif = 'Helvetica Neue, Helvetica, Arial, sans-serif'
screen = {}
screen.small = '@media (max-width: 800px)'

view Main {
  <Header />
  <Examples />
  <Install />
  <Features />
  <About />
  <Video />

  $ = {
    color: '#444',
    fontSize: 18,
    fontFamily: 'Georgia',
    lineHeight: '2rem',
    margin: 'auto',
    overflowX: 'hidden'
  }
}

view Header {
  @startIntro = false

  <Example
    flipVertical
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
    } />
  <strip />

  $ = {
    flexFlow: 'row',
    margin: 0,
    padding: [40, 0, 0],
    position: 'relative',
    overflow: 'hidden'
  }

  $strip = {
    position: [-980, -900, , 0],
    background: '#eee',
    transform: { rotate: '1deg' },
    height: 1000
  }
}

view Nav {
  // <a if={false} href="http://flintdev.gitbooks.io/flint/content/">Docs</a>

  <a target="_blank" href="https://twitter.com/flint_js">&#64;flint_js</a>

  $ = {
    position: 'absolute',
    top: 5,
    right: 0,
    flexFlow: 'row',
    zIndex: 100,
    fontSize: 14
  }

  $a = {
    color: '#666',
    textDecoration: 'none',
    fontFamily: sansSerif,
    padding: [0, 10]
  }
}

view Logo {
  <img src="/images/flint-small.png" srcset="/images/flint.png 2x" />

  $ = {
    flexFlow: 'row',
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'center'
  }

  $img = {
    width: 159,
    height: 79,
    margin: [0, 'auto', 10]
  }
}

view Introduction {
  <h2>Improve development</h2>
  <Desc />

  $ = {
    padding: [10, 20],
    fontFamily: sansSerif,
    textAlign: 'center'
  }

  title = {
    margin: [5, 0],
    lineHeight: '1.4em',
    textAlign: 'center'
  }

  $h2 = [title, {
    color: '#444',
    fontSize: 26,
    fontWeight: 300
  }]
}

view Desc {
  phrases = ['powerfully fast', 'without boilerplate', 'more creatively']
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

  setTimeout(step, 1350)

  <desc>Write web apps {@desc}</desc>

  $desc = {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: '1.6rem',
    padding: [5, 0],
    fontWeight: 300,
    color: '#666',
    margin: [0, 'auto'],
    display: 'block'
  }
}

view Examples {
  <Interlude>
    Flint simplifies ES6 and introduces the <em>view</em>
  </Interlude>

  <Example flip inPage
    in={<Editor lines={10} left light src="/examples/exampleCounter.html" />}
    out={<DemoCounter />} />

  <Interlude>
    Views let your style elements using $ variables
  </Interlude>

  <Example inPage
    in={<Editor lines={15} left light src="/examples/exampleVenn.html" />}
    out={<DemoVenn />} />

  <Interlude>
    Click around to create bubbles...
  </Interlude>

  <Example flip inPage
    in={
      <Editor left light
        lines={15}
        src="/examples/exampleVenn.html"
        src2="/examples/exampleVenn.html" />
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

  $section = {
    color: '#585858',
    margin: [35, 0],
    borderRight: 'none',
    borderLeft: 'none',
    fontSize: 19
  }

  $.simple = {
    border: 'none'
  }

  $p = {
    textAlign: 'center',
    margin: [5, 0]
  }
}

view Example {
  <Contain key={Math.random()}>
    <in class="split">{^in}</in>
    <out class="split">{^out}</out>
  </Contain>

  $ = {
    flexFlow: 'row',
    flexGrow: 1,
    fontFamily: sansSerif,

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
      padding: ^inPage ? '50px 0' : 0,
      borderBottom: ^inPage ? '1px solid #ddd' : 'none'
    }
  }

  $in = {
    order: ^flip ? 1 : 2,
    zIndex: 10,
    margin: [-10, 0, 0],

    [screen.small]: {
      width: '90%',
      margin: 'auto',
      order: ^flipVertical ? 2 : 1
    }
  }
}

view Editor {
  <Toolbar />
  <iframe src={^src} onLoad={^onLoad}></iframe>
  <iframe if={^src2} src={^src2}></iframe>

  $ = {
    flexFlow: 'column',
    height: ^lines ? 20 + (27 * ^lines) : '100%',
    border: '1px solid #eee',
    borderRadius: 6,
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    margin: 10,
    marginRight: ^right ? -10 : 10,
    marginLeft: ^left ? -10 : 10,
    fontFamily: 'Hack, monospace',
    position: 'relative',
    zIndex: 10,

    [screen.small]: {
      marginRight: 10,
      marginLeft: 10,
    }
  }

  $iframe = {
    border: 'none',
    height: '100%',
    width: '100%',
    padding: 5,
    overflow: 'hidden',
    pointerEvents: 'none',
    background: ^light ? '#fff' : '#263640',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  }
}

view Toolbar {
  demoBorder = 4

  <toolbar>
    <ctrl class="close" />
    <ctrl class="max" />
    <ctrl class="open" />
  </toolbar>

  $ = {
    background: '#fefefe',
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
    `Works on React`,
    `Automatic npm installs`,
    `Modern ES6, simplified`,
    `Instant updates as you type`,
    `Faster runtime`,
    `Smart errors and tools`,
  ]

  <Contain>
    <list>
      <item repeat={text} key={_}>
        <Check class="check" />
        {_}
      </item>
    </list>
  </Contain>

  $ = { margin: [0, 'auto', 30] }

  color = 'rgb(4, 139, 66)'

  $list = {
    maxWidth: 650,
    margin: [0, 'auto'],
    padding: [0, '5%'],
    borderRadius: 5,
    flexFlow: 'row',
    flexWrap: 'wrap',
    color: chroma(color).darken(0.2)
  }

  $item = {
    margin: [8, 0],
    padding: [0, 10],
    lineHeight: '1.5rem',
    width: '50%',
    flexFlow: 'row',
    textAlign: 'center',

    [screen.small]: {
      width: '100%',
      justifyContent: 'center'
    }
  }

  $.check = {
    width: 20,
    height: 20,
    fill: color,
    margin: [1, 10, -3, 0]
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
      Flint's + ES6 focuses the language on views and simple
      functions, giving you incredible power and simplicity
      while avoiding the burden of learning and maintaining a complex stack.
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
    padding: [0, 20, 50],
    lineHeight: '1.8rem',

    [screen.small]: {
      padding: 0
    }
  }

  $p = { marginBottom: 0 }
  $li = { margin: [10, 0, 0] }

  $h2 = {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    textAlign: 'center',
    fontWeight: 300,
    fontSize: 24
  }
}

view Video {
  <Contain>
    <center>
      <h2>Learn more</h2>
      <p>
        Watch a 5 minute video that explains more behind Flint.
      </p>
      <video controls>
        <source
          src="https://s3-us-west-1.amazonaws.com/flint123/flintdemo.mp4"
          type="video/mp4" />
        <a
          href="https://www.youtube-nocookie.com/embed/VNfkk6lH0gg?rel=0&amp;showinfo=0">
          See on YouTube
        </a>
      </video>
      <desc>
        Start from 2:13 to see the live demonstration.
      </desc>
    </center>
  </Contain>
  <strip />

  $ = {
    background: 'linear-gradient(-65deg, #fff, #f2f2f2)',
    position: 'relative',
    zIndex: 0,
  }

  $center = {
    margin: 'auto',
    padding: [50, 0],
    textAlign: 'center',
    alignItems: 'center'
  }

  $video = {
    border: 'none',
    width: '100%',
    height: '100%',
    maxHeight: 450,
    maxWidth: 672
  }

  $desc = {
    display: 'block',
    fontSize: 16,
    padding: [10, 0]
  }

  $strip = {
    background: '#fff',
    height: 100,
    width: '140%',
    position: 'absolute',
    top: -90,
    left: -100,
    transform: {
      rotate: '-1deg'
    }
  }
}

view Install {
  <code>npm install -g flint</code>
  <code class="small">flint new myapp</code>
  <code class="small">flint</code>

  $ = {
    margin: [60, 0]
  }

  $code = [{
    color: '#000',
    margin: [10, 0],
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Hack, monospace',
    fontSize: 28
  }, ^small && {
    padding: [2, 0, 20],
    fontSize: 18,
    color: '#B44944',
    background: 'none',
    margin: [0, 0, -60],
  }]

  $.small = {
    fontSize: 18,
    color: '#777',
    margin: 0
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
  <contain yield />

  $ = {
    maxWidth: 1050,
    width: '100%',
    margin: 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
    flexShrink: 0,
    padding: ^pad ? [0, '20%'] : 0,
    position: 'relative',
    zIndex: 10,

    [screen.small]: {
      padding: 0
    }
  }
}
