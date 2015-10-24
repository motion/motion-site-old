view Title {
  <h2 yield />
  $ = false

  let size = 24
  if (^big) size = 28
  if (^small) size = 22

  $h2 = [style.textGradient, {
    fontSize: size,
    padding: [10, 0],
    textAlign: ^center ? 'center' : 'auto'
  }, ^small && {
    padding: 0
  }]
}
