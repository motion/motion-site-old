import { style, font, color } from './constants'

const size = 100

const base = 'rgb(86, 58, 145)'

view Icon.Window {
  prop highlight, top, children

  <window class={{ highlight }}>
    <Toolbar light />
    {top}
    <inner>
      {children}
    </inner>
  </window>

  $window = {
    width: size,
    height: size,
    border: `1px solid rgba(0,0,0,0.2)`,
    margin: [0, 'auto'],
    borderRadius: 8,
    background: 'rgba(255,255,255,0.9)',
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
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    height: 15
  }

  $item = {
    border: '1px solid rgba(0,0,0,0.1)',
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
    background: 'rgba(0,0,0,0.1)',
    margin: 3,
    width: Math.max(0.7, Math.random()) * Math.min(100, Math.max(70, _index * 45 % 100 * (Math.random() * 2.5))) + '%'
  }
}

view Icon.Motion {
  prop highlight

  let pulsing = false

  on.every(2000, () => pulsing = !pulsing)

  <img src="/assets/images/o.png" />
  <pulse />

  $ = {
    border: '2px solid rgba(0,0,0,0)',
    width: size,
    height: size,
    borderRadius: 100,
    position: 'relative',
    margin: 'auto'
  }

  $img = {
    width: size,
    height: size,
    margin: -2,
    borderRadius: 100,
    transition: 'all ease-in 200ms',
    transform: { scale: 0.9 },
    hover: { filter: 'none' }
  }

  $pulse = {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: pulsing ? 0 : 1,
    margin: -2,
    width: size,
    height: size,
    border: '2px solid rgba(0,0,0,0.2)',
    borderRadius: 100,
    transition: pulsing ? 'all ease-in 1000ms' : 'opacity ease-in 300ms',
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
    background: 'rgba(0,0,0,0.2)'
  }

  $line = {
    flexFlow: 'row',
    alignItems: 'center'
  }

  $active = {
    display: 'none'
  }
}
