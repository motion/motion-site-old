import { style, color, routes, font, device } from './constants'

export const Page = ({ base, children, sidebar }) => $(
  <Contain>
    <PageSidebar if={base} yield />
    <sidebar if={sidebar}>{sidebar}</sidebar>
    <inner>
      {children}
    </inner>
  </Contain>,
  <Footer />,

  {
    root: {
      fontSize: 18,
      lineHeight: '1.95rem',
      padding: [20, 0, 0],
      flexGrow: 1,

      [device.small]: {
        flexFlow: 'column'
      }
    },

    Contain: {
      margin: 'auto',
      flexFlow: 'row',

      [device.small]: {
        flexFlow: 'column'
      }
    },

    inner: {
      padding: [5, 110, 100, 60],
      width: '100%'
    }
  }
)

export const PageSidebar = () => $(
  <links if={view.props.list}>
    <PageLink base={view.props.base} repeat={view.props.list} {..._} />
  </links>,
  <content if={!view.props.list} yield />,

  {
    root: {
      width: 120,
      margin: [20, 10],
      right: 20,
      userSelect: 'none',

      [device.small]: {
        borderRight: 'none',
        flexFlow: 'row',
        width: '90%',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }
    }
  }
)

export const PageLink = ({ base, slug, title }) => {
  const url = slug => base + '/' + slug
  const active = Motion.router.isActive(url(slug))

  return $(
    <a
      class={{ active }}
      onClick={Motion.router.link(url(slug))}>
      {title}
    </a>,

    {
      a: {
        borderRight: [3, 'solid', 'transparent'],
        color: '#555',
        fontSize: 16,
        whiteSpace: 'nowrap',
        padding: [0, 13],
        margin: 0,
        minWidth: 130,
        display: 'flex',
        width: '100%',
        textAlign: 'right',
        cursor: 'pointer',

        hover: {
          color: color.brand1
        },

        [device.small]: {
          width: 'auto'
        }
      },

      active: {
        fontWeight: 600,
        color: '#444',
        borderColor: color.brand,

        [device.small]: {
          border: 'none',
          textAlign: 'center',
          width: 'auto'
        }
      }
    }
  )
}

export const RoutedContent = ({ parent, content, params }) => {
  let el = content.filter(item => item.slug == params.slug)[0]

  return  $(
    <body>
      {view.el(`${parent}.${el.view}`)}
    </body>,

    {
      width: '100%'
    }
  )
}
