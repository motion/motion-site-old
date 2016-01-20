const sanitize = str => str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '-')

view Title {
  prop center
  prop light

  <Text
    root
    yield
    id={sanitize(view.props.children)}
    class={{ light }}
    tagName="h2"
  />

  $ = {
    fontWeight: 400,
    fontSize: 27,
    margin: [30, 0, 10],
    textAlign: center ? `center` : `auto`,
    color: 'rgba(0,0,0,0.7)'
  }

  $light = {
    color: '#fff'
  }
}

view Title2 {
  <Title root yield />

  $Title = {
    fontSize: 24,
    color: 'rgba(0,0,0,0.6)',
    marginBottom: -10
  }
}

view SubTitle {
  <Title root yield />

  $Title = {
    fontSize: 18,
    color: 'rgba(0,0,0,0.4)',
    textTransform: 'uppercase',
  }
}

view IntroText {
  prop center
  prop small
  prop light
  prop children

  <Text root class={{ small }} tagName="h3">
    {children}
  </Text>

  $ = {
    fontSize: 22,
    lineHeight: '2rem',
    textAlign: center ? `center` : `auto`,
    color: light ? 'auto' : 'rgba(0,0,0,0.65)',
    marginBottom: 20,
    fontWeight: 300
  }

  $small = {
    color: '#333',
    fontWeight: 400,
    fontSize: 16
  }
}

view Text {
  prop light
  prop small

  <p root yield class={{ small, light }} />

  $ = {
    fontWeight: 400,
    fontSize: 17,
    lineHeight: '1.65rem'
  }

  $light = {
    color: `rgba(255,255,255,0.9)`
  }

  $small = {
    fontSize: 15,
    lineHeight: '1.45rem',
    color: `rgba(0,0,0,0.45)`,
  }
}