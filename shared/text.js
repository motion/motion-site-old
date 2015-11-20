view Text {
  <p>{view.props.children}</p>

  $ = view.props.big && {
    fontSize: 20,
    lineHeight: '2rem',
    color: 'rgba(0,0,0,0.6)',
    marginTop: -5
  }
}