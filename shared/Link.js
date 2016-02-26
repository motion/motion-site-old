import { style } from '../constants'

export const Link = ({ to, color, noborder }) => $(
  <a root onClick={to && Motion.router.link(to)} yield />,

  {
    root: [
      style.link,

      {
        color: color || 'auto',
        border: noborder ? 'none' : 'auto'
      }
    ]
  }
)
