view Examples.Intro {
  <top>
    <Title>
      Examples
    </Title>
  </top>

  <IntroText>
    Flint is easy to learn up front, but contains a lot of power. It runs
    on Babel which means you have the full power of the modern versions of JavaScript.
  </IntroText>

  <Text>
    Check out the examples in the sidebar to learn more, or <Link href="https://github.com/flintjs/examples">check out our github repo</Link> where we push cool demos as we make them.
  </Text>

  <Text>
    In this example we introduce Flint by building a simple game.
    In the game the user solves multiplication problems, and can
    see their streak of correct guesses.
  </Text>

  <Text>
    We start by setting a few variables in our Main view. The Main
    view is always the entry to your app. Flint's design encourages
    using lots of simple functions, which we set up here.
  </Text>

  <demo>
    <MultDemo />
  </demo>
  <Code source={`
      let randTo = x => Math.floor(Math.random() * x)

      view Main {
        let first, second, answer
        let streak = 0
        let guess = ''

        next()

        function next() {
          guess = ''
          first = randTo(15)
          second = randTo(15)
          answer = first * second
        }

        function check() {
          let correct = +guess === answer
          if (correct) streak++
          else streak = 0
          next()
        }

        <h3>Multiply!</h3>
        <streak if={streak > 0}>
          Streak: {streak}
        </streak>
        <question>
          {first} times {second} is:
        </question>
        <input
          placeholder="Enter your answer"
          sync={guess}
          onEnter={check}
        />

        $ = {
          margin: [20, 0],
          padding: [20, 0],
          border: '1px solid #ddd',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: 34
        }

        $question = {
          flexFlow: 'row',
          margin: [15, 0]
        }

        $streak = {
          flexFlow: 'row',
          margin: [10, 'auto'],
          fontSize: 24,
          color: 'green'
        }

        $input = {
          background: '#eee',
          textAlign: 'center',
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold',
          margin: [0, 'auto'],
          borderRadius: 10,
          border: 'none',
          padding: 10
        }
      }
  `} />

  $top = {
    flexFlow: 'row',
    justifyContent: 'space-between',
  }

  $code = {
    marginRight: 15,
    marginTop: 10,
    textDecoration: 'none',
    color: '#aaa',
    ':hover': {
      color: '#666'

    }
  }
}