height = window.innerHeight - 160
primary = '#970C0A'
secondary = '#FB7124'

view Link {
  <link-a yield />

  $ = {
    display: 'inline'
  }

  $a = {
    color: primary,
    display: 'inline',
    textDecoration: 'underline'
  }
}

url = 'https://www.youtube-nocookie.com/embed/VNfkk6lH0gg?rel=0&amp;showinfo=0'
urlDemo = url + '&start=132'

view Main {
  @url = url

  <Head />
  <iframe src={@url} frameborder="0" allowfullscreen></iframe>
  <p test={true}>
    <Link onClick={() => @url = urlDemo}>Skip to 2:12</Link> to see the live demonstration.
  </p>
  <Signup />

  $ = {
    background: 'white',
    color: '#7E6F6D',
    fontSize: 18,
    lineHeight: '28px',
    textAlign: 'center'
  }

  $p = {
    fontSize: 12
  }

  $iframe = {
    border: 'none',
    margin: 'auto',
    width: 672,
    height: 450
  }
}

view Head {
  <img src="logo.png" />
  <p>
    Improving the way you make apps
  </p>

  $ = {
    position: 'relative',
    flexFlow: 'column'
  }

  $p = {
    margin: [40, 'auto'],
    fontSize: 22
  }

  $img = {
    height: 66,
    margin: [40, 'auto', 0],
  }
}

view Signup {
  <p>
    This is an early preview of Flint.
  </p>
  <p>
    We're working on tooling that makes you 5x more effective.
  </p>
  <p>
    In the next week we'll invite a group of artists &amp; developers
    to work with directly, turning Flint into something truly special.
  </p>
  <p>
    We're calling it the Flint 50.
  </p>
  <h3>Become a Flint 50 member</h3>
  <form action="//flintlang.us11.list-manage.com/subscribe/post?u=d6ee317984756a7f0f5e9378b&amp;id=dcc2cefed5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
        <label for="mce-NAME">Name </label>
        <input type="text" value="" name="NAME" class="" id="mce-NAME" />
      </div>
      <div class="mc-field-group">
        <label for="mce-EMAIL">Email / Twitter</label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
      </div>
      <div class="mc-field-group">
        <label for="mce-ABOUT">
          Tell us about yourself &amp; how you'd use Flint
        </label>
        <textarea value="" name="ABOUT" class="" id="mce-ABOUT"></textarea>
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
          value="Apply"
          name="subscribe" id="mc-embedded-subscribe" />
      </center>
    </div>
  </form>

  $ = {
    position: 'relative',
    zIndex: 100,
    width: 500,
    margin: 'auto'
  }

  $hide = {
    display: 'none'
  }

  $h3 = {
    fontSize: 18,
    color: '#444'
  }

  $form = {
    margin: 'auto',
    padding: 20,
    borderTop: '1px solid #ccc',
    textAlign: 'left',
    fontSize: 16
  }

  input = {
    width: '100%',
    marginBottom: 20
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

view Intro {
  <line>Flint is your frontend destination</line>
  <line>It's an amazingly view simple syntax...</line>
  <img class="right" src="1.png" />
  <line class="small">It runs on React, but avoids all the complexity</line>
  <line>It integrates styles with your view for you</line>
  <line>&amp; handles all build and configuration</line>
  <img class="right" src="2.png" />
  <line class="small">(that means you just focus on creativity)</line>
  <line>It updates immediately with every keystroke</line>
  <line>Even keeping your app state, perfectly</line>
  <line>Did we mention powerful error messages?</line>
  <img class="right" src="3.png" />
  <line class="small">Static type check helps out with that</line>
  <line>It comes with powerful tools</line>
  <line>A state inspector</line>
  <line>And rewindable timeline with actions</line>
  <line>Did we mention it's faster than React?</line>
  <img class="right" src="4.png" />
  <line>That's because we run at compile-time</line>
  <line>It's the best frontend experience</line>
  <line>Letting you make better sites, much faster</line>
  <line>With really nice code</line>
  <line>What's that worth to you?</line>

  $ = {
    background: `linear-gradient(${primary}, #8B1624)`,
    color: '#E4CBC6',
    fontSize: 30,
    padding: [20],
    marginTop: -100,
    textAlign: 'center',
    lineHeight: '100px'
  }

  $img = {
    float: 'right',
    margin: [20, 'auto'],
    width: '75%'
  }

  $line.small = {
    fontSize: 20,
    margin: [-10,0]
  }
}



// old version with split screen editor thing

view Interactive {
  <Header />
  <Demo />
  <About />
  <Questions />
}

view Header {
  <header>
    <h1>Flint</h1>
    <img src="logowhite.png" />

    <Hello />
  </header>

  $header = {
    background: 'linear-gradient(to right, #BF272F, #DF6400)',
    color: '#fff',
    padding: 10,
    flexFlow: 'row'
  }

  $h1 = {
    display: 'none'
  }

  $img = {
    height: 30,
    margin: [5, 0, 5, 10],
    borderRight: '1px solid rgba(255,255,255,0.2)',
    padding: [0, 20, 0, 0]
  }
}

view Hello {
  <hello>
    Introducing Flint. Stop dead development.
  </hello>

  $ = {
    padding: [0, 20],
    fontWeight: 'normal',
    color: '#fff',
    fontSize: 16,
    margin: 'auto'
  }
}

view Demo {
  <show>
    <Browser />
    <Editor />
  </show>

  $show = {
    height: height
  }
}

view Browser {
  <main>
    <strong>This is Flint. Flint is a new way to make apps.</strong>
    <p>
      Flint updates as you type, works with your favorite editor, and
      improves development by 100x.
    </p>

    <form>
      <input placeholder="Request beta" />
      <button>I'm in</button>
    </form>
  </main>

  $ = {
    width: '50%',
    height: '100%',
    padding: 20,
    borderRight: '1px solid #ccc',
    background: 'radial-gradient(circle, #fff, #ccc 90%)'
  }

  $main = {
    margin: 'auto',
    textAlign: 'center'
  }

  $form = {
    margin: 'auto',
    alignItems: 'center'
  }

  $input = {
    padding: 6,
    fontSize: 20
  }

  $button = {
    border: '1px solid #DF6400',
    color: '#DF6400',
    borderRadius: 100,
    width: 100,
    background: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    margin: [10, 'auto']
  }
}

view Editor {
  @text = ''

  input = `
    --SET--
    view Main {
      |
    }
    --WRITE--
    view Main {
      |1strong|2
    }
    --SET--
    view Main {
      <strong>|</strong>
    }
    --WRITE--
    view Main {
      <strong>|1This is Flint. Flint is a new way to make apps.|2</strong>
    }
    --SET--
    view Main {
      <strong>This is Flint. Flint is a new way to make apps.</strong>
      |
    }
  `
  steps = input.split(/--([A-Z]+)--/)

  write = text => new Promise((res, rej) => {
    begin = text.indexOf('|1')
    end = text.indexOf('|2')
    initial = text.replace(/\|1(.*)\|2/g, '|')
    @text = initial

    setTimeout(() => {
      res()
    }, 1000)
  })

  present = i => {
    step = steps[i]

    if (typeof step == 'undefined') return
    console.log('step', step)

    Promise
      .delay(100)
      .then(() => {
        if (step == 'SET') {
          @text = step
          present(i+1)
        }
        if (step == 'WRITE') {
          @text =  write(step).then(() => {
            present(i+1)
          })
        }
      })
  }

  present(0)

  <line>
    {@text}
  </line>

  $ = {
    width: '50%',
    height: '100%',
    background: '#fff',
    color: '#BF272F',
    fontFamily: 'monospace',
    fontSize: 18,
    padding: 10
  }
}

view About {
  <line>
    Flint brings the concept of the view to modern ES6 JavaScript.
  </line>

  <line>
    It lets you write simple code, way less work than learning
    yet another library of abstractions.
  </line>

  <line>
    Stay out of the terminal. Your browser updates as you type,
    we handle error messages, tools, and performance.
  </line>

  $ = {
    background: '#FFFBE6',
    color: '#A66826'
  }

  $line = {
    margin: [30, '10%'],
    fontSize: 22,
    fontWeight: 300,
    textAlign: 'center'
  }
}

view Questions {
  <question>
    What about this?
  </question>
  <answer>
    Well check out this.
  </answer>

  $ = {
    borderTop: '1px solid #ddd'
  }

  base = {
    margin: [30, '10%'],
    fontSize: 22,
    fontWeight: 300,
    textAlign: 'center'
  }

  $question = [base]

  $answer = [base, {
    other: 'thing'
  }]
}