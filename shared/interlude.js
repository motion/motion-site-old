view Interlude {
  <interlude-h2 yield />

  $h2 = {
    fontSize: 22,
    margin: [40, 'auto'],
    padding: [23, 0],
    fontFamily: font.title,
    zIndex: 100,
    textAlign: 'center',
    fontWeight: 300,
    color: '#666',

    [device.small]: {
      fontSize: 22,
      padding: 0
    }
  }
}