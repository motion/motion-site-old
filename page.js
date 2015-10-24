view Page {
  <HeaderAlt />
  <Contain>
    <Sidebar yield />
    <inner>
      {^children}
    </inner>
  </Contain>

  $Contain = {
    width: '80%',
    maxWidth: 1100,
    flexFlow: 'row'
  }

  $inner = {
    padding: [20, '8%'],
  }
}

view Page.Sidebar {
  const url = slug => ^base + '/' + slug

  <sidebar>
    <a
      repeat={^list}
      class={{ active: router.isActive(url(_.slug)) }}
      key={_index} onClick={router.link(url(_.slug))}>
      {_.title}
    </a>
  </sidebar>

  $ = {
    borderRight: '1px solid #ddd',
    margin: 20,
    marginLeft: 0
  }

  $item = {
    flexFlow: 'row',
    lineHeight: '1.6rem',
  }

  $index = {
    padding: [0, 10, 0, 0],
    flexFlow: 'row'
  }

  $.active = {
    color: 'black',
    fontWeight: 600
  }

  $a = [style.link, {
    whiteSpace: 'nowrap',
    padding: [10, 20],
    width: '100%',
    minWidth: 120,
    display: 'flex',
    textAlign: 'right'
  }]
}