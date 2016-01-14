view Blur {
  const size = view.props.size || 500

  $ = {
    width: size,
    height: size,
    background: view.props.bg || '#fdfdfd',
    filter: `blur(${view.props.blur || (size / 15)}px)`,
    borderRadius: size,
    position: 'absolute',
    zIndex: 0,
    top: view.props.top || 0,
    left: view.props.left || 0,
    transform: `translate3d(0, 0, 0)`,
  }
}

view Row {
  prop reverse
  prop center
  prop centered

  $ = {
    flexFlow: reverse ? 'row-reverse' : 'row',
    justifyContent: center ? 'center' : 'flex-start',
    alignItems: centered ? 'center' : 'flex-start',
  }
}

view Col {
  prop center
  prop grow:? number

  $ = {
    flexFlow: 'column',
    justifyContent: center ? 'center' : 'flex-start',
    flexGrow: typeof grow != 'undefined' ? grow : 1
  }
}