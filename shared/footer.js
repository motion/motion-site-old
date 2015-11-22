view Footer {
  <Contain>
    <content>
      <Nav />
      <br />
      <Social />
      <p>
        Made with Flint. <Link href="https://github.com/flintjs/site" target="_blank">View source</Link>.
      </p>
    </content>
  </Contain>

  $ = {
    borderTop: '1px solid #eee',
    background: color.alt,
    margin: [30, 0, -40],
    textAlign: 'center',
    fontSize: 16
  }

  $content = {
    margin: [80, 'auto']
  }

  $p = {
    margin: [30, 0],
    fontSize: 14
  }
}
