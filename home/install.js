import { style, color, routes, font, device } from '../constants'

view Home.Install {
  const install = 'sh <(curl -L https://flint.love)'
  const select = () => {
    view.element('input').select()
  }

  <Feature row>
    <title>
      <dark>Install:</dark>
    </title>
    <mainCode>
      <code onMouseUp={select} class="install">
        <input value={install} readOnly size={install.length - 1} />
      </code>
      <Help />
    </mainCode>

    <afterward if={false}>
      <shields>
        <a href="https://www.npmjs.com/package/flint" target="_blank">
          <img class="shield" src="https://img.shields.io/npm/dm/flint.svg" />
        </a>
        <img class="shield" src="https://img.shields.io/npm/v/flint.svg" />
      </shields>
    </afterward>
  </Feature>

  $ = {
    borderBottom: '1px solid #eee',
    color: 'rgba(0,0,0,0.3)',
    boxShadow: '0 2px 2px rgba(0,0,0,0.045)'
  }

  $title = {
    fontSize: 20,
    marginRight: 0,
    flexFlow: 'row',

    [device.small]: {
      margin: 'auto'
    }
  }

  $dark = {
    color: '#555',
    fontWeight: 'bold',
  }

  $Feature = {
    margin: 'auto',
    padding: [15, 5],
    border: 'none',
    flexWrap: 'wrap',
  }

  $prompt = {
    margin: ['auto'],
    fontSize: 20,
    [device.small]: { display: 'none' }
  }

  $Help = {
    [device.small]: {
      display: 'none'
    }
  }

  $mainCode = {
    flexFlow: 'row',
    margin: 'auto',
    [device.small]: { fontSize: 20, marginTop: 5 },
  }

  $code = {
    background: 'none',
    border: 'none'
  }

  $install = {
    flexFlow: 'row',
    color: '#555',
    margin: [10, 0, 7],
  }

  $input = {
    border: 'none',
    color: 'rgb(13, 149, 217)',
    background: '#fff',
    borderRadius: 6,
    padding: [10, 5, 10, 10],
    fontSize: 20,
    margin: [-8, 0, -5],
    fontFamily: font.monoSpace
  }

  $shields = {
    flexFlow: 'row',
    margin: [20, 'auto', 0],
    height: 40
  }

  $a = {
    margin: 'auto'
  }

  $extra = {
    fontFamily: font.monoSpace
  }

  $shield = {
    opacity: 0.7,
    hover: {
      opacity: 1
    }
  }
}

view Help {
  let hovered = false

  <help onMouseEnter={() => hovered = true} onMouseLeave={() => hovered = false}>
    <question>?</question>
    <modal>
      This fixes npm permissions!&nbsp;
      Or: <code>npm install -g flint</code>
    </modal>
  </help>

  const size = 35

  $ = {
    position: 'relative'
  }

  $question = {
    margin: ['auto', 0, 'auto', 10],
    width: size,
    height: size,
    justifyContent: 'center',
    fontSize: 16,
    border: '1px solid rgba(0,0,0,0.1)',
    boxShadow: '0 2px 2px rgba(0,0,0,0.045)',
    borderRadius: 1000,
    textAlign: 'center',
    color: [0,0,0,0.4],
    cursor: 'pointer'
  }

  $modal = {
    color: '#555',
    display: 'block',
    opacity: hovered ? 1 : 0,
    transition: 'all ease-in 200ms',
    position: 'absolute',
    left: hovered ? 54 : 50,
    top: '-8%',
    marginLeft: 0,
    width: 202,
    padding: 10,
    boxShadow: '0 0 4px rgba(0,0,0,0.2)',
    borderRadius: 4,
    fontSize: 13,
    lineHeight: '1.2rem',
    background: '#fff',
  }

  $code = {
    border: 'none',
    color: 'rgba(0,0,0,0.4)',
    lineHeight: 1.2,
    fontSize: 13,
    display: 'inline'
  }
}
