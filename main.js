height = window.innerHeight - 160
primary = '#970C0A'
secondary = '#FB7124'
small = window.innerWidth < 672

view Main {
  <Logo />
  <Introduction />
  <Demo />
  <About />
  <Signup />

  $ = {
    color: '#7E6F6D',
    fontSize: 14,
    lineHeight: '26px'
  }
}

demoBorder = 2

view Demo {
  <browser>
    <Toolbar />
  </browser>
  <editor>
    <Toolbar />
  </editor>

  $ = {
    flexFlow: 'row'
  }

  both = {
    border: '1px solid #eee',
    width: '50%',
    height: 200,
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
    <icon class="close" />
    <icon class="max" />
    <icon class="open" />
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

  $icon = {
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
  <img src="flint.svg" />
  <tag if={false}>Beta</tag>

  $ = {
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }

  $img = {
    height: 50,
    margin: [40, 0, 0, 0],
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
    `Built on React and compotabile with components`,
    `Modern ES6 JavaScript with view macros`,
    `Works with npm, with npm install when you import`,
    `Optimized at compiler level for insane speed`,
    `One command to build and deploy your app`,
    `Open source. Community powered`,
  ]

  <ul>
    <li repeat={text}>
      {_}
    </li>
  </ul>

  $ = {
    padding: [20, 20]
  }

  $ul = {
    margin: '0'
  }

  $li = {
    margin: [0, 0, 15],
    lineHeight: '1.5rem',
    flexFlow: 'row',
    display: 'flex',
    listStyle: 'square outside none'
  }
}

view Header {
  sections = [
    'Video',
    'Get Started',
    'Learn'
  ]

  @active = 0

  <Contain>
    <links>
      <a
        repeat={sections}
        class={{ active: _index === @active }}>
        {_}
      </a>
    </links>
    <links>
      <a class="secondary">Twitter</a>
      <a class="secondary">Github</a>
    </links>
  </Contain>

  $ = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    background: '#fff',
    zIndex: 100,
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
    padding: [7, 25],
    fontSize: 14,
  }

  $links = {
    flexFlow: 'row',
    fontWeight: 'bold'
  }

  $.secondary = {
    padding: [2, 10],
    fontWeight: 300,
    color: '#999'
  }

  $a = {
    margin: [0, 2],
    padding: [2, 15],
    borderRadius: 4,
    color: '#888',
    fontWeight: 400
  }

  $.active = {
    background: 'rgb(73, 113, 200)',
    color: '#fff',
    fontWeight: 700
  }
}

view Video2 {
  setVideoSize = width => {
    w = width || Math.max(width || 0, 740)
    @videoWidth = w
    @videoHeight = w / 1.6
  }

  setVideoSize()
  shadowSize = 10

  window.addEventListener('resize',
    () => setVideoSize(window.innerWidth - 70))

  <Contain>
    <video>
      <source
        src="https://s3-us-west-1.amazonaws.com/flint123/flintdemo.mp4"
        type="video/mp4" />
    </video>
  </Contain>

  $ = {
    textAlign: 'center',
    height: @videoHeight + shadowSize,
    padding: [shadowSize, 20, 0],
    margin: [-20, 'auto', 0],
    overflow: 'hidden'
  }

  $video = {
    border: 'none',
    width: small ? '100%' : @videoWidth,
    height: small ? '100%' : @videoHeight,
    maxHeight: @videoHeight,
    maxWidth: @videoWidth,
    margin: 'auto',
    boxShadow: `0 0 ${shadowSize}px rgba(0,0,0,0.2)`
  }
}

view Video {
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
    margin: 'auto'
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
    color: '#777',
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

view Wrap {
  <div yield />

  $ = {
    maxWidth: 500,
    margin: 'auto',
    width: '100%'
  }
}

view Signup {
  <Wrap>
    <h3>Join the Flint Beta!</h3>
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
  </Wrap>

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
    maxWidth: 900,
    width: '100%',
    margin: 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 0,
    flexShrink: 0
  }
}
