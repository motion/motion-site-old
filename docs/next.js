let go = to => {
  Flint.router.go(to)
  setTimeout(() => window.scrollTo(0, 0))
}

view Next {
  let over = true

  <next onClick={go.bind(null, view.props.to)}
        onMouseEnter={() => over = true}
        onMouseLeave={() => over = false}
        class={{over}}>
    <span>{view.props.children}</span>
    <arrow>❯</arrow>
  </next>

  let blue = '#2EA1F9'

  $next = {
    fontSize: 20,
    flexFlow: 'row',
    padding: 10,
    marginTop: 25,
    cursor: 'pointer',
    transition: '300ms all ease-in',
    color: blue,
    textAlign:'right',
  }

  $span = {
    borderBottom: over ? `1px solid ${blue}` : 'none'
  }

  $arrow = {
    transition: '300ms all ease-in',
    marginLeft: over ? 12 : 8
  }
}

view Link {
  <link-a onClick={() => go(view.props.to)} yield />

  $ = [style.link]
}