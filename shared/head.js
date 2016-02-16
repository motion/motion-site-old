view Head {
  prop title
  prop subtitle

  <Contain>
    <inner>
      <Title big>{title}</Title>
      <IntroText>{subtitle}</IntroText>
    </inner>
    <img if={false} src="/assets/images/watercolor.jpg" />
  </Contain>

  $ = {
    background: '#fefefe',
    marginTop: 49,
    padding: [20, 0, 20],
    borderBottom: '1px solid #f9f9f9',
    overflow: 'hidden'
  }

  $inner = {
    padding: [0, 30],
    position: 'relative',
    zIndex: 10
  }

  $IntroText = {
    width: '60%'
  }

  $img = {
    position: 'absolute',
    top: -120,
    right: -30,
    opacity: 0.25,
    zIndex: 0
  }
}