view Install {
  const install = 'sh <(curl -L https://flint.love)'
  const select = () => view.refs.code.select()

  <Contain id="install">
    <Interlude center if={view.props.title}>
      Try in a minute!
    </Interlude>

    <mainCode>
      <code onMouseUp={select} class="install">
        <input ref="code" value={install} readOnly size={install.length} />
      </code>
      <Help />
    </mainCode>

    <afterward>
      <line>
        Flint is free & open source
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
    padding: [25, 0, 30, 0],
    borderBottom: '1px solid #eee',
    borderTop: '1px solid #eee'
  }

  $Interlude = {
    margin: [-20, 'auto', -10],
    color: color.brand2
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
    margin: 'auto',
    maxWidth: 386
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
    border: `${1}px solid #ddd`,
    color: '#777',
    background: '#fff',
    borderRadius: 4,
    padding: [6, 0, 6, 14],
    fontSize: 18,
    margin: [-8, 0, -5],
    fontFamily: font.monoSpace,
    width: '100%'
  }

  $afterward = {
    margin: [5, 'auto', 0],
    color: '#999',
    fontSize: 16
  }

  $line = {
    margin: [0, 0, -2],
    fontSize: 14,
    opacity: 0.8
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
    // boxShadow: '0 0 4px rgba(0,0,0,0.1)',
    borderRadius: 100,
    justifyContent: 'center',
    fontSize: 18,
    color: 'rgba(0,0,0,0.2)',
    cursor: 'pointer'
  }

  $modal = {
    display: 'block',
    opacity: hovered ? 1 : 0,
    transition: 'all ease-in 300ms',
    position: 'absolute',
    left: hovered ? 150 : 140,
    top: '-100%',
    marginLeft: -120,
    width: 200,
    padding: 10,
    boxShadow: '0 0 4px rgba(0,0,0,0.2)',
    borderRadius: 4,
    fontSize: 13,
    lineHeight: '1.25rem',
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