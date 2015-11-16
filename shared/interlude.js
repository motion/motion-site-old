view Interlude {
  <interlude-h2 yield />

  $h2 = [{
    textAlign: view.props.right ? 'right': 'left',
    fontSize: 24,
    margin: [40, 'auto'],
    padding: [22, 0],
    fontFamily: font.title,
    zIndex: 100,
    textAlign: 'center',
    fontWeight: 300,
    color: 'rgba(0,0,0,0.5)',

    [device.small]: {
      fontSize: 22,
      padding: 0
    }
  }]
}