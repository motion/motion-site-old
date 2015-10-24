const light = '#fefefe'

view Editor {
  let index = 0
  let tabs, srcs;

  if (^sources) {
    srcs = ^sources.map(s => s.url)
    tabs = ^sources.map(s => s.title)
  } else {
    srcs = [^src]
  }

  <Toolbar
    light={^light}
    tabs={tabs}
    activeTab={index}
    changeTab={i => index = i} />
  <container>
    <iframe
      style={{display: index==_index ? 'flex' : 'none'}}
      repeat={srcs}
      src={_}
      id={^id}
      onLoad={() => { ^onLoad && ^onLoad() }}>
    </iframe>
  </container>

  $ = {
    flexFlow: 'column',
    height: ^lines ? 28 + (24 * ^lines) : '100%',
    borderRadius: 6,
    boxShadow: `0 0 10px rgba(0,0,0,${^light ? 0.08 : 0.25})`,
    margin: 10,
    marginRight: ^right ? -10 : 10,
    marginLeft: ^left ? -10 : 10,
    fontFamily: font.monoSpace,
    position: 'relative',
    zIndex: 10,
    width: '100%',

    [device.small]: {
      marginRight: 10,
      marginLeft: 0,
    }
  }

  $container = {
    overflowY: 'hidden',
    overflowX: 'scroll',
    height: '100%'
  }

  $iframe = {
    border: 'none',
    height: '100%',
    width: '100%',
    padding: 3,
    overflow: 'hidden',
    background: ^light ? light : '#263640',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

    [device.small]: {
      pointerEvents: 'none'
    }
  }
}

view Toolbar {
  const demoBorder = 4

  <bar>
    <ctrl class="close" />
    <ctrl class="max" />
    <ctrl class="open" />
  </bar>
  <tabs if={^tabs}>
    <tab
      repeat={^tabs}
      class={{ active: _index == ^activeTab }}
      onClick={^changeTab.partial(_index)}>
      {_}
    </tab>
  </tabs>

  const borderColor = ^light ? '#fff' : '#222'
  const border = '1px solid ' + borderColor

  $ = {
    flexFlow: 'column'
  }

  $tabs = {
    flexFlow: 'row',
    fontSize: 15,
    fontFamily: font.sansSerif,
    padding: [2, 4, 0, 4],
    background: '#ccc',
    borderBottom: border,
  }

  $tab = {
    cursor: 'pointer',
    userSelect: 'none',
    color: '#333',
    padding: [3, 8],
    margin: [3, 4, 0, 0],
    background: '#eee',
    borderBottom: 'none',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    flexGrow: 1
  }

  $.active = {
    background: '#fff',
    borderTop: border,
    borderLeft: `2px solid ${color.brand}`,
    borderRight: border,
    marginTop: 0,
    marginBottom: -1,
    color: '#000',
    fontWeight: 700,
    borderBottom: 'none',
  }

  $bar = {
    background: ^light ? light : 'rgb(29, 38, 45)',
    height: 12,
    minHeight: 12,
    padding: [0, 2],
    borderTopRightRadius: demoBorder,
    borderTopLeftRadius: demoBorder,
    margin: 0,
    flexFlow: 'row',
    alignItems: 'flex-start',
  }

  $ctrl = {
    width: 8,
    height: 8,
    transform: {
      scale: 0.8
    },
    background: '#EB5B54',
    borderRadius: 10,
    margin: ['auto', 1],
    opacity: 0.2
  }

  $.max = {
    background: '#F7C033'
  }

  $.open = {
    background: '#69CB43'
  }
}