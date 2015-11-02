view DemoCounter {
  <Example flip inPage
    maxWidth={760}
    inStyle={{ width: 280 }}
    in={
      <Editor lines={10} left light source={`
      view Counter {
        let count = 0

        const up = () => count++
        const down = () => count--

        <button onClick={down}>↓</button>
        <button onClick={up}>↑</button>
        <strong>Count is {count}</strong>
      }
      `} />
    }
    out={<Counter />}
  />
}

view Counter {
  let count = 0

  const up = () => count++
  const down = () => count--

  <center>
    <button onClick={down}>↓</button>
    <button onClick={up}>↑</button>
  </center>
  <count>Count is {count}</count>

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
    margin: 5,
    border: '1px solid #ccc',
    background: 'linear-gradient(#fff 50%, #f2f2f2)',
    borderRadius: 8,
    width: 60,
    height: 40,
    justifyContent: 'center',
    fontSize: 20,
    outline: 'none',
    boxShadow: '1px 2px 2px rgba(0,0,0,0.08)',

    ':active': {
      background: color.brand2,
      color: '#fff',
      boxShadow: 'inset 0 2px 1px rgba(0,0,0,0.2)',
    }
  }

  $count = {
    fontSize: 20,
    fontWeight: 300,
    flexFlow: 'row'
  }
}
