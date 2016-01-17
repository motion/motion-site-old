view Home.Install {
  const install = 'sh <(curl -L https://flint.love)'
  const select = () => view.refs.code.select()

  <Feature row>
    <title>
      Installs in a minute:
    </title>

    <mainCode>
      <code onMouseUp={select} class="install">
        <input ref="code" value={install} readOnly size={install.length} />
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
    background: '#222',
    color: '#fff'
  }

  $title = {
    fontSize: 18,
    fontWeight: 600,
    marginRight: 10
  }

  $Feature = {
    margin: 'auto',
    padding: [20, 0],
    border: 'none'
  }

  $Help = {
    [device.small]: {
      display: 'none'
    }
  }

  $mainCode = {
    flexFlow: 'row',
    margin: 'auto'
  }

  $code = {
    background: 'none',
    border: 'none'
  }

  $install = {
    flexFlow: 'row',
    color: '#555',
    margin: [10, 0],
  }

  $input = {
    border: 'none',
    color: 'green',
    background: '#fff',
    borderRadius: 6,
    padding: 10,
    fontSize: 22,
    margin: [-8, 0, -5],
    fontFamily: font.monoSpace
  }

  $line = {
    margin: [0, 0, -5],
    fontSize: 14,
    opacity: 0.8,
    display: 'block'
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
      This script fixes npm -g permissions & sets default editor.&nbsp;
      <Link href="https://flint.love" target="_blank">View source.</Link>&nbsp;
      <span>or install with <code>npm install -g flint</code></span>
    </modal>
  </help>

  const size = 45

  $ = {
    position: 'relative'
  }

  $question = {
    margin: ['auto', 0, 'auto', 10],
    width: size,
    height: size,
    justifyContent: 'center',
    fontSize: 22,
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: 1000,
    textAlign: 'center',
    color: [255,255,255,0.4],
    fontWeight: 600,
    cursor: 'pointer'
  }

  $modal = {
    color: '#555',
    display: 'block',
    opacity: hovered ? 1 : 0,
    transition: 'all ease-in 300ms',
    position: 'absolute',
    left: hovered ? 150 : 140,
    top: '-80%',
    marginLeft: -120,
    width: 200,
    padding: 10,
    boxShadow: '0 0 4px rgba(0,0,0,0.2)',
    borderRadius: 4,
    fontSize: 13,
    lineHeight: '1.2rem',
    background: '#fff',
  }

  $code = {
    border: 'none',
    opacity: 0.7,
    lineHeight: 1.2,
    fontSize: 13,
    display: 'inline'
  }
}
