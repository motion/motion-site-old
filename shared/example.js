view Example {
  <Contain maxWidth={view.props.maxWidth || 1000}>
    <in>{view.props.in}</in>
    <out>{view.props.out}</out>
  </Contain>

  $ = {
    flexFlow: 'row',
    flexGrow: 1,
    alignItems: 'space-between',
    justifyContent: 'center',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    [device.small]: {
      flexFlow: 'column',
      width: '100%'
    }
  }

  $out = [{
    flexGrow: 1,
    justifyContent: 'center',
    position: 'relative',
    order: view.props.flip ? 2 : 1,

    [device.small]: {
      width: '100%',
      order: view.props.flipVertical ? 1 : 2,
      padding: view.props.inPage ? [50, 0] : 0
    }
  }, view.props.outStyle]

  $in = [{
    flexGrow: 1,
    order: view.props.flip ? 1 : 2,
    zIndex: 10,
    margin: 0,

    [device.small]: {
      width: '100%',
      margin: 'auto',
      order: view.props.flipVertical ? 2 : 1
    }
  }, view.props.inStyle]
}
