import { style, color, routes, font, device } from '../constants'

view Slack {
  <Contain id="slack">
    <iframe seamless="seamless" src="https://motion-slack.herokuapp.com/"></iframe>
  </Contain>

  $iframe = {
    border: 'none',
    width: 400,
    height: 340,
    overflow: 'hidden',

    [device.small]: {
      width: 380
    }
  }

  $ = {
    margin: [-40, -20, 20],

    [device.small]: {
      alignItems: 'center',
      margin: [-40, 0],
      width: '100%'
    }
  }

  $Contain = {
    flexFlow: 'column'
  }
}
