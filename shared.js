import { style, color, routes, font, device } from './constants'

const Blur = ({ size = 500 }) => $({
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
})

const Row = ({ reverse, center, centered, spread, contain }) => $(
  <row class={{ contain }} yield />,

  {
    root: {
      flexFlow: reverse ? 'row-reverse' : 'row',
      justifyContent: spread ? 'space-between' : center ? 'center' : 'flex-start',
      alignItems: centered ? 'center' : 'flex-start',
      width: '100%',

      [device.small]: {
        minWidth: 0,
        flexFlow: 'column'
      }
    },

    contain: {
      maxWidth: 1100,
      minWidth: 700,
      width: '80%',
      margin: `auto`
    }
  }
)

const Col = ({ center, centered, pad, grow }) => $({
  root: {
    flexFlow: 'column',
    justifyContent: center ? 'center' : 'flex-start',
    alignItems: centered ? 'center' : 'flex-start',
    margin: center ? 'auto' : 0,
    flexGrow: typeof grow != 'undefined' ? grow : 1,
    flexShrink: 1,
    maxWidth: '100%',
    padding: pad ? 20 : 0,

    [device.small]: {
      margin: 0,
      width: '100%'
    }
  }
})
