height = window.innerHeight - 160
primary = '#970C0A'
secondary = '#FB7124'
small = window.innerWidth < 672

view Main {
  <Logo />
  <Introduction />
  <Demo />
  <Demo />
  <Demo />
  <About />

  <p></p>
  <Contain>
    <DemoVideo />
  </Contain>

  <Contain>
    <Explanation />
  </Contain>

  <Contain>
    <Signup />
  </Contain>

  $ = {
    color: '#777',
    minWidth: 800,
    fontSize: 18,
    fontFamily: 'Georgia',
    lineHeight: '2rem',
  }
}

demoBorder = 2

view Demo {
  <browser>
    <Toolbar />
  </browser>
  <editor>
    <Toolbar />
    <Video name="d1.mov" />
  </editor>

  $ = {
    flexFlow: 'row'
  }

  both = {
    flexFlow: 'column',
    border: '1px solid #eee',
    width: '50%',
    height: 250,
    margin: 0,
    borderTopRightRadius: demoBorder,
    borderTopLeftRadius: demoBorder,
  }

  $browser = [both, {
    marginRight: 0,
    borderRight: 'none',
  }],

  $editor = [both, {
    marginLeft: 0,
  }]
}

view Toolbar {
  <toolbar>
    <ctrl class="close" />
    <ctrl class="max" />
    <ctrl class="open" />
  </toolbar>

  f = '#fefefe'
  to = '#fff'

  $ = {
    background: `linear-gradient(${f}, ${to})`,
    borderTop: '1px solid #fff',
    borderBottom: '1px solid #f5f5f5',
    height: 12,
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

view Logo {
  <img src="flint2.svg" />
  <tag if={false}>Beta</tag>

  $ = {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }

  $img = {
    height: 140,
    margin: [10, 0, -40, 0],
  }

  $tag = {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '#aaa',
    margin: [0, 10, 0, 0]
  }
}

view About {
  text = [
    `Works on React`,
    `Automatic npm installs`,
    `Modern ES6, simplified`,
    `Instant updates as you type`,
    `Faster runtime`,
    `Smart errors and tools`,
  ]

  <list>
    <item repeat={text}>
      {_}
    </item>
  </list>

  $ = {
    padding: [20, 20]
  }

  $list = {
    margin: [0, 10],
    flexFlow: 'row',
    flexWrap: 'wrap',
    textAlign: 'center'
  }

  $item = {
    margin: [0, 0, 15],
    padding: [0, 10],
    lineHeight: '1.5rem',
    width: '50%'
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

  $ = {
    margin: 'auto',
    textAlign: 'center'
  }

  $video = {
    border: 'none',
    width: small ? '100%' : 672,
    height: small ? '100%' : 450,
    maxHeight: 450,
    maxWidth: 672
  }

  $desc = {
    display: 'block',
    fontSize: 12,
    padding: [10, 0, 40]
  }
}

view Introduction {
  <h2>Radically improved development</h2>
  <desc>Flint makes writing web apps simpler and faster.</desc>


  $ = {
    padding: [25, 20, 40],
    margin: 'auto',
    fontFamily: 'Helvetica Neue, Helvetica, Arail, sans-serif'
  }

  title = {
    // fontFamily: 'Montserrat, Myriad, Helvetica, Arial',
    // letterSpacing: -1,
    minWidth: 600,
    margin: [5, 0],
    lineHeight: '1.4em',
    textAlign: 'center'
  }

  $h2 = [title, {
    color: '#444',
    fontSize: 24,
    fontWeight: 300,
  }]

  $h3 = [title, {
    color: 'rgb(124, 124, 124)',
    fontSize: 20
  }]

  $desc = {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: '1.6rem',
    padding: [5, 0, 0],
    fontWeight: 300,
    width: '80%',
    color: '#666',
    margin: 'auto'
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
  <contain yield />

  $ = {
    maxWidth: 800,
    width: '100%',
    margin: 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 0,
    flexShrink: 0
  }
}

view Explanation {
  <p>
    React has proven the idea of using self-contained views
    as a beautiful abstraction for the web.
  </p>
  <p>
    Only JavaScript limits us in making this abstraction easy
    and sensible to use.
  </p>
  <p>
    Assembling a stack with today's best practices takes weeks
    to learn, days to assemble, and never-ending studying and
    caretaking.
  </p>
  <p>
    If we're lucky, we have a half decent platform
    for making our ideas come alive, with high costs.
  </p>
  <p>
    We are <em>writing to the library </em>
    rather than having the language understand you.
  </p>
  <p>
    Flint is a realization of the view abstraction,
    with a philosophy: allow developers to be maximally creative.
  </p>
  <p>
    With a critical and empathetic eye,
    we've rethought what we want in a web programming platform:
  </p>
  <ul>
    <li>Light abstractions designed for speed and expressivity</li>
    <li>Immediate, helpful feedback as we create</li>
    <li>Ability to go from idea to live with ease</li>
    <li>Smart tools that enable simple code</li>
  </ul>

  $ = {
    padding: [40, '15%']
  }

  $p = {
    marginBottom: 0
  }

  $li = {
    margin: [15, 0, 0]
  }
}
