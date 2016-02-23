import { color } from '../constants'

view Attr {
  let hovered = false

  <attr onMouseEnter={() => hovered = true} onMouseLeave={() => hovered = false}>
    <text>{view.props.children}</text>
    <Overlay active={hovered}>
      {view.props.alt}
    </Overlay>
  </attr>

  $ = {
    display: 'inline',
    position: 'relative',
    fontSize: 18,
    zIndex: 10000
  }

  $text = {
    display: 'inline',
    color: 'rgba(255,255,255,0.8)',
    fontWeight: 300,
    cursor: 'pointer',
    transition: 'all ease-in 300ms',

    hover: {
      color: '#fff'
    }
  }
}