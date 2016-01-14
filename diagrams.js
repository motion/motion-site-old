const size = 100

view Icon.Window {
  let highlight

  on.props(() => {
    highlight = view.props.highlight
  })

  <window class={{ highlight }}>
    <Toolbar light />
    {view.props.top}
    <inner>
      {view.props.children}
    </inner>
  </window>

  $window = {
    width: size,
    height: size,
    border: '2px solid rgba(0,0,0,0.1)',
    margin: [10, 'auto'],
    borderRadius: 5,
    background: '#fff',
    transition: 'all ease-in 300ms',
  }

  $inner = {
    padding: 5,
    color: '#555'
  }

  $highlight = {
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    borderColor: 'rgba(0,0,0,0.15)',
    opacity: 1
  }
}

view Icon.Browser {
  <Icon.Window yield top={
    <top>
      <url class="item" />
    </top>
  } />

  $top = {
    borderBottom: '1px solid #eee',
    height: 15
  }

  $item = {
    border: '1px solid #eee',
    borderRadius: 10,
    margin: 3,
    height: '100%'
  }
}

view Icon.Editor {
  <Icon.Window yield>
    <line repeat={10} />
  </Icon.Window>

  $line = {
    height: 1,
    background: '#eee',
    margin: 3,
    width: Math.max(0.8, Math.random()) * Math.min(100, Math.max(70, _index * 45 % 100 * (Math.random() * 2.5))) + '%'
  }
}

view Icon.Flint {
  let pulsing = false
  let highlight

  on.props(() => {
    highlight = view.props.highlight
  })

  on.every(1000, () => pulsing = !pulsing)

  <img src="/assets/flint.svg" />
  <pulse />

  $ = {
    border: '2px solid #eee',
    background: '#fff',
    width: size,
    height: size,
    borderRadius: 100,
    position: 'relative'
  }

  $img = {
    width: size,
    height: size,
    margin: -2,
    transition: 'all ease-in 200ms',
    transform: {
      scale: 0.9
    },
    filter: 'grayscale(1) brightness(2)',

    hover: {
      filter: 'none'
    }
  }

  $pulse = {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: pulsing ? 0 : 1,
    margin: -2,
    width: size,
    height: size,
    border: '2px solid #eee',
    borderRadius: 100,
    transition: pulsing && 'all ease-in 1000ms',
    transform: {
      scale: pulsing ? 1.5 : 1
    },
    pointerEvents: 'none'
  }
}

view Icon.Console {
  let active = false

  on.every(1000, () => active = !active)

  <Icon.Window>
    <line>
      <prompt>~</prompt>
      <cursor class={{ active }} />
    </line>
  </Icon.Window>

  $prompt = {
    color: '#ddd',
    fontFamily: font.monoSpace,
  }

  $cursor = {
    width: 7,
    height: 10,
    background: '#eee'
  }

  $line = {
    flexFlow: 'row',
    alignItems: 'center'
  }

  $active = {
    display: 'none'
  }
}
