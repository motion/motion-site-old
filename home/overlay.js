export const Overlay = () => $(
  let active

  on.props(() => {
    active = view.props.active
  })

  <overlay>
    {view.props.children}
  </overlay>

  : {
    display: 'block',
    opacity: active ? 1 : 0,
    transition: 'all ease-in 300ms',
    position: 'absolute',
    left: -20,
    color: 'rgba(0,0,0,0.7)',
    textAlign: 'left',
    bottom: active ? '140%' : '130%',
    width: 200,
    padding: 10,
    boxShadow: '0 0 14px rgba(0,0,0,0.1)',
    border: '1px solid #ddd',
    borderRadius: 4,
    fontSize: 13,
    lineHeight: '1.25rem',
    background: '#fff',
    zIndex: 1000,
    pointerEvents: 'none'
  }
}