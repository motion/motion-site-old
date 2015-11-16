view Contain {
  <contain id={view.props.id}>
    <content class={{ straight: view.props.straight }}>
      <Title if={view.props.title}>{view.props.title}</Title>
      {view.props.children}
    </content>
  </contain>

  const topPad = view.props.padTop ? 60 : (view.props.strip ? 40 : 0)
  const padding = view.props.pad ? [topPad, '15%'] : [topPad, 0]

  $ = {
    background: view.props.bg || (view.props.strip ? color.strip : 'transparent'),
    maxWidth: view.props.maxWidth || 1000,
    minWidth: view.props.minWidth || 0,
    width: '100%',
    color: view.props.color || 'auto',
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
    margin: [view.props.strip ? 30 : 0, 'auto'],
    padding,
    position: 'relative',
    zIndex: 10,

    [device.small]: {
      minWidth: 0
    }
  }

  $content = [{
    flexFlow: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    flexGrow: 1,
  }, view.props.contentStyle]

  $.end = {
    top: 'auto',
    bottom: -20,
    left: -100,
  }
}
