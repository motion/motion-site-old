import { font, device } from '../constants'

view Code {
  prop lang = 'javascript'
  prop large, source, children

  on.mount(() => {
    if (lang) hljs.highlightBlock(view.element())
  })

  <code class={{ [lang]: true, large }}>
    {clean(source) || children}
  </code>

  $ = {
    background: '#fff',
    border: '1px solid #ddd',
    color: 'rgba(0,0,0,0.75)',
    boxShadow: '0 0 4px rgba(0,0,0,0.05)',
    padding: 10,
    margin: [10, 0],
    borderRadius: 4,
    fontSize: 15,
    lineHeight: 1.5,
    whiteSpace: 'pre',
    fontFamily: font.monoSpace
  }

  $large = {
    fontSize: 16,
    lineHeight: 1.5,
    minWidth: '100%'
  }
}

function clean(src) {
  if (!src) return
  let arr = src.split("\n")
  arr.shift()

  let firstLineLen = arr[0].match(/\s+/)[0].length

  return arr
    .map(l => l.slice(firstLineLen))
    .join("\n")
}