view DemoVenn {
  <Example inPage
    maxWidth={900}
    in={
      <Editor lines={15} left light source={`
      view Venn {
        <one class="circle" />
        <two class="circle" />

        $ = { flexFlow: 'row' }
        $one = { background: 'blue' }
        $two = { background: 'red' }

        $circle = {
          borderRadius: 100,
          width: 200, height: 200,
          margin: ['auto', -40],
          opacity: 0.5
        }
      }
      `} />
    }
    out={
      <Venn />
    } />
}

view Venn {
  <one class="circle" />
  <two class="circle" />

  $ = {
    flexFlow: 'row',
    margin: 'auto',
    width: 240
  }

  $one = { background: 'blue' }
  $two = { background: 'red' }

  $.circle = {
    borderRadius: 100,
    width: 200,
    height: 200,
    flexShrink: 0,
    margin: ['auto', -40],
    opacity: 0.5
  }
}
