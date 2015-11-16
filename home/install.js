view Install {
  const install = 'sh <(curl -L https://flint.love)'
  const select = () => view.refs.code.select()

  <Contain id="install">
    <Interlude style={{margin: [0, 'auto']}} center if={view.props.title}>
      Install
    </Interlude>

    <mainCode>
      <code onMouseUp={select} class="install">
        <input ref="code" value={install} readOnly size={install.length} />
      </code>
      <Help />
    </mainCode>

    <afterward>
       <extra>or, npm install -g flint</extra>

      <shields>
        <a href="https://www.npmjs.com/package/flint" target="_blank">
          <img class="shield" src="https://img.shields.io/npm/dm/flint.svg" />
        </a>
        <img if={false} class="shield" src="https://img.shields.io/npm/v/flint.svg" />
      </shields>
    </afterward>
  </Contain>

  $ = {
    textAlign: 'center',
    margin: [5, 0, 0]
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
    margin: [10, 'auto'],
  }

  $input = {
    border: `${1}px solid #ddd`,
    fontWeight: 600,
    background: '#fff',
    color: color.brand2,
    borderRadius: 4,
    border: 'none',
    padding: [10, 8, 10, 18],
    fontSize: 18,
    margin: [-8, 0, -5],
    fontFamily: font.monoSpace,
    width: '100%'
  }

  $afterward = {
    display: 'block',
    margin: [5, 'auto', 0],
    flexFlow: 'row',
    color: '#999',
    fontSize: 18,
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
    display: 'inline',
    fontWeight: 300
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

  <outer onMouseEnter={() => hovered = true} onMouseLeave={() => hovered = false}>
    <question>?</question>
    <modal>
      This script fixes global npm permissions and helps set your default editor.
      <a href="https://flint.love" target="_blank">View source.</a>
    </modal>
  </outer>

  const size = 35

  $ = {
    margin: 'auto',
    position: 'relative'
  }

  $question = {
    margin: ['auto', -(size + 25), 'auto', 20],
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
    opacity: hovered ? 1 : 0,
    transition: 'all ease-in 300ms',
    position: 'absolute',
    left: hovered ? 150 : 140,
    top: '-100%',
    marginLeft: -100,
    width: 200,
    padding: 10,
    boxShadow: '0 0 4px rgba(0,0,0,0.2)',
    borderRadius: 4,
    fontSize: 14,
    lineHeight: '1.2rem',
    background: '#fff'
  }

  $a = [style.link, {
    margin: 'auto'
  }]
}