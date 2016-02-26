import { style, color, routes, font, device } from '../constants'

export const Slack = () => $(
  <Contain id="slack">
    <iframe seamless="seamless" src="https://motion-slack.herokuapp.com/"></iframe>
  </Contain>,

  {
    root: {
      margin: [-40, -20, 20],

      [device.small]: {
        alignItems: 'center',
        margin: [-40, 0],
        width: '100%'
      }
    },

    iframe: {
      border: 'none',
      width: 400,
      height: 340,
      overflow: 'hidden',

      [device.small]: {
        width: 380
      }
    },

    Contain: {
      flexFlow: 'column'
    }
  }
)
