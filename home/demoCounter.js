view DemoCounter {
  let count = 0

  const down = () => count -= 1
  const up = () => count += 1

  <center>
    <button onClick={down}>↓</button>
    <button onClick={up}>↑</button>
  </center>
  <strong>Count is {count}</strong>

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
