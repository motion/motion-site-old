view Next {
  let over = true

  let go = () => {
    Flint.router.go(view.props.to)
    setTimeout(() => window.scrollTo(0, 0))
  }

  <next onClick={go}
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