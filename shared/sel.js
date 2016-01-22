view Sel {
  prop onClick, name, active, children

  <a root onClick={() => onClick(name)}>
    {children}
  </a>

  const isActive = () => active == name
  $ = [
    {
      fontSize: 14,
      padding: [3, 12],
      margin: [0, 2]
    },

    onClick && {
      color: isActive() ? '#333' : '#999',
      cursor: 'pointer',
      border: '1px solid transparent',
      borderColor: isActive() ? '#eee' : 'transparent',
      borderRadius: 100,

      hover: {
        borderColor: `rgba(0,0,0,0.1)`
      }
    }
  ]
}
