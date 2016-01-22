view Footer {
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

  $ = {
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
