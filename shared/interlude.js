view Interlude {
  <interlude-h2 yield />

  $h2 = [{
    textAlign: view.props.right ? 'right': 'left',
    fontSize: 22,
    margin: [48, 'auto'],
    padding: [16, 0],
    fontFamily: font.title,
    zIndex: 100,
    textAlign: 'center',
    fontWeight: 300,
    color: color.brand2,

    [device.small]: {
      fontSize: 22,
      padding: 0
    }
  }]
}