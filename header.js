import { style, color, routes, font, device } from './constants'

export const Header = ({ nobg }) => $(
  <wrap>
    <Contain maxWidth={890}>
      <Logo small />
      <Nav large />
      <Social tiny noSlack />
    </Contain>
  </wrap>,

  {
    root: {
      padding: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,

      [device.small]: {
        marginBottom: -150,
        boxShadow: 'none',
        position: 'relative'
      }
    },

    wrap: {
      flexFlow: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      background: nobg ? 'rgba(0,0,0,0.05)' : style.gradient,
      boxShadow: nobg ? 'transparent' : '0 0 4px rgba(0,0,0,0.25)',
      transition: 'all ease-in 300ms',

      [device.small]: {
        flexFlow: 'column'
      }
    },

    Nav: {
      flexGrow: 1,
      marginLeft: 10,
      marginTop: -3
    },

    Social: {
      justifyContent: 'flex-end'
    },

    Logo: {
      [device.small]: {
        marginTop: 15
      }
    }
  }
)

const routeProps = path => ({
  href: path,
  onClick: Motion.router.link(path),
  className: { active: Motion.router.isActive(path) }
})

const items = [
  { label: 'Start', route: '/start' },
  { label: 'Docs', route: routes.docs + '/intro' },
  { label: 'Examples', route: '/learn' },
  // { label: 'Migrate', route: '/transition' },
]

export const Nav = () => $(
  <a repeat={items} {...routeProps(_.route)}>{_.label}</a>,

  {
    root: {
      userSelect: 'none',
      margin: [0, 'auto'],
      flexFlow: 'row',
      zIndex: 100,

      [device.small]: {
        marginBottom: 0,
        margin: [10, 'auto', 0]
      }
    }

    a: {
      border: '1px solid transparent',
      color: 'rgba(255,255,255,0.8)',
      textShadow: '0 1px 1px rgba(0,0,0,0.15)',
      fontWeight: 300,
      borderBottom: 'none',
      fontSize: 16,
      padding: [0, 10],
      cursor: 'pointer',
      textDecoration: 'none',

      hover: {
        color: 'rgba(255,255,255,1)',
      }
    }

    active: {
      fontWeight: 600,
      color: '#fff'
    }
  }
)


function showInstall(e) {
  if (Motion.router.isActive(routes.home))
    util.linkScroll(e)
  else
    Motion.router.go(routes.home)
}

export const Logo = ({ small }) => {
  const width = 256
  const height = 61
  const multiplier = small ? .33333 : .28

  return $(
    <img
      onClick={Motion.router.link(routes.home)} src="/assets/images/motion-small.png"
    />,

    img: {
      width: Math.round(width * multiplier),
      height: Math.round(height * multiplier),
      margin: 'auto',
      cursor: 'pointer',

      [device.small]: {
        alignSelf: 'center'
      }
    }
  )
}
