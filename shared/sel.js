export const Sel = ({ onClick, name, active, children }) => {
  const isActive = () => active == name

  return $(
    <a onClick={() => onClick(name)}>
      {children}
    </a>,

    {
      root: [
        {
          fontSize: 15,
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
  )
}
