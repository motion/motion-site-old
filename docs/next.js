import { color } from '../constants'

let go = to => {
  Motion.router.go(to)
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

  $next = {
    fontSize: 20,
    flexFlow: 'row',
    padding: [10, 0],
    margin: [45, 0],
    cursor: 'pointer',
    transition: '300ms all ease-in',
    color: `rgb(${color.brand})`,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }

  $span = {
    borderBottom: over ? `1px solid rgba(${blue}, 0.2)` : 'none'
  }

  $arrow = {
    transition: '300ms all ease-in',
    margin: [12, 0, 10, 12]
  }
}