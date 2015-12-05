view Welcome {
  <welcome>
    <span class="wow gradient">Frontend, without the framework</span>
    <span>Flint is a Javascript compiler connects your tools</span>
  </welcome>

  $welcome = {
    fontSize: 28,
    color: 'rgba(0,0,0,0.7)',
    fontWeight: 300,
    lineHeight: 1.75,
    margin: [0, 'auto'],
    padding: [15, 10, 45],
    textAlign: 'center',
    maxWidth: 750,
    zIndex: 100,
    fontFamily: font.title,

    [device.small]: {
      fontSize: 20,
      padding: [0, 30]
    }
  }

  $gradient = style.textGradient

  $wow = {
    fontSize: 40,
    color: color.brand2,
    lineHeight: 1.4,
    marginBottom: 4
  }
}
