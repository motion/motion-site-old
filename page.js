import { style, color, routes, font, device } from './constants'

view Page {
  prop base, children, sidebar

  <Contain>
    <Page.Sidebar if={base} yield />
    <sidebar if={sidebar}>{sidebar}</sidebar>
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
    padding: [5, 40, 100, 40],
    width: '100%'
  }
}

view Page.Sidebar {
  <links if={view.props.list}>
    <Page.Link repeat={view.props.list} {..._} />
  </links>
  <content if={!view.props.list} yield />

  $ = {
    width: 120,
    margin: [20, 10],
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
}

view Page.Link {
  const url = slug => view.props.base + '/' + slug

  <a
    class={{ active: Motion.router.isActive(url(view.props.slug)) }}
    onClick={Motion.router.link(url(view.props.slug))}>
    {view.props.title}
  </a>

  $a = {
    borderRight: [3, 'solid', 'transparent'],
    color: '#555',
    fontSize: 18,
    whiteSpace: 'nowrap',
    padding: [0, 13],
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

  let el

  on.props(() => {
    el = content.filter(item => item.slug == params.slug)[0]
  })

  <body>
    {view.el(`${parent}.${el.view}`)}
  </body>

  $body = { width: '100%' }
}