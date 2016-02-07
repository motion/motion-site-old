import { style, color, routes, font, device } from './constants'

view Page {
  prop base, children

  <Contain>
    <Page.Sidebar if={base} yield />
    <inner>
      {children}
    </inner>
  </Contain>
  <Footer />

  $ = {
    fontSize: 18,
    lineHeight: '1.95rem',
    padding: [20, 0],
    flexGrow: 1,

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $Contain = {
    margin: 'auto',
    flexFlow: 'row',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $inner = {
    padding: [0, 30, 0, 30],
    width: '100%'
  }
}

view Page.Sidebar {
  prop base, list

  const url = slug => base + '/' + slug

  <a repeat={list}
    class={{ active: Flint.router.isActive(url(_.slug)) }}
    key={_index} onClick={Flint.router.link(url(_.slug))}>
    {_.title}
  </a>

  $ = {
    width: 120,
    margin: [20, 10, 0],
    right: 20,
    userSelect: 'none',

    [device.small]: {
      borderRight: 'none',
      flexFlow: 'row',
      width: '90%',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }
  }

  $a = {
    borderRight: [3, 'solid', 'transparent'],
    color: '#777',
    fontSize: 18,
    whiteSpace: 'nowrap',
    padding: [2, 16],
    margin: [2, 0],
    minWidth: 130,
    display: 'flex',
    width: '100%',
    textAlign: 'right',
    cursor: 'pointer',

    hover: {
      color: color.brand1
    },

    [device.small]: {
      width: 'auto'
    }
  }

  $active = {
    fontWeight: 600,
    color: '#444',
    borderColor: color.brand,

    [device.small]: {
      border: 'none',
      textAlign: 'center',
      width: 'auto'
    }
  }
}

view RoutedContent {
  prop parent, content, params
  prop el = content.filter(item => item.slug == params.slug)[0]

  <body>
    {view.el(`${parent}.${el.view}`)}
  </body>

  $body = { width: '100%' }
}