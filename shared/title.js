view Title {
  <title-h2 id={view.props.children.split().map(x => x.toLowerCase()).join('-')} yield />

  let pad = 10
  let size = 22

  if (view.props.big) size = 28
  if (view.props.small) size = 20
  if (view.props.tiny) {
    size = 18
    pad = 0
  }

  $h2 = [style.textGradient, {
    fontFamily: font.title,
    fontSize: size,
    padding: [pad, 0],
    marginTop: 20,
    textAlign: view.props.center ? 'center' : 'auto'
  }, view.props.small && {
    padding: 0
  }, view.props.light && {
    fontWeight: 300
  }]
}
