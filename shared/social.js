import { style, color, routes, font, device, util } from '../constants'

export const Social = ({ tiny }) => $(
  <a target="_blank" href="http://github.com/motion/motion">
    <IconGithub />
  </a>,
  <a if={!view.props.noSlack} href="/?slack" onClick={util.linkScroll}>
    <IconSlack />
  </a>,
  <a target="_blank" href="https://twitter.com/with_motion">
    <IconTwitter />
  </a>,

  {
    root: {
      height: 40,
      flexFlow: 'row',
      textAlign: 'center',
      fontSize: 16,
      margin: [5, 'auto', 0],
      alignItems: 'center',
      justifyContent: 'center',
    },

    a: tiny ? {
      margin: [0, 20],
      transform: {
        scale: 0.7
      }
    } : {
      margin: [0, 24, -10]
    }
  }
)
