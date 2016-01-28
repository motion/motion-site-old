import { style, color, routes, font, device } from '../constants'

view Code {
  prop lang = 'javascript'
  prop large

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
      hljs.highlightBlock(view.element())
  })

  <code class={{ [lang]: true, large }}>
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
    whiteSpace: 'pre',
    fontFamily: font.monoSpace
  }

  $large = {
    fontSize: 16,
    lineHeight: 1.5,
    minWidth: '100%'
  }
}
