const sanitize = str => str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '-')

view Title {
  <h2 root id={sanitize(view.props.children)} yield />

  let pad = 10
  let size = 18

  if (view.props.big) size = 22
  if (view.props.small) size = 16
  if (view.props.tiny) {
    size = 18
    pad = 0
  }

  $h2 = [
    style.textGradient,
    {
      fontFamily: font.title,
      color: '#444',
      fontSize: size,
      padding: [pad, 0],
      margin: [20, 0, 0],
      textAlign: view.props.center ? 'center' : 'auto'
    },
    view.props.small && {
      padding: 0
    },
    view.props.light && {
      fontWeight: 300
    }
  ]
}
