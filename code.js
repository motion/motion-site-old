view Code {
  src = `http://www.purplegene.com/script?url=https://gist.github.com/${^gist}.js`

  <iframe
    width={^width || '100%'}
    height={^height || '300px'}
    src={src}>
  </iframe>

  $iframe = {
    backgroundColor: 'transparent',
    border: '0px none transparent',
    padding: 0,
    overflow: 'hidden',
  }
}
