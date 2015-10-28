view Code {
  function clean(src) {
    if (!src) return
    let arr = src.split("\n")
    arr.shift()

    return arr
      .map(l => l.slice(6))
      .join("\n")
  }

  on('mount', () => {
    highlight.highlightBlock(view.refs.code)
  })

  <code ref="code" class={^lang || 'javascript'}>
    {clean(^source)}
  </code>

  $ = {
    background: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0 0 14px rgba(0,0,0,0.05)',
    padding: 10,
    margin: [20, 0],
    fontSize: 15,
    lineHeight: 1.4,
    whiteSpace: 'pre',
    borderRadius: 4,
    display: 'block'
  }
}