view Text {
  <p>{view.props.children}</p>

  $ = view.props.big && {
    fontSize: 20,
    lineHeight: '2rem',
    opacity: 0.75,
    marginTop: -5
  }
}