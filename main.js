// import tapEvents from 'react-tap-event-plugin'
// tapEvents()

import hljs from './hljs/hljs'
import flintLang from './hljs/javascript-flint'
import xml from './hljs/xml'

hljs.registerLanguage('javascript', flintLang)
hljs.registerLanguage('xml', xml)
hljs.configure({ useBR: false })

window.hljs = hljs

Flint.router.onChange(location => {
  if (typeof ga != 'undefined')
    ga('send', 'pageview', location.pathname)
})

view Main {
  let hidePass = false

  function passCorrect(val) {
    hidePass = val
    localStorage.setItem('authed', val)
  }

  passCorrect(
    window.location.search == '?yc' ||
    window.location.search == '?skipPassword' ||
    localStorage.getItem('authed') === 'true'
  )

  <Password onShow={passCorrect} if={!hidePass} />
  <site if={hidePass}>
    <Header nobg={Flint.router.isActive(routes.home)} />
    <Home route={routes.home} />
    <Learn route="/learn" />
    <Examples route={routes.examples} />
    <Docs route={routes.docs} />
    <Community route={routes.community} />
    <Spark route={routes.spark} />
    <Start route={routes.start} />
    <Roadmap route={routes.roadmap} />
    <Transition route={routes.transition} />
    <NotFound route={404} />
  </site>

  $ = {
    color: `rgba(0,0,0,0.65)`,
    fontSize: 16,
    lineHeight: '1.8rem',
    fontFamily: font.sansSerif,
    textRendering: 'optimizeLegibility',
    background: color.bg,
    position: 'relative',
    flexGrow: 1,
  }

  $site = {
    flexGrow: 1
  }
}

view Password {
  let password = ''

  const checkPass = () => {
    if (password.toLowerCase() == 'launch') view.props.onShow(true)
  }

  on.mount(() => {
    view.refs.input.focus()
  })

  <password>
    <input
      ref="input"
      onEnter={checkPass}
      sync={password} />

    <p>Curious? <a href="http://flint-slack.herokuapp.com">Say hi in Slack</a></p>
  </password>

  $password = {
    position: 'fixed',
    top: 0, right: 0,
    left: 0, bottom: 0,
    background: '#eee',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center'
  }

  $input = {
    padding: 20,
    background: '#fff',
    border: '1px solid #ddd',
    fontSize: 22,
    margin: [0, 'auto'],
    textAlign: 'center'
  }
}
