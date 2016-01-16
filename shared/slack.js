view Slack {
  <Contain id="slack">
    <iframe seamless="seamless" src="https://flint-slack.herokuapp.com/"></iframe>
  </Contain>

  $iframe = {
    border: 'none',
    width: 400,
    height: 340,
    overflow: 'hidden'
  }

  $ = {
    margin: [-40, 0, 20]
  }

  $Contain = {
    flexFlow: 'column'
  }
}
