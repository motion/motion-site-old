view Interlude {
  <interlude-h2 yield />

  $h2 = {
    textAlign: view.props.right ? 'right': 'left',
    fontSize: 24,
    margin: [48, 'auto'],
    padding: [23, 0],
    fontFamily: font.title,
    zIndex: 100,
    textAlign: 'center',
    fontWeight: 300,
    color: '#43443d',

    [device.small]: {
      fontSize: 22,
      padding: 0
    }
  }
}