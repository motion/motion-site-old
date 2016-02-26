import { style, color, routes, font, device } from './constants'

import hljs from './hljs/hljs'
import motionLang from './hljs/javascript'
import xml from './hljs/xml'

hljs.registerLanguage('javascript', motionLang)
hljs.registerLanguage('xml', xml)
hljs.configure({ useBR: false })

window.hljs = hljs

Motion.router.onChange(location => {
  if (typeof ga != 'undefined')
    ga('send', 'pageview', location.pathname)
})

const Main = () => $(
  <home>
    <Header nobg={Motion.router.isActive(routes.home)} />
    <Home route={routes.home} />
    <Learn route="/learn" />
    <Examples route={routes.examples} />
    <Docs route={routes.docs} />
    <Community route={routes.community} />
    <Spark route={routes.spark} />
    <Start route={routes.start} />
    <Use route={routes.use} />
    <Roadmap route={routes.roadmap} />
    <Transition route={routes.transition} />
    <NotFound route={404} />
  </home>,

  {
    home: {
      color: `rgba(0,0,0,0.65)`,
      overflowX: 'hidden',
      fontSize: 16,
      lineHeight: '1.8rem',
      fontFamily: font.sansSerif,
      textRendering: 'optimizeLegibility',
      background: color.bg,
      position: 'relative',
    }
  }
)
