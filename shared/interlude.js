import { style, color, routes, font, device } from '../constants'

export const Interlude = () => $(
  <h2 yield />,

  {
    h2: [style.textGradient, {
      fontSize: 27,
      margin: [45, 'auto'],
      padding: [23, 0],
      fontFamily: font.title,
      zIndex: 100,
      textAlign: 'center',
      fontWeight: 300,
      color: '#666',

      [device.small]: {
        fontSize: 22,
        padding: 0
      }
    }]
  }
)
