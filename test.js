view Test {
  <Icon.Browser />
  <Icon.Editor />
  <Icon.Console />
}

view Icon.Window {
  <window>
    <Toolbar light />
    {view.props.top}
    <inner>
      {view.props.children}
    </inner>
  </window>

  let size = 100

  $ = {
    width: size,
    height: size,
    border: '2px solid rgba(0,0,0,0.1)',
    margin: 10,
    borderRadius: 5
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