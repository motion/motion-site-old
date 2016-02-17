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
    zIndex: 10000
  }

  $text = {
    display: 'inline',
    color: '#fff',
    fontWeight: 600,
    cursor: 'pointer'
  }
}