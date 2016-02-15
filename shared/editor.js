import { style, color, routes, font, device } from '../constants'

const light = '#fefefe'

view Editor {
  prop sources = []
  prop source
  prop children
  prop iframe

  let index = 0
  let tabs
  let code = []
  let loaded = false

  on.props(() => {
    if (sources.length) {
      code = sources.map(s => s.source)
      tabs = sources.map(s => s.title)
    }
    else if (source) {
      code = [source]
    }
  })

  function loadFrame() {
    loaded = true
    view.props.onLoad && view.props.onLoad()
  }

  <Toolbar
    light={view.props.light}
    tabs={tabs}
    activeTab={index}
    changeTab={i => index = i} />
  <content>
    <Code
      if={!children && !iframe}
      large={view.props.large}
      lang={view.props.lang}
      repeat={code}
      source={_}
      class={{hidden: _index != index}}
    />
    <children if={children}>{children}</children>
  </content>
  <iframe
    if={iframe}
    src={iframe}
    id={view.props.id}
    onLoad={loadFrame}
    class={{ loaded }}>
  </iframe>

  $ = {
    flexFlow: 'column',
    height: view.props.lines ? 22 + (23 * view.props.lines) : '100%',
    borderRadius: 5,
    fontFamily: font.monoSpace,
    position: 'relative',
    zIndex: 10,
    width: '100%',
    minWidth: 350,
    background: view.props.light ? light : '#263640',
    border: view.props.light ? `2px solid #eee` : `none`,
    margin: 'auto',

    [device.small]: {
      margin: 0,
      flexGrow: 1,
      width: '100%'
    }
  }

  $content = {
    overflow: 'auto',
  }

  $Code = {
    margin: 0,
    padding: 13,
    border: 'none',
    background: 'none',
    color: view.props.light ? 'auto' : 'rgba(255,255,255,0.8)',
    boxShadow: 'none'
  }

  $hidden = {
    display: 'none'
  }

  $iframe = {
    border: 'none',
    height: '100%',
    width: '100%',
    padding: [0, 3],
    overflow: 'hidden',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    transition: 'all ease-in 300ms',

    [device.small]: {
      pointerEvents: 'none'
    }
  }

  $loaded = {
    opacity: 1
  }
}

view Tabs {
  prop tabs = []
  prop activeTab = 0
  prop changeTab = Motion.noop
  prop light = false

  <tabs if={tabs.length}>
    <tab
      repeat={tabs}
      class={{ active: _index == activeTab }}
      onClick={() => changeTab(_index)}>
      {_}
    </tab>
  </tabs>

  $tabs = {
    flexFlow: 'row',
    fontSize: 15,
    fontFamily: font.sansSerif,
    padding: [2, 4, 0, 4],
    borderBottom: '1px solid #ddd',
  }

  $tab = {
    cursor: 'pointer',
    userSelect: 'none',
    color: '#333',
    padding: [2, 8],
    margin: [3, 4, -1, 0],
    background: 'linear-gradient(#f2f2f2, #eee)',
    border: '1px solid #ddd',
    borderBottom: 'none',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    flexGrow: 1
  }

  $active = {
    background: '#fff',
    borderLeft: `2px solid ${color.brand2}`,
    marginTop: 1,
    marginBottom: -3,
    color: '#000',
    fontWeight: 700,
    borderBottom: 'none',
  }
}

view Toolbar {
  prop light = false
  prop changeTab
  prop tabs
  prop activeTab

  const demoBorder = 4

  <bar>
    <ctrl class="close" />
    <ctrl class="max" />
    <ctrl class="open" />
  </bar>
  <Tabs
    if={tabs && tabs.length}
    tabs={tabs}
    changeTab={changeTab}
    activeTab={activeTab}
  />

  const borderColor = light ? '#fff' : '#222'
  const border = '1px solid ' + borderColor

  $ = {
    flexFlow: 'column'
  }

  $bar = {
    background: view.props.light ? light : 'rgb(29, 38, 45)',
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
    background: '#EB5B54',
    borderRadius: 10,
    margin: ['auto', 1],
    opacity: 0.2
  }

  $max = {
    background: '#F7C033'
  }

  $open = {
    background: '#69CB43'
  }
}