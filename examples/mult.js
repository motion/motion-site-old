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
  <Title>Main.js</Title>
  <Code source={`
      let randTo = x => Math.floor(Math.random() * x)

      view MultDemo {
        let streak = 0
        let guess = ''
        let first, second, answer

        let next = () => {
          guess = ''
          first = randTo(15)
          second = randTo(15)
          answer = first * second
        }

        let check = () => {
          let correct = +guess === answer
          if (correct) {
            streak++
          } else {
            streak = 0
          }

          next()
        }
        next()

        <bg>
          <center>
            <top>
              Multiply!
              <streak if={streak > 0}>Streak: {streak}</streak>
            </top>
            <question>{first} times {second} is</question>
            <input
              id = "guess"
              placeholder="Enter your answer"
              sync={guess}
              onEnter={check}
            />
          </center>
        </bg>

        $bg = {
          background: 'linear-gradient(green, blue)',
          height: 400,
        }
        
        $top = {flexFlow: 'row', margin: 'auto'}
        
        $h1 = { color: 'white' }
        
        $question = { 
          flexFlow: 'row',
          margin: 'auto',
          paddingTop: 30,
        }

        $center = {
          margin: 'auto',
          textAlign: 'center',
          color: '#222',
          fontSize: 40,
        }

        $answer = {
          flexFlow: 'row',
          justifyContent: 'center',
          fontWeight: 'bold',
          background: 'rgba(0,0,0,0.2)',
        }

        $result = {
          display: 'inline-block',
          padding: '0 10px'
        }
        
        $streak = {flexFlow: 'row'}

        $right = [$result, { color: 'green' }]
        $wrong = [$result, { color: 'darkred' }]

        $pane = {
          background: 'rgba(0,0,0,0.2)',
          margin: 20,
          padding: 10,
          borderRadius: 10,
        }

        $input = {
          alignSelf: 'auto',
          background: 'white',
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 30,
          borderRadius: 10,
          border: 'none',
          padding: 10,
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