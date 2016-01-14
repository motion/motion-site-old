view DemoVideo {
  <YouTube />

  $ = {
    textAlign: 'center',
    alignItems: 'center',
    margin: [63, 'auto', 20],
    position: 'relative',
    zIndex: 100,

    [device.small]: {
      width: '100%',
    }
  }
}

view YouTube2 {
  const base = 'https://www.youtube.com/embed/VNfkk6lH0gg'
  const params = '?rel=0&showinfo=0&VQ=HD720&autoplay=1'
  const getUrl = () => base + params

  <iframe src={getUrl()} frameborder="0" device></iframe>

  $ = {
    width: '100%',
    position: 'absolute',
    top: -80,
    left: 0,
    right: 0,
    height: 900,
    opacity: 0.2,
    pointerEvents: 'none'
  }

  $iframe = {
    width: '100%',
    height: '100%',
    minHeight: 900,
    border: 'none'
  }
}

view YouTube {
  let started = false

  const base = 'https://www.youtube.com/embed/VNfkk6lH0gg'
  const params = '?rel=0&showinfo=0&VQ=HD720'

  const getUrl = () => base + params +
    (started ? '&autoplay=1' : '')

  const clicked = () => {
    started = true
  }

  // on(window, 'focus', () => {
  //   if (!started) started = true
  // })


  <cover />
  <iframe
    onClick={clicked}
    src={getUrl()}
    frameborder="0"
    device>
  </iframe>

  const originalHeight = 800
  const originalWidth = 1440
  const scale = 0.4
  const height = Math.round(originalHeight * scale)
  const width = Math.round(originalWidth * scale)

  $ = {
    width,
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: height,
    position: 'relative',

    [device.small]: {
      width: '100%',
      height: 'auto'
    }
  }

  $iframe = {
    width: '100%',
    height: '100%',
    minHeight: height,
    border: 'none',
    boxShadow: '0 0 26px rgba(0,0,0,0.25)',
    background: color.bg,
    borderRadius: 6
  }

  $cover = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.2)',
    transition: 'all ease-in 400ms',
    cursor: 'pointer',
    borderRadius: 6,

    hover: {
      background: 'rgba(0,0,0,0)'
    }
  }

  $bot = {
    top: 'auto',
    bottom: 0,
    height: 8
  }

  $h4 = {
    fontFamily: font.title
  }
}
