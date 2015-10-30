view Text {
  <p>{view.props.children}</p>

  $ = view.props.big && {
    fontSize: 22,
    lineHeight: '2.2rem',
    color: 'rgba(0,0,0,0.6)',
    marginTop: -5
  }
}