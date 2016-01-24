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
  prop spread
  prop contain

  <row root class={{ contain }} yield />

  $ = {
    flexFlow: reverse ? 'row-reverse' : 'row',
    justifyContent: spread ? 'space-between' : center ? 'center' : 'flex-start',
    alignItems: centered ? 'center' : 'flex-start',
    width: '100%',

    [device.small]: {
      minWidth: 0,
      flexFlow: 'column'
    }
  }

  $contain = {
    maxWidth: 1100,
    minWidth: 700,
    width: '80%',
    margin: `auto`
  }
}

view Col {
  prop center, centered, grow:? number

  $ = {
    flexFlow: 'column',
    justifyContent: center ? 'center' : 'flex-start',
    alignItems: centered ? 'center' : 'flex-start',
    margin: center ? 'auto' : 0,
    flexGrow: typeof grow != 'undefined' ? grow : 1,
    flexShrink: 1,
    maxWidth: '100%',

    [device.small]: {
      margin: 'auto'
    }
  }
}
