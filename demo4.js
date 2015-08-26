view Demo4 {
  <one class="circle" />
  <two class="circle" />

  $ = {
    flexFlow: 'row',
    margin: 'auto',
    width: 300
  }

  $one = { background: 'blue' }
  $two = { background: 'red' }

  $.circle = {
    borderRadius: 100,
    width: 200, height: 200,
    flexShrink: 0,
    margin: ['auto', -40],
    opacity: 0.5
  }
}
