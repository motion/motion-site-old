import chroma from 'chroma-js'


screen = {
  small: '@media (max-width: 840px)'
}
h2 = { textAlign: 'center' }
primary = '#970C0A'
secondary = '#FB7124'
small = window.innerWidth < 672

// getDimensions = () => ({
//   width: window.innerWidth,
//   height: window.innerHeight
// })
//
// store Window {
//   @dimensions = getDimensions()
// }
//
// on('resize', () => {
//   Window.@dimensions = getDimensions()
// })

// import { Spring } from 'react-motion'
// <Spring defaultValue={0} endValue={500}>
//   {interp => <stripe style={{ left: interp.val }} />}
// </Spring>

view Main {
  <banner>
    <a href="https://github.com/flint-lang">GitHub</a>
  </banner>

  <Header />

  <Contain>
    <section class="simple">
      <p>
        Flint simplifies ES6 and introduces the <b>view</b>.
      </p>
    </section>
  </Contain>

  <Example>
    <Editor left light src="example2.html" />
    <Row>
      <Demo2 />
    </Row>
  </Example>

  <Contain>
    <section>
      <p>
        Variables us the at sign, constants don't.
      </p>
    </section>
  </Contain>

  <Example>
    <Row>
      <Demo3 />
    </Row>
    <Editor right light src="example3.html" />
  </Example>

  <Install />

  <Contain>
    <section>
      <FeaturesList />
    </section>
  </Contain>

  <Contain pad>
    <About />
  </Contain>

  <DemoVideo />

  $ = {
    color: '#333',
    fontSize: 18,
    fontFamily: 'Georgia',
    lineHeight: '2rem',
    margin: 'auto',
    overflowX: 'hidden'
  }

  $span = {
    position: 'absolute',
    top: 0,
    right: 0
  }

  $banner = {
    display: 'none',
    background: '#aaa',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
    right: -90,
    top: 0,
    width: 220,
    transform: `rotate(45deg)`,
  }

  $a = {
    color: '#fff',
    display: 'block',
    font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
    margin: 0,
    padding: '3px 0',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
  }

  $p = {
    textAlign: 'center',
    margin: [5, 0]
  }

  $section = {
    margin: [30, 0],
    padding: [15, 0],
    borderRight: 'none',
    borderLeft: 'none',
    fontSize: 20,
  }

  $.simple = {
    border: 'none'
  }
}

view Example {
  <Contain>
    <example yield />
  </Contain>

  $example = {
    flexFlow: 'row'
  }
}

view Row {
  <row yield />

  $ = {
    flexFlow: 'row',
    padding: 10,
    width: '50%'
  }
}

view Demo2 {
  @count = 0

  increment = () => @count++
  decrement = () => @count--

  <center>
    <button onClick={increment}>Up</button>
    <button onClick={decrement}>Down</button>
  </center>
  <strong>Count is {@count}</strong>

  $ = {
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center'
  }

  $center = {
    flexFlow: 'row',
    margin: [0, 'auto', 10]
  }

  $button = {
    margin: 5
  }

  $strong = {
    fontSize: 22
  }
}

view Demo3 {
  <Row1>
    <Col>Hello</Col>
    <Col>Hello</Col>
    <Col>Hello</Col>
  </Row1>

  $ = { width: '100%' }
}

view Row1 {
  <row1>{^children}</row1>

  $ = {
    flexFlow: 'row',
    flexGrow: 1
  }
}

view Col {
  <column>{^children}</column>

  $ = {
    flexGrow: 1,
    background: '#eee',
    margin: 5
  }
}

view Header {
  @startIntro = false
  height = 280

  <Contain>
    <out>
      <Logo />
      <Introduction start={@startIntro} />
    </out>
    <Editor
      right
      height={height}
      onLoad={() => @startIntro = true}
      src="example.html" />
  </Contain>
  <strip />
  <strip class="red" />

  $ = {
    flexFlow: 'row',
    margin: 0,
    padding: [50, 0, 60],
    background: "#f3f3f3",
    position: 'relative',
    overflow: 'hidden'
  }

  $out = {
    width: '50%',
    justifyContent: 'center',
    height,
    position: 'relative',
    zIndex: 10,
    margin: [-10, 0, 10]
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

  $.red = {
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
    width: '50%',
    flexFlow: 'column',
    height: ^height || 300,
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
  <img src="flint-small.png" srcset="flint.png 2x" />

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
    // fontFamily: 'Montserrat, Myriad, Helvetica, Arial',
    // letterSpacing: -1,
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

view Section {
  <section yield />

  $ = {
    padding: 40,
    background: '#eee'
  }
}


view FeaturesList {
  text = [
    `Works on React`,
    `Automatic npm installs`,
    `Modern ES6, simplified`,
    `Instant updates as you type`,
    `Faster runtime`,
    `Smart errors and tools`,
  ]

  <list>
    <item repeat={text} key={_}>
      <Check2 class="check" />
      {_}
    </item>
  </list>

  $ = {
    margin: [0, 'auto']
  }

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
  <video loop autoplay>
    <source src={^name} type="video/mp4" />
  </video>

  $ = {
    border: 'none',
    width: '100%',
    height: '100%'
  }
}

view DemoVideo {
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

  $ = {
    background: '#f2f2f2',
  }

  $center = {
    margin: 'auto',
    padding: [20, 180],
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
}

view Brief {
  <icons>
    <Icon src="computer1.svg">
      CLI
    </Icon>
    <Icon src="web2.svg">
      Compiler
    </Icon>
    <Icon src="internet84.svg">
      Browser
    </Icon>
    <Icon src="browser105.svg">
      Editor
    </Icon>
  </icons>

  $ = {
    textAlign: 'center'
  }

  $icons = {
    flexFlow: 'row',
    margin: 'auto',
    width: '80%',
    maxWidth: 800,
    justifyContent: 'space-around'
  }
}

view Icon {
  <img yield />

  $img = {
    width: 50,
    height: 50,
    margin: [0, 'auto', 5]
  }

  $ = {
    textAlign: 'center',
    fontSize: 16
  }
}

view Link {
  <a yield />

  $ = { display: 'inline' }

  $a = {
    display: 'inline',
    color: primary,
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}

view Signup {
  <form action="//flintlang.us11.list-manage.com/subscribe/post?u=d6ee317984756a7f0f5e9378b&amp;id=dcc2cefed5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
        <input type="text" placeholder="Name" name="NAME" class="" id="mce-NAME" />
      </div>
      <div class="mc-field-group">
        <input type="email" placeholder="Contact (email or handle)" name="EMAIL" class="required email" id="mce-EMAIL" />
      </div>
      <div if={false} class="mc-field-group">
        <textarea name="ABOUT" class="" placeholder="What are you most interested in with Flint? Any feedback?" id="mce-ABOUT"></textarea>
      </div>
      <hide id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </hide>
      <hide style="position: absolute; left: -5000px;">
        <input type="text" name="b_d6ee317984756a7f0f5e9378b_dcc2cefed5" tabindex="-1" value="" />
      </hide>
      <center class="clear">
        <submit-input
          class="button"
          type="submit"
          value="Submit"
          name="subscribe" id="mc-embedded-subscribe" />
      </center>
    </div>
  </form>

  $ = {
    margin: 'auto',
    position: 'relative',
    zIndex: 100,
    padding: [0, 0, 100],
  }

  $hide = {
    display: 'none'
  }

  $desc = {
    borderTop: '1px solid #f2f2f2',
    borderBottom: '1px solid #f2f2f2',
    color: '#682121',
    margin: [0, 0, 20],
    padding: [20, 0]
  }

  $h3 = {
    fontSize: 18,
    color: '#444'
  }

  $form = {
    textAlign: 'left',
    fontSize: 16
  }

  input = {
    width: '100%',
    marginBottom: 20,
    borderRadius: 5
  }

  $input = input

  $textarea = [input, {
    border: '1px solid #ccc',
    height: 150
  }]

  $label = {
    margin: [10, 0]
  }

  $submit = {
    border: '1px solid #ccc',
    color: '#333',
    background: '#fff',
    padding: 10
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
    padding: ^pad ? [0, '10%'] : 0
  }
}

view About {
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

  $ = {
    padding: [0, 25, 50],
    lineHeight: '1.8rem',

    [screen.small]: {
      padding: 0
    }
  }

  $p = {
    marginBottom: 0
  }

  $li = {
    margin: [10, 0, 0]
  }

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

  $h2 = h2

  $instructions = {
    padding: [20, 0],
  }

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
  <check-svg width="510px" height="510px" viewBox="0 0 510 510">
    <g>
      <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M204,382.5L76.5,255l35.7-35.7 l91.8,91.8l193.8-193.8l35.7,35.7L204,382.5z"/>
    </g>
  </check-svg>
}

view Check2 {
  <check2-svg width="400px" height="400px" viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;">
    <g>
      <path d="M199.996,0C89.713,0,0,89.72,0,200s89.713,200,199.996,200S400,310.28,400,200S310.279,0,199.996,0z M199.996,373.77 C104.18,373.77,26.23,295.816,26.23,200c0-95.817,77.949-173.769,173.766-173.769c95.817,0,173.771,77.953,173.771,173.769 C373.768,295.816,295.812,373.77,199.996,373.77z"/>
      <path d="M272.406,134.526L169.275,237.652l-41.689-41.68c-5.123-5.117-13.422-5.12-18.545,0.003 c-5.125,5.125-5.125,13.425,0,18.548l50.963,50.955c2.561,2.558,5.916,3.838,9.271,3.838s6.719-1.28,9.279-3.842 c0.008-0.011,0.014-0.022,0.027-0.035L290.95,153.071c5.125-5.12,5.125-13.426,0-18.546 C285.828,129.402,277.523,129.402,272.406,134.526z"/>
    </g>
  </check2-svg>
}
