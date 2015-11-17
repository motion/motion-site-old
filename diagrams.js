const size = 100

view Icon.Window {
  <window>
    <Toolbar light />
    {view.props.top}
    <inner>
      {view.props.children}
    </inner>
  </window>

  $ = {
    width: size,
    height: size,
    border: '2px solid rgba(0,0,0,0.1)',
    margin: 10,
    borderRadius: 5,
    background: '#fff'
  }

  $inner = {
    padding: 5,
    color: '#999'
  }
}

view Icon.Browser {
  <Icon.Window top={
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
    margin: 3,
    height: '100%'
  }
}

view Icon.Editor {
  <Icon.Window>
    <line repeat={10} />
  </Icon.Window>

  $line = {
    height: 1,
    background: '#ddd',
    margin: 3,
    width: Math.max(0.8, Math.random()) * Math.min(100, Math.max(70, _index * 45 % 100 * (Math.random() * 2.5))) + '%'
  }
}

view Icon.Flint {
  let pulsing = false

  on.every(2000, () => pulsing = !pulsing)

  <img src="/assets/flint.svg" />
  <pulse />

  const base = 1.5

  $ = {
    border: '2px solid #eee',
    width: size / base,
    height: size / base,
    borderRadius: 100,
    position: 'relative'
  }

  $img = {
    width: size / base,
    height: size / base,
    margin: 'auto',
    margin: -2,
    transform: {
      scale: 0.9
    }
  }

  $pulse = {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: pulsing ? 0 : 1,
    margin: -2,
    width: size / base,
    height: size / base,
    border: '2px solid #eee',
    borderRadius: 100,
    transition: pulsing && 'all ease-in 1500ms',
    transform: {
      scale: pulsing ? 1.5 : 1
    }
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