view Title {
  <title-h2 yield />

  let size = 22
  if (^big) size = 28
  if (^small) size = 22

  $h2 = [style.textGradient, {
    fontSize: size,
    padding: [10, 0],
    textAlign: ^center ? 'center' : 'auto'
  }, ^small && {
    padding: 0
  }, ^light && {
    fontWeight: 300
  }]
}
