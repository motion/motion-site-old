import { color } from '../constants'

export const DemoCounter = () => $(
  <Example flip inPage
    inStyle={{ width: 0 }}
    in={
      <Editor lines={10} left light source={`
      export const Counter = () => $(
        let count = 0

        const up = () => count++
        const down = () => count--

        <strong>Count is {count}</strong>
        <button onClick={down}>↓</button>
        <button onClick={up}>↑</button>
      }
      `} />
    }
    out={<Counter />}
  />

  Example: {
    width: '82%',
    margin: 'auto'
  }
}

export const Counter = () => $(
  let count = 0

  const up = () => count++
  const down = () => count--

  <count>Count is  {count}</count>
  <center>
    <button onClick={down}>↓</button>
    <button onClick={up}>↑</button>
  </center>

  : {
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }

  center: {
    flexFlow: 'row',
    margin: [0, 'auto', 10]
  }

  button: {
    margin: 5,
    border: '1px solid #ddd',
    background: '#fff',
    borderRadius: 5,
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    outline: 'none',
    userSelect: 'none',

    active: {
      background: color.brand2,
      color: '#fff',
    }
  }

  count: {
    fontSize: 20,
    color: '#777',
    flexFlow: 'row',
    margin: [10, 0]
  }
}
