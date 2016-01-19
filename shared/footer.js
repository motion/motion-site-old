view Footer {
  <Contain>
    <content>
      <Nav />
      <br />
      <Social />
      <p>
        Made with Flint.
      </p>
    </content>
  </Contain>

  $ = {
    background: 'linear-gradient(-20deg, #666, #222)',
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
