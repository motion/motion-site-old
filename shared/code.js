view Code {
  prop lang = 'javascript'

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
    if (lang)
      hljs.highlightBlock(view.refs.code)
  })

  <code ref="code" class={lang || 'javascript'}>
    {clean(view.props.source) || view.props.children}
  </code>

  $ = {
    background: '#fff',
    border: '1px solid #ddd',
    color: 'rgba(0,0,0,0.55)',
    boxShadow: '0 0 4px rgba(0,0,0,0.05)',
    padding: 10,
    margin: [10, 0],
    borderRadius: 4,
    fontSize: 14,
    lineHeight: 1.4,
    whiteSpace: 'pre'
  }
}
