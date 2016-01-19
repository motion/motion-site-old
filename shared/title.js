const sanitize = str => str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '-')

view Title {
  prop center, large

  <Text
    root
    yield
    id={sanitize(view.props.children)}
  />

  $Text = {
    fontWeight: 400,
    fontSize: large ? 38 : 28,
    margin: [20, 0, 5],
    textAlign: center ? `center` : `auto`,
    color: 'rgba(0,0,0,0.78)'
  }
}
