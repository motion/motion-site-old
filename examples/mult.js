view Examples.Mult {
  <top>
    <Title>
      Multiplication Game
    </Title>
    <code-a href="http://github.com">See code on Github</code-a>
  </top>

  <Text big>
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

      view MultDemo {
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

        <center>
          Multiply!
          <streak if={streak > 0}>Streak: {streak}</streak>
          <question>{first} times {second} is</question>
          <input
            placeholder="Enter your answer"
            sync={guess}
            onEnter={check}
          />
        </center>

        $ = {
          background: 'linear-gradient(orange, red)',
          color: '#fff',
          borderRadius: 200,
          margin: [20, 0],
          height: 330,
          justifyContent: 'center',
          fontSize: 34
        }

        $question = {
          flexFlow: 'row',
          paddingTop: 30
        }

        $streak = {
          flexFlow: 'row',
          margin: [15, 'auto', -20],
          fontSize: 24,
          color: 'yellow'
        }

        $input = {
          background: 'white',
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 30,
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
    fontSize: 25,
    textDecoration: 'none',
    color: '#aaa',
    ':hover': {
      color: '#666'

    }
  }
}