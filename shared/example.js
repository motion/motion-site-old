import { style, color, routes, font, device } from '../constants'

export const Example = ({
    maxWidth,
    in: inn,
    out,
    flip,
    flipVertical,
    inPage,
    inStyle,
    outStyle
  }) => $(

  <Contain maxWidth={maxWidth || 1000}>
    <in>{inn}</in>
    <out>{out}</out>
  </Contain>,

  {
    root: {
      flexFlow: 'row',

      [device.small]: {
        flexFlow: 'column',
        width: '100%'
      }
    },

    out: [{
      flexGrow: 1,
      justifyContent: 'center',
      position: 'relative',
      order: flip ? 2 : 1,

      [device.small]: {
        width: '100%',
        order: flipVertical ? 1 : 2,
        padding: inPage ? [50, 0] : 0
      }
    }, outStyle],

    in: [{
      flexGrow: 1,
      order: flip ? 1 : 2,
      zIndex: 10,
      margin: 0,

      [device.small]: {
        width: '100%',
        margin: 'auto',
        order: flipVertical ? 2 : 1
      }
    }, inStyle]
  }
)
