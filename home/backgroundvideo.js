view BackgroundVideo {
  <video root muted preload autoplay loop>
    <source src="https://d2p1e9awn3tn6.cloudfront.net/3LiSUD9TiF.webm" />
  </video>

  $ = {
    ':before': {
      display: 'block',
      content: ' ',
      position: 'absolute',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'red'
    }
  }
}
