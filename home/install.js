view Install {
  const install = 'sh <(curl -L https://flint.love)'
  const select = () => view.refs.code.select()

  <Contain id="install">
    <title>
      Try in a minute!
    </title>

    <mainCode>
      <code onMouseUp={select} class="install">
        <input ref="code" value={install} readOnly size={install.length} />
      </code>
      <Help />
    </mainCode>

    <afterward>
      <line if={false}>
        Flint is <Link color="rgba(255,255,255,0.5)" noborder href="https://github.com/flintjs/flint" target="_blank">open source</Link>
      </line>

      <shields if={false}>
        <a href="https://www.npmjs.com/package/flint" target="_blank">
          <img class="shield" src="https://img.shields.io/npm/dm/flint.svg" />
        </a>
        <img if={false} class="shield" src="https://img.shields.io/npm/v/flint.svg" />
      </shields>
    </afterward>
  </Contain>

  $ = {
    textAlign: 'center',
    padding: [40, 0],
    borderBottom: '1px solid #eee',
    borderTop: '1px solid #eee',
  }

  $title = {
    fontFamily: font.title,
    fontSize: 24,
    margin: [-6, 0, 20, 0]
  }

  $Contain = {
    flexFlow: 'column'
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
    border: [2, 'solid', '#ddd'],
    color: color.brand2,
    background: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    margin: [-8, 0, -5],
    fontFamily: font.monoSpace
  }

  $afterward = {
    margin: [5, 'auto', 0],
    fontSize: 16
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

  const size = 35

  $ = {
    position: 'relative'
  }

  $question = {
    margin: ['auto', -(size + 35), 'auto', 0],
    width: size,
    height: size,
    justifyContent: 'center',
    fontSize: 22,
    color: [0,0,0,0.2],
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
    background: '#fff'
  }

  $code = {
    border: 'none',
    opacity: 0.7,
    lineHeight: 1.2,
    fontSize: 13,
    display: 'inline'
  }
}
