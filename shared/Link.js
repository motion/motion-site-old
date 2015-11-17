view Link {
  let to = view.props.to

  <link-a onClick={to && Flint.router.link(to)} {...view.props} />

  $ = [style.link]
}