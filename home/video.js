view DemoVideo {
  <YouTube />

  $ = {
    textAlign: 'center',
    alignItems: 'center',
    margin: [50, 'auto', 20],
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


  <cover if={started} />
  <cover if={false} class="bot" />
  <iframe
    onClick={clicked}
    src={getUrl()}
    frameborder="0"
    device>
  </iframe>
  <h4>Screencast with old syntax</h4>
  <p>A screencast with modern Flint code is coming soon</p>

  const originalHeight = 800
  const originalWidth = 1440
  const scale = 0.5
  const height = Math.round(originalHeight * scale)
  const width = Math.round(originalWidth * scale)

  $ = {
    width,
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: 350,
    position: 'relative',

    [device.small]: {
      width: '100%',
      height: 'auto'
    }
  }

  $iframe = {
    width: '100%',
    height: '100%',
    minHeight: 350,
    border: 'none',
    boxShadow: '0 0 16px rgba(0,0,0,0.25)',
    margin: [0, 0, 30],
    background: color.bg
  }

  $cover = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 7,
    background: color.bg
  }

  $bot = {
    top: 'auto',
    bottom: 0,
    height: 8
  }
}
