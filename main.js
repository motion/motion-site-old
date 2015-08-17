height = window.innerHeight - 160
primary = '#970C0A'
secondary = '#FB7124'
small = window.innerWidth < 672

view Main {
  <Header />

  <block>
    <Introduction />
    <Video if={false} />
    <Video2 />
  </block>

  <Brief />
  <Intro />
  <Code gist="natew/ec3c1243f8e6559d6bb7" />
  <Signup />

  $ = {
    color: '#7E6F6D',
    fontSize: 14,
    lineHeight: '26px',
    padding: [46, 0, 0]
  }

  $block = {
    background: '#f9f9f9',
    borderBottom: '1px solid #ddd',
    margin: [0, 0, 40]
  }
}

view Intro {
  text = [
    `Flint is rethinking development from the start.`,
    `No more boilerplate code, complex build sytems or awkward mess of libraries.`,
    `Instant updates between editor and browser as you type with a novel, efficient compiler.`,
    `Built on React and ES6 (fully compatable with React components & npm). Even automatically installs your npm package when you import.`,
    `Handles stores, styles, isomorphic rendering, efficient immutable data behind the scenes, all under a powerful CLI.`,
    `70% less code when writing views, be more creative and faster than ever.`,
    `One command to deploy your app to a static CDN. Open source. Community powered.`
  ]

  <left>
    <p repeat={text} class={{ em: _index === 0 }}>
      <num if={_index > 0}>{_index}</num> {_}
    </p>
  </left>

  $ = {
    padding: [50, 20]
  }

  $left = {
    width: '60%',
    margin: 'auto'
  }

  $p = {
    margin: [0, 0, 15],
    lineHeight: '1.3rem',
    flexFlow: 'row',
    display: 'flex'
  }

  $num = {
    fontSize: 20,
    border: '1px solid #ddd',
    color: '#555',
    fontWeight: 300,
    borderRadius: 100,
    minWidth: 45,
    minHeight: 45,
    maxHeight: 45,
    maxWidth: 45,
    margin: [0, 15, 0, -60],
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'row'
  }

  $.em = {
    fontSize: 16
  }
}

view Header {
  sections = [
    'Video',
    'Get Started',
    'Learn'
  ]

  @active = 0

  <brand>
    <logo-img src="logo.png" />
    <tag>Beta</tag>
  </brand>
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

  $ = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    background: '#fff',
    zIndex: 100,
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
    padding: [8, 10],
    fontSize: 14,
  }

  $brand = {
    flexFlow: 'row',
    alignItems: 'center'
  }

  $logo = {
    height: 30,
    margin: [0, 10, 0, 0],
  }

  $tag = {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '#aaa',
    margin: [0, 10, 0, 0]
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
  shadowSize = 30

  window.addEventListener('resize',
    () => setVideoSize(window.innerWidth - 70))

  <video>
    <source
      src="https://s3-us-west-1.amazonaws.com/flint123/flintdemo.mp4"
      type="video/mp4" />
  </video>

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

  $title = {
    fontFamily: ''
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
  <h2>
    A whole new way to build web apps
  </h2>
  <desc>
    With a fast custom compiler that makes writing views a breeze,
    and integration from CLI to editor to browser, Flint is a new
    way to make apps.
  </desc>

  $ = {
    padding: [20, 20],
    maxWidth: '80%',
    margin: 'auto'
  }

  title = {
    fontWeight: 500,
    letterSpacing: -1,
    fontSize: 34,
    margin: [10, 0],
    color: 'rgb(255, 0, 0)',
    lineHeight: '1.4em',
    textAlign: 'center',
    fontFamily: 'Montserrat, Myriad, Helvetica, Arial'
  }

  $h2 = [title]
  $h3 = [title, {
    fontSize: 20
  }]

  $desc = {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 300,
    width: '80%',
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
    width: '100%'
  }
}

view Signup {
  <desc>
    <Wrap>
      <p>
        This is an early preview of Flint.
      </p>
      <p>
        We're rolling out Flint to developers who are interesting in helping
        make development better.
      </p>
    </Wrap>
  </desc>
  <h3>Join the Flint Beta!</h3>

  <Wrap>
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
