view Demo2 {
  @count = 0

  increment = () => @count++
  decrement = () => @count--

  <center>
    <button onClick={increment}>Up</button>
    <button onClick={decrement}>Down</button>
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
