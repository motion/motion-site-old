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

  <center>
    <top>
      Multiply!
    </top>
    <streak if={streak > 0}>Streak: {streak}</streak>
    <question>{first} times {second} is</question>
    <input
      id = "guess"
      placeholder="Enter your answer"
      sync={guess}
      onEnter={check}
    />
  </center>

  $ = {
    background: `linear-gradient(${color.brand1}, ${color.brand2})`,
    color: '#fff',
    borderRadius: 200,
    margin: [20, 0],
    height: 330,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 34,
  }
  $top = {flexFlow: 'row', margin: 'auto'}
  $h1 = { color: 'white' }

  $question = {
    flexFlow: 'row',
    margin: 'auto',
    paddingTop: 30,
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

  $streak = {
    flexFlow: 'row',
    margin: [15, 'auto', -20],
    fontSize: 24,
    color: 'yellow'
  }

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