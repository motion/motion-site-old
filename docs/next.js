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

  let blue = [46,161,249].join(',')

  $next = {
    fontSize: 20,
    flexFlow: 'row',
    padding: [10, 0],
    margin: [45, 0],
    cursor: 'pointer',
    transition: '300ms all ease-in',
    color: `rgb(${blue})`,
    textAlign:'right',
  }

  $span = {
    borderBottom: over ? `1px solid rgba(${blue}, 0.2)` : 'none'
  }

  $arrow = {
    transition: '300ms all ease-in',
    marginLeft: over ? 12 : 8
  }
}