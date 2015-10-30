view Title {
  <title-h2 id={view.props.children.split().map(x => x.toLowerCase()).join('-')} yield />

  let size = 22
  if (view.props.big) size = 28
  if (view.props.small) size = 20

  $h2 = [style.textGradient, {
    fontSize: size,
    padding: [10, 0],
    textAlign: view.props.center ? 'center' : 'auto'
  }, view.props.small && {
    padding: 0
  }, view.props.light && {
    fontWeight: 300
  }]
}
