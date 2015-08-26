view Demo3 {
  <Row1>
    <Col>Hello</Col>
    <Col>Hello</Col>
    <Col>Hello</Col>
  </Row1>

  $ = { width: '100%' }
}

view Row1 {
  <row1>{^children}</row1>

  $ = {
    flexFlow: 'row',
    flexGrow: 1
  }
}

view Col {
  <column>{^children}</column>

  $ = {
    flexGrow: 1,
    background: '#eee',
    margin: 5
  }
}
