view Code {
  function clean(src) {
    if (!src) return
    let arr = src.split("\n")
    arr.shift()

    let firstLineLen = arr[0].match(/\s+/)[0].length

    return arr
      .map(l => l.slice(firstLineLen))
      .join("\n")
  }

  on.mount(() => {
    hljs.highlightBlock(view.refs.code)
  })

  <code ref="code" class={view.props.lang || 'javascript'}>
    {clean(view.props.source) || view.props.children}
  </code>

  $ = {
    background: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0 0 4px rgba(0,0,0,0.05)',
    padding: 10,
    margin: [10, 0],
    borderRadius: 4,
    fontSize: 15,
    lineHeight: 1.4,
    whiteSpace: 'pre'
  }
}
