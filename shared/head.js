view Head {
  prop title
  prop subtitle

  <Contain>
    <inner>
      <Title big>{title}</Title>
      <IntroText>{subtitle}</IntroText>
    </inner>
  </Contain>

  $ = {
    background: '#fefefe',
    marginTop: 55,
    marginBottom: -50,
    padding: [20, 0, 20],
    borderBottom: '1px solid #eee'
  }

  $inner = {
    padding: [0, 30]
  }
}