view Button {
  <button yield />

  $ = {
    color: '#fff',
    textShadow: '0 1px 0 rgba(0,0,0,0.2)',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    background: color.brand1,
    border: 'none',
    borderBottom: [2, 'solid', color(color.brand1).darken(1).hex()],
    borderRadius: 5,
    fontSize: 18,
    padding: [8, 28],
    alignItems: 'center'
  }
}