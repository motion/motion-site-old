import chroma from 'chroma-js'

screen = {
  small: '@media (max-width: 840px)'
}

view Main {
  <Header />

  <Interlude>
    Flint simplifies ES6 and introduces the <b>view</b>.
  </Interlude>

  <Example
    flip
    in={<Editor left light src="/examples/example2.html" />}
    out={<Demo2 />} />

  <Interlude>
    Use views anywhere with ease...
  </Interlude>

  <Example
    in={<Editor right light src="/examples/example3.html" />}
    out={<Demo3 />} />

  <Interlude>
    Style elements easily
  </Interlude>

  <Example
    flip
    in={<Editor left light src="/examples/example3.html" />}
    out={<Demo4 />} />

  <Install />
  <Features />
  <About />
  <Video />

  $ = {
    color: '#333',
    fontSize: 18,
    fontFamily: 'Georgia',
    lineHeight: '2rem',
    margin: 'auto',
    overflowX: 'hidden'
  }
}

view Interlude {
  <Contain>
    <section>
      <p>
        {^children}
      </p>
    </section>
  </Contain>

  $section = {
    margin: [20, 0],
    padding: [15, 0],
    borderRight: 'none',
    borderLeft: 'none',
    fontSize: 20,
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
  <Contain>
    <in class="split">{^in}</in>
    <out class="split">{^out}</out>
  </Contain>

  $ = {
    flexFlow: 'row',
    flexGrow: 1
  }

  $.split = {
    width: '50%'
  }

  $out = {
    justifyContent: 'center',
    position: 'relative',
    order: ^flip ? 2 : 1,

    [screen.small]: {
      width: '100%'
    }
  }

  $in = {
    order: ^flip ? 1 : 2,
    zIndex: 10,
    margin: [-10, 0, 10],
    height: ^height || 280,

    [screen.small]: {
      display: 'none'
    }
  }
}

view Header {
  @startIntro = false
  height = 280

  <Example
    out={
      <div>
        <Logo />
        <Introduction start={@startIntro} />
      </div>
    }
    in={
      <Editor
        key="2"
        right
        height={height}
        onLoad={() => @startIntro = true}
        src="/examples/example.html" />
    } />
  <strip />
  <strip class="alt" />

  $ = {
    flexFlow: 'row',
    margin: 0,
    padding: [55, 0, 65],
    background: "#f3f3f3",
    position: 'relative',
    overflow: 'hidden'
  }

  $Editor = {
    margin: [0, 0, -100, 0]
  }

  $strip = {
    background: '#fff',
    height: 100,
    width: '140%',
    position: 'absolute',
    bottom: -90,
    left: -100,
    zIndex: 10,
    transform: {
      rotate: '1deg'
    }
  }

  $.alt = {
    background: 'rgb(235, 235, 235)',
    height: 1500,
    width: '140%',
    top: -100,
    right: -1000,
    zIndex: 0,
    left: 'auto',
    transform: {
      rotate: '-40deg'
    }
  }
}

view Editor {
  <Toolbar />
  <iframe src={^src} onLoad={^onLoad}></iframe>

  $ = {
    flexFlow: 'column',
    height: ^height || '100%',
    border: '2px solid #ddd',
    borderWidth: ^light ? 1 : 2,
    borderRadius: 6,
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    margin: 10,
    marginRight: ^right ? -10 : 10,
    marginLeft: ^left ? -10 : 10,
    background: ^light ? '#fff' : '#1E2B33',
    fontFamily: 'monospace',
    position: 'relative',
    zIndex: 10,

    '@media (max-width: 800px)': {
      display: 'none'
    }
  }

  $iframe = {
    height: '100%',
    border: 'none',
    padding: 5,
    overflow: 'hidden'
  }
}

view Logo {
  <img src="/images/flint-small.png" srcset="/images/flint.png 2x" />

  $ = {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }

  $img = {
    margin: [-10, 0, -10]
  }
}

view Introduction {
  phrases = ['powerfully fast', 'without boilerplate', 'more creatively']
  @desc = ''

  delayTime = 4000
  @phrase = 0
  @pos = 0

  run = () => {
    @typer = setInterval(step, 130)
  }

  setTimeout(run, 1300)

  step = () => {
    Flint.batch(() => {
      if (@phrase == phrases.length)
        return clearInterval(@typer)

      // if typed to end of word
      if (@pos === phrases[@phrase].length) {
        @pos = -1
        @phrase += 1
        @delay = delayTime
      }

      if (@delay > 0) {
        @delay -= 100
        return
      }

      @pos += 1

      @desc = phrases[@phrase].slice(0, @pos)
    });
  }

  <h2>Radically improved development</h2>
  <desc>Write web apps {@desc}.</desc>

  $ = {
    padding: [25, 20, 0],
    fontFamily: 'Helvetica Neue, Helvetica, Arail, sans-serif',
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
    fontWeight: 300,
  }]

  $desc = {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: '1.6rem',
    padding: [5, 0, 0],
    fontWeight: 300,
    width: '80%',
    color: '#666',
    margin: [0, 'auto'],
    display: 'block',
    height: 10
  }
}

demoBorder = 4

view Toolbar {
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

  $ = { margin: [0, 'auto'] }

  color = 'rgb(4, 139, 66)'

  $list = {
    maxWidth: '80%',
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
    background: '#f2f2f2',
    position: 'relative',
    zIndex: 0,
  }

  $center = {
    margin: 'auto',
    padding: [60, 180],
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

view Contain {
  <contain key={Math.random()} yield />

  $ = {
    maxWidth: 1000,
    width: '100%',
    margin: 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
    flexShrink: 0,
    padding: ^pad ? [0, '10%'] : 0,
    position: 'relative',
    zIndex: 10
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
    padding: [0, 25, 50],
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

view Install {
  <h2>
    Install
  </h2>
  <intructions>
    <p>npm install -g flint</p>
    <p class="small">flint new myapp</p>
    <p class="small">flint</p>
  </intructions>

  $ = {
    borderTop: '1px solid #ddd',
    padding: [20, 0, 0],
    margin: [40, 0, 0]
  }

  $h2 = { textAlign: 'center' }
  $instructions = { padding: [20, 0] }

  $p = [{
    color: '#000',
    margin: [10, 0],
    width: '100%',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 24
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
