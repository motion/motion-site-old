view DemoCounter {
  @count = 0

  decrement = () => @count--
  increment = () => @count++

  <center>
    <button onClick={decrement}>Down</button>
    <button onClick={increment}>Up</button>
  </center>
  <strong>Count is {@count}</strong>

  $ = {
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center'
  }

  $center = {
    flexFlow: 'row',
    margin: [0, 'auto', 10]
  }

  $button = {
    margin: 5
  }

  $strong = {
    fontSize: 22
  }
}
