view Footer {
  <stars repeat={100} />
  <Contain>
    <content>
      <Nav />
      <br />
      <Social />
      <p>
        Made with ❤︎ and Flint
      </p>
    </content>
  </Contain>

  $stars = {
    position: 'absolute',
    top: Math.random() * (_index + 100),
    left: Math.random() * (_index + 1000),
    opacity: Math.random() / 1,
    boxShadow: '0 0 10px 1px rgba(255,255,255,0.24)',
    width: 1,
    height: 1,
    background: '#fff',
    zIndex: 10,
  }

  $ = {
    position: 'relative',
    background: `linear-gradient(-20deg, ${color.brand}, ${color.brand1})`,
    color: '#fff',
    margin: [30, 0, -40],
    textAlign: 'center',
    fontSize: 16
  }

  $content = {
    margin: [80, 'auto'],
    flexFlow: 'column'
  }

  $p = {
    margin: [30, 0],
    fontSize: 14
  }

  $Nav = {
    justifyContent: 'center'
  }
}
