view Page {
  <HeaderAlt />
  <Contain style={{ maxWidth: 900 }}>
    <Sidebar if={view.props.base} yield />
    <inner>
      {view.props.children}
    </inner>
  </Contain>
  <Footer />

  $ = {
    fontSize: 18,
    lineHeight: '2.1rem',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $Contain = {
    maxWidth: 900,
    margin: 'auto',
    flexFlow: 'row',
    padding: [40, 0, 0],

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $inner = {
    padding: [5, 150, 0, 20],
  }
}

view Page.Sidebar {
  const url = slug => view.props.base + '/' + slug

  <a
    repeat={view.props.list}
    class={{ active: router.isActive(url(_.slug)) }}
    key={_index} onClick={router.link(url(_.slug))}>
    {_.title}
  </a>

  $ = {
    width: 120,
    margin: [30, 0, 0],
    position: 'fixed',
    right: 20,

    [device.small]: {
      borderRight: 'none',
      flexFlow: 'row',
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }

  $a = {
    borderRight: [3, 'solid', 'transparent'],
    color: '#777',
    fontSize: 18,
    whiteSpace: 'nowrap',
    padding: [8, 20],
    minWidth: 120,
    display: 'flex',
    width: '100%',
    textAlign: 'right',
    cursor: 'pointer',

    hover: {
      color: color.brand1
    }
  }

  $active = {
    fontWeight: 600,
    color: 'black',
    borderColor: color.brand
  }

}

view RoutedContent {
  let el

  on.props(() => {
    el = view.props.content.filter(x => x.slug == view.props.params.slug)[0]
  })

  <body>
    {view.el(`${view.props.parent}.${el.view}`)}
  </body>

  $body = {
    width: '100%'
  }
}
