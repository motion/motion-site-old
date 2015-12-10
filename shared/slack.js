view Slack {
  <Contain id="slack">
    <Interlude center>Join us on Slack!</Interlude>
    <iframe seamless="seamless" src="https://flint-slack.herokuapp.com/"></iframe>
  </Contain>

  $iframe = {
    border: 'none',
    width: '100%',
    height: 240,
    overflow: 'hidden'
  }

  $ = {
    margin: [-20, 0, 20]
  }

  $Contain = {
    flexFlow: 'column'
  }
}
