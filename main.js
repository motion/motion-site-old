height = window.innerHeight - 160

view Main {
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
  <line>
    view Main
  </line>
  <line>
    // some code
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