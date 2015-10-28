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

  <h1>Multiply!</h1>
  <streak if={streak > 0}>Streak: {streak}</streak>
  <question>{first} times {second} is</question>
  <input
    placeholder="Enter your answer"
    sync={guess}
    onEnter={check}
  />

  $ = {
    background: `linear-gradient(${color.brand1}, ${color.brand2})`,
    color: '#fff',
    borderRadius: 200,
    margin: [20, 0],
    height: 330,
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
    margin: [0, 'auto', -20],
    fontSize: 24,
    color: 'yellow'
  }

  $input = {
    background: 'white',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: [0, 'auto'],
    borderRadius: 10,
    border: 'none',
    padding: 10
  }
}