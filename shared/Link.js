view Link {
  let to = view.props.to

  <a root onClick={to && Flint.router.link(to)} {...view.props} />

  $ = [style.link, {
    color: view.props.color || 'auto',
    border: view.props.noborder ? 'none' : 'auto'
  }]
}
